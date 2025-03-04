# LLM Architecture and Implementation

## System Overview

The system follows a pipeline architecture for processing user queries through various stages of analysis and generation.

```mermaid
graph TD
    User[User Query] --> Pipeline[Pipeline Orchestrator]
    Pipeline --> Classifier[Query Classifier]
    Classifier --> TypeDecision{Query Type}
    TypeDecision -->|Chart| ChartFlow[Chart Generation]
    TypeDecision -->|Description| DescFlow[Description Generation]
    TypeDecision -->|Report| ReportFlow[Report Generation]

    ChartFlow --> JSONSelect[JSON Selector]
    DescFlow --> JSONSelect
    ReportFlow --> QueryGen[Query Generator]

    JSONSelect --> JSONProcess[JSON Processor]
    JSONProcess --> Output[Final Output]
    QueryGen --> Output
```

## Key Technologies Used

- LangChain Framework
  - ChatPromptTemplate for structured prompting
  - OllamaLLM for local LLM integration
  - Tool and PythonREPL for code execution
- Pandas for data manipulation
- Seaborn/Matplotlib for visualization
- Pydantic for data validation

## Query Classification Flow

```mermaid
graph LR
    Query[User Query] --> Classifier[Query Classifier]
    Classifier --> LLM[LLM Analysis]
    LLM --> Types{Query Types}
    Types -->|Visual| Chart[Chart Type]
    Types -->|Analysis| Description[Description Type]
    Types -->|Comprehensive| Report[Report Type]
```

## Key Concepts and Components

### Query Classification System

- Uses LLM to categorize queries into three types:
  - Description: Detailed analysis requests
  - Chart: Visual representation requests
  - Report: Comprehensive analysis requests
- Implements Pydantic models for type validation
- Uses template-based prompting for consistent classification

### JSON Processing System

```mermaid
graph LR
    JSON[JSON Files] --> Extractor[Schema Extractor]
    Extractor --> Validator[Data Validator]
    Validator --> DataFrame[Pandas DataFrame]
    DataFrame --> Filter[Query-based Filter]
    Filter --> ProcessedData[Processed Data]
```

### Chart Generation System

- Intelligent column selection based on data types
- Supports multiple chart types:
  - Line charts for time series
  - Scatter plots for relationships
  - Bar charts for comparisons
  - Box plots for distributions
  - Heatmaps for correlations

### Description Generation System

```mermaid
graph LR
    Data[DataFrame] --> Stats[Statistical Analysis]
    Stats --> Selection[Column Selection]
    Selection --> Analysis[LLM Analysis]
    Analysis --> Format[Markdown Formatting]
    Format --> Output[Structured Description]
```

## Error Handling and Validation

- Pydantic models for data validation
- Structured error handling throughout pipeline
- Fallback mechanisms for LLM responses
- Data type validation for chart generation

## LLM Implementation Details

### LLM Integration and Model Selection

- Utilizes `langchain_ollama.llms.OllamaLLM` with "llama3.2" model
- Local model deployment for faster inference and data privacy
- Consistent model temperature of 0.7 for balanced creativity and consistency

### Prompt Engineering Patterns

#### Structured Output Prompts

```mermaid
graph LR
    Prompt[Prompt Template] --> Format[Format Specification]
    Format --> Validation[Response Validation]
    Validation --> Parser[Output Parser]
    Parser --> Structure[Structured Data]
```

- All prompts designed for structured, parseable outputs
- Example formats:
  ```
  query_type: [description/report/chart]
  x_axis: [column name]
  y_axis: [column name]
  ```
- Context-rich prompts with data schemas and type information

### LangChain Chain Composition

```mermaid
graph LR
    Prompt[Prompt Template] -->|Pipe| Model[LLM Model]
    Model -->|Pipe| Parser[Response Parser]
    Parser -->|Pipe| Validator[Output Validator]
```

- Uses LangChain's pipe operator (`|`) for chain composition
- Standard pattern: `chain = prompt | model | parse_llm_response`
- Integration with Python REPL for dynamic code execution

### Multi-Stage Processing

```mermaid
graph LR
    Input[User Input] --> Classifier[Query Classifier]
    Classifier --> Router{Router}
    Router -->|Chart| ChartChain[Chart Chain]
    Router -->|Description| DescChain[Description Chain]
    Router -->|Report| ReportChain[Report Chain]
    ChartChain --> Validator[Output Validator]
    DescChain --> Validator
    ReportChain --> Validator
    Validator --> Output[Final Output]
```

- Classification-based routing
- Specialized processing chains for each query type
- Consistent validation across all outputs

### Validation and Error Handling

#### Pydantic Models

- `ChartInfo`: Chart generation parameters
- `QueryType`: Query classification
- `ColumnSelections`: Column selections
- `JSONAnalysisResult`: JSON file selection

#### Response Processing

- Structured parsing of LLM outputs
- Deduplication of responses
- Type checking and conversion
- Fallback mechanisms

### LLM Output Control

#### Format Control

- Strict output formatting requirements
- Example:
  ```
  file: [selected json filename]
  chart_type: [one of: line, scatter, bar, box, heatmap]
  ```

#### Response Validation

- Post-processing of LLM outputs
- Consistency checks
- Type validation
- Error recovery 