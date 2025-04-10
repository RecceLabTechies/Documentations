# Utilities

The Utilities module provides shared functionality used throughout the LLM-Powered Analytics Backend system. It includes database handling, logging configuration, LLM setup, and common data structures.

## Module Structure

```mermaid
graph TD
    A[utils] --> B[database.py]
    A --> C[logging_config.py]
    A --> D[llm_config.py]
    A --> E[schema.py]
    A --> F[__init__.py]
```

## Core Components

### Database Handling (`database.py`)

The Database module provides a centralized interface for MongoDB operations, implementing a singleton pattern to maintain a single database connection throughout the application.

#### Key Classes and Functions

```python
class Database:
    """
    Singleton class for managing MongoDB database connections and operations.
    """
    client = None
    db = None

    @classmethod
    def initialize(cls) -> bool:
        """
        Initialize the MongoDB connection.

        Returns:
            bool: True if connection was successful, False otherwise
        """

    @classmethod
    def get_collection(cls, collection_name: str):
        """
        Get a reference to a MongoDB collection, if it's not restricted.

        Args:
            collection_name: Name of the collection to retrieve

        Returns:
            Collection: MongoDB collection reference, or None if the collection is restricted
        """

    @classmethod
    def list_collections(cls) -> List[str]:
        """
        List all accessible (non-restricted) collections in the database.

        Returns:
            list: List of accessible collection names
        """

    @classmethod
    def analyze_collections(cls) -> Dict[str, Dict]:
        """
        Analyze all accessible collections to extract field information and statistics.

        Returns:
            dict: Nested dictionary with collection metadata
        """
```

#### Security Features

The database module implements security features to protect sensitive data:

```python
# Restricted collections that should not be accessible
RESTRICTED_COLLECTIONS = ["users", "prophet_predictions"]

def is_collection_accessible(collection_name: str) -> bool:
    """
    Check if a collection is accessible or restricted.

    Args:
        collection_name: The name of the collection to check

    Returns:
        bool: True if the collection is accessible, False if restricted
    """
    return collection_name not in RESTRICTED_COLLECTIONS
```

#### Collection Analysis

The `analyze_collections` method provides rich metadata about data collections, which is used by the Collection Selector module to match queries with appropriate data sources.

```mermaid
flowchart TD
    A[analyze_collections] --> B[Iterate Collections]
    B --> C[Examine Sample Documents]
    C --> D[Identify Field Types]
    D --> E[Analyze Field Values]
    E --> F[Compile Collection Metadata]
    F --> G[Return Metadata Dictionary]
```

### Logging Configuration (`logging_config.py`)

The Logging Configuration module provides centralized, consistent logging setup for all components in the system, ensuring proper log formatting and appropriate verbosity levels.

#### Key Functions

```python
def setup_logging(logger_name: str, log_level: str = None) -> logging.Logger:
    """
    Configure a logger with consistent formatting and level settings.

    Args:
        logger_name: The name of the logger to configure
        log_level: Optional override for the default log level

    Returns:
        Logger: Configured logger instance
    """
```

#### Logging Levels

The logging system supports various verbosity levels:

- **DEBUG**: Detailed information for debugging and troubleshooting
- **INFO**: General operational information
- **WARNING**: Issues that might cause problems but don't prevent operation
- **ERROR**: Serious problems that prevent specific operations
- **CRITICAL**: Critical issues that may cause system failure

The default level is set via the `LOG_LEVEL` environment variable or falls back to `INFO`.

### LLM Configuration (`llm_config.py`)

The LLM Configuration module centralizes settings for Large Language Model services, providing a factory function for creating properly configured LLM instances.

#### Key Variables and Functions

```python
# Groq API configuration
GROQ_API_KEY = os.getenv("GROQ_API_KEY")

# Model configurations
CLASSIFIER_MODEL = "llama3-8b-8192"
VALIDATOR_MODEL = "llama3-8b-8192"
COLLECTION_SELECTOR_MODEL = "llama3-8b-8192"
COLLECTION_PROCESSOR_MODEL = "qwen-2.5-coder-32b"
DESCRIPTION_GENERATOR_MODEL = "deepseek-r1-distill-llama-70b"
ANALYSIS_QUERIES_MODEL = "llama3-8b-8192"
CHART_DATA_MODEL = "llama3-8b-8192"

def get_groq_llm(model_name=None):
    """
    Get a configured Groq LLM instance.

    Args:
        model_name: The model name to use (defaults to CLASSIFIER_MODEL)

    Returns:
        ChatGroq: A configured ChatGroq instance

    Raises:
        ValueError: If GROQ_API_KEY is not found
    """
```

#### Model Selection Strategy

Different parts of the system use different LLM models based on their specific requirements:

```mermaid
flowchart TD
    A[Task Requirements] --> B{Task Type}
    B -->|Classification| C[Smaller, Faster Models]
    B -->|Generation| D[Larger, More Capable Models]
    C --> E[llama3-8b-8192]
    D --> F[deepseek-r1-distill-llama-70b]
    D --> G[qwen-2.5-coder-32b]
```

The system follows these principles for model selection:

1. **Efficiency**: Smaller models for simpler tasks that need faster response times
2. **Capability**: Larger models for complex reasoning or generation tasks
3. **Consistency**: Same model for similar tasks to ensure consistent behavior

### Schema Definitions (`schema.py`)

The Schema module defines data structures and validation schemas used throughout the application, using Pydantic models for type safety and validation.

#### Key Models

```python
class ColumnMetadata(BaseModel):
    """
    Metadata about a column/field in a collection.
    """
    name: str
    type: str
    stats: Dict[str, Any]

class CollectionMetadata(BaseModel):
    """
    Metadata about a MongoDB collection.
    """
    name: str
    fields: List[ColumnMetadata]
    sample_size: int

class QueryParameter(BaseModel):
    """
    Parameter extracted from a user query.
    """
    type: str
    value: Any
    confidence: float
```

#### Schema Validation

The Schema module provides validation functions to ensure data conforms to expected formats:

```python
def validate_chart_parameters(parameters: Dict[str, Any]) -> Dict[str, Any]:
    """
    Validate and normalize chart generation parameters.

    Args:
        parameters: Dictionary of chart parameters

    Returns:
        Validated and normalized parameters

    Raises:
        ValueError: If required parameters are missing or invalid
    """
```

## Integration with Other Components

The Utilities are used throughout the system:

```mermaid
flowchart TD
    A[utils] --> B[Database]
    A --> C[Logging]
    A --> D[LLM Config]
    A --> E[Schema]

    B --> F[Data Processor]
    B --> G[Report Generator]
    C --> H[All Components]
    D --> I[Query Processor]
    D --> J[Regular Generator]
    D --> K[Report Generator]
    E --> L[Data Validation]
    E --> M[API Responses]
```

### Database Usage

```python
from mypackage.utils.database import Database

# Initialize database connection
Database.initialize()

# Get a reference to a collection
collection = Database.get_collection("campaign_performance")

# Query the database
results = collection.find({"channel": "Facebook"})
```

### Logging Usage

```python
from mypackage.utils.logging_config import setup_logging

# Set up a logger for a module
logger = setup_logging("my_module")

# Log messages at different levels
logger.debug("Detailed debug information")
logger.info("General operational information")
logger.warning("Something might be wrong")
logger.error("Something is definitely wrong")
```

### LLM Configuration Usage

```python
from mypackage.utils.llm_config import get_groq_llm

# Get a configured LLM instance
llm = get_groq_llm("llama3-8b-8192")

# Use the LLM
response = llm.invoke("Classify this query: What was our ad spend last month?")
```

## Error Handling

The Utilities module implements comprehensive error handling:

1. **Database Connection Errors**: Graceful handling of connection failures
2. **Authentication Errors**: Clear error messages for API key issues
3. **Configuration Errors**: Validation of environment variables with sensible defaults
4. **Schema Validation Errors**: Descriptive error messages for invalid data

## Configuration

Configuration for the Utilities is primarily through environment variables:

```
# MongoDB Configuration
MONGO_URI="mongodb://root:example@mongodb:27017/"
MONGO_DB_NAME="test_database"

# Logging Configuration
LOG_LEVEL="INFO"

# LLM Configuration
GROQ_API_KEY="your-api-key-here"
```

These can be set directly in the environment or through a `.env` file loaded at startup.

## Performance Considerations

The Utilities module includes several performance optimizations:

1. **Connection Pooling**: The Database class uses MongoDB's connection pooling
2. **Singleton Pattern**: Ensures a single database connection is shared
3. **Lazy Initialization**: Database connections are established only when needed
4. **Caching**: Collection metadata is cached to reduce repeated analysis

## Security Considerations

Security features in the Utilities module include:

1. **Restricted Collections**: Prevents access to sensitive collections
2. **Environment Variables**: Secrets are loaded from environment, not hardcoded
3. **Error Messages**: Careful crafting of error messages to avoid information leakage
4. **Validation**: Input validation to prevent injection attacks
