# System Architecture

This document provides a comprehensive overview of the LLM-Powered Analytics Backend architecture, including component relationships, data flow, and design principles.

## System Overview

The LLM-Powered Analytics Backend is designed to process natural language queries about data, perform appropriate analysis, and return meaningful insights in various formats (charts, descriptions, or comprehensive reports). The system leverages Large Language Models (LLMs) to understand user queries and guide the analytics process.

### High-Level Architecture

```mermaid
graph TD
    subgraph "API Layer"
        API[Flask API]
        Health[Health Check Endpoint]
        Query[Query Endpoint]
    end

    subgraph "Pipeline Orchestration"
        MainPipeline[Main Pipeline]
        TruncatedPipeline[Truncated Pipeline]
    end

    subgraph "Processing Modules"
        QueryProcessor[Query Processor]
        DataProcessor[Data Processor]
        RegularGenerator[Regular Generator]
        ReportGenerator[Report Generator]
    end

    subgraph "External Services"
        MongoDB[(MongoDB)]
        GroqLLM[Groq LLM Service]
    end

    API --> MainPipeline
    API --> Health
    MainPipeline --> QueryProcessor
    MainPipeline --> DataProcessor
    MainPipeline --> RegularGenerator
    MainPipeline --> ReportGenerator
    ReportGenerator --> TruncatedPipeline
    QueryProcessor & DataProcessor & RegularGenerator & ReportGenerator --> GroqLLM
    DataProcessor --> MongoDB
```

## Core Components

### API Layer (`app.py`)

The API layer provides HTTP endpoints for client applications to interact with the system:

- `/api/query` (POST): Processes analytical queries and returns results
- `/api/health` (GET): Checks system health, including database connectivity

### Pipeline Orchestration (`pipeline.py`)

The main pipeline orchestrates the data flow through the system, handling:

1. Query validation
2. Query classification
3. Collection selection
4. Data processing
5. Result generation

```mermaid
sequenceDiagram
    participant Client
    participant API as API Layer
    participant Pipeline as Main Pipeline
    participant QP as Query Processor
    participant DP as Data Processor
    participant RG as Regular Generator
    participant RPG as Report Generator
    participant DB as MongoDB

    Client->>API: POST /api/query
    API->>Pipeline: process(query)
    Pipeline->>QP: validate_query(query)
    Pipeline->>QP: classify_query(query)

    alt Report Query
        Pipeline->>RPG: generate_report(query)
        RPG->>QP: generate_analysis_queries(query)
        loop For each analysis query
            RPG->>DP: select_collection(query)
            RPG->>DP: process_data(collection, query)
            DP->>DB: fetch_data()
            DB-->>DP: return data
            RPG->>RG: generate_chart/description
        end
        RPG-->>Pipeline: return combined results
    else Chart or Description Query
        Pipeline->>DP: select_collection(query)
        Pipeline->>DP: process_data(collection, query)
        DP->>DB: fetch_data()
        DB-->>DP: return data

        alt Chart Query
            Pipeline->>RG: generate_chart(data, query)
        else Description Query
            Pipeline->>RG: generate_description(data, query)
        end
    end

    Pipeline-->>API: return results
    API-->>Client: JSON response
```

### Processing Modules

#### Query Processor (`a_query_processor`)

Handles query validation and classification:

- `query_validator.py`: Ensures queries are well-formed and processable
- `query_classifier.py`: Categorizes queries as chart, description, or report requests

#### Data Processor (`b_data_processor`)

Manages data selection and processing:

- `collection_selector.py`: Determines which data collection to use for a query
- `collection_processor.py`: Retrieves and processes data from MongoDB

#### Regular Generator (`c_regular_generator`)

Generates standard outputs for simple queries:

- `chart_generator.py`: Creates visual representations of data
- `description_generator.py`: Produces textual analysis of data

#### Report Generator (`d_report_generator`)

Handles complex queries requiring multi-step analysis:

- `report_generator.py`: Orchestrates the report generation process
- `generate_analysis_queries.py`: Breaks down complex queries into individual analysis tasks
- `truncated_pipeline.py`: Processes individual analysis queries within a report

### Utilities (`utils`)

Supporting components and services:

- `database.py`: MongoDB connection and operations
- `llm_config.py`: LLM service configuration
- `logging_config.py`: Centralized logging setup
- `schema.py`: Data schema definitions

## Data Flow

```mermaid
flowchart TD
    A[User Query] --> B{Query Valid?}
    B -->|No| C[Error Response]
    B -->|Yes| D{Query Type}

    D -->|Chart| E[Select Collection]
    D -->|Description| E
    D -->|Report| F[Generate Analysis Queries]

    E --> G[Process Collection Data]
    G --> H{Chart or Description?}

    H -->|Chart| I[Generate Chart]
    H -->|Description| J[Generate Description]

    F --> K[For Each Query]
    K --> L[Run Truncated Pipeline]
    L --> M[Collect Results]

    I & J & M --> N[Return Results]
```

## LLM Integration

The system uses LLMs provided by Groq for several critical tasks:

1. Query classification
2. Determining relevant data collections
3. Breaking down complex report queries
4. Generating natural language descriptions

```mermaid
flowchart LR
    subgraph "LLM Tasks"
        A[Query Classification]
        B[Collection Selection]
        C[Query Decomposition]
        D[Description Generation]
    end

    subgraph "LLM Models"
        E[llama3-8b-8192]
        F[deepseek-r1-distill-llama-70b]
        G[qwen-2.5-coder-32b]
    end

    A --> E
    B --> E
    C --> E
    D --> F
```

## Security Model

The system implements several security measures:

1. Collection access restrictions (RESTRICTED_COLLECTIONS in database.py)
2. Input validation using Pydantic models
3. Environment-based configuration for sensitive parameters
4. Error handling to prevent information leakage

## Design Principles

The architecture follows these key design principles:

1. **Modularity**: Each component has a clear, distinct responsibility
2. **Pipeline Processing**: Data flows through well-defined stages
3. **Error Isolation**: Errors in one stage don't crash the entire system
4. **Configurability**: System behavior can be adjusted through configuration
5. **Testability**: Components can be tested in isolation
