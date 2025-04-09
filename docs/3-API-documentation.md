# API Documentation

## 1. Base URLs
- Backend API: `{NEXT_PUBLIC_API_URL}/api/v1` (defaults to `/api/v1`)
- LLM API: `{NEXT_PUBLIC_LLM_API_URL}` (defaults to `/llm-api`)

## 2. Authentication
All API endpoints require authentication. The system uses JWT (JSON Web Tokens) for authentication.

## 3. API Endpoints

### 3.1 User Management

#### Get Users
```http
GET /api/v1/users
GET /api/v1/users?username={username}
```
**Response:**
```typescript
interface UserData {
  username: string;
  email: string;
  role: string;
  company: string;
  password: string;
  chart_access: boolean;
  report_generation_access: boolean;
  user_management_access: boolean;
}
```

#### Create User
```http
POST /api/v1/users
```
**Request Body:**
```typescript
interface UserData {
  username: string;
  email: string;
  role: string;
  company: string;
  password: string;
  chart_access: boolean;
  report_generation_access: boolean;
  user_management_access: boolean;
}
```

#### Update User
```http
PUT /api/v1/users/{username}
PATCH /api/v1/users/{username}
```
**Request Body:** Partial or complete UserData object

#### Delete User
```http
DELETE /api/v1/users/{username}
```

### 3.2 Campaign Management

#### Get Campaign Filter Options
```http
GET /api/v1/campaigns/filter-options
```
**Response:**
```typescript
interface CampaignFilterOptions {
  channels: string[];
  age_groups: string[];
  countries: string[];
  date_range: {
    start: string;
    end: string;
  };
}
```

#### Get Filtered Campaigns
```http
POST /api/v1/campaigns
```
**Request Body:**
```typescript
interface CampaignFilters {
  channels?: string[];
  age_groups?: string[];
  countries?: string[];
  date_range?: {
    start: string;
    end: string;
  };
}
```

#### Get Monthly Aggregated Data
```http
POST /api/v1/campaigns/monthly-aggregated
```
**Request Body:** CampaignFilters
**Response:**
```typescript
interface MonthlyPerformanceData {
  date: string;
  revenue: number;
  ad_spend: number;
  new_accounts: number;
}
```

### 3.3 Analytics

#### Get Channel Contribution
```http
GET /api/v1/campaigns/channel-contribution
```
**Response:**
```typescript
interface ChannelContributionData {
  channels: string[];
  contributions: number[];
}
```

#### Get Cost Metrics Heatmap
```http
GET /api/v1/campaigns/cost-metrics-heatmap
```
**Response:**
```typescript
interface CostMetricsHeatmapData {
  channels: string[];
  metrics: {
    [key: string]: number[];
  };
}
```

#### Get Latest Month Metrics
```http
GET /api/v1/campaigns/latest-month-roi
GET /api/v1/campaigns/latest-month-revenue
```
**Response:**
```typescript
interface LatestMonthROI {
  roi: number;
  date: string;
}

interface LatestMonthRevenue {
  revenue: number;
  date: string;
}
```

### 3.4 Prophet Predictions

#### Get Predictions
```http
GET /api/v1/prophet-predictions?from_date={timestamp}&to_date={timestamp}
```
**Response:**
```typescript
interface ProphetPredictionData {
  date: string;
  revenue: number;
  ad_spend: number;
  new_accounts: number;
}
```

#### Trigger Prediction Pipeline
```http
POST /api/v1/prophet-pipeline/trigger
```
**Request Body:**
```typescript
{
  forecast_months: number;
}
```

#### Check Pipeline Status
```http
GET /api/v1/prophet-pipeline/status
```

### 3.5 LLM API

#### Process Query
```http
POST /llm-api/api/query
```
**Request Body:**
```typescript
interface QueryRequest {
  query: string;
}
```
**Response:**
```typescript
interface QueryResponse {
  output: {
    type: 'chart' | 'description' | 'report' | 'error';
    result: string; // Base64 encoded for charts
  };
  original_query: string;
}
```

#### Health Check
```http
GET /llm-api/api/health
```
**Response:**
```typescript
interface HealthResponse {
  status: 'ok' | 'error';
  message: string;
  healthy: boolean;
  collections_count?: number;
}
```

### 3.6 Database Management

#### Get Database Structure
```http
GET /api/v1/database/structure
```
**Response:**
```typescript
interface DbStructure {
  tables: string[];
  relationships: {
    [key: string]: string[];
  };
}
```

#### List Databases
```http
GET /api/v1/database
```
**Response:**
```typescript
interface DatabaseListResponse {
  databases: string[];
}
```

#### Delete Database
```http
POST /api/v1/database/delete
```
**Request Body:**
```typescript
{
  database_name: string;
}
```

## 4. Error Handling

All API endpoints follow a consistent error response format:
```typescript
interface ErrorResponse {
  error: {
    message: string;
    type?: string;
    details?: unknown;
  };
}
```

## 5. Response Status Codes

- 200: Success
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Internal Server Error
- 503: Service Unavailable

## 6. Data Types

### 6.1 Campaign Data
```typescript
interface CampaignData {
  date: string;
  campaign_id: string;
  channel: string;
  age_group: string;
  ad_spend: number;
  views: number;
  leads: number;
  new_accounts: number;
  country: string;
  revenue: number;
}
```

### 6.2 Monthly Data
```typescript
interface MonthlyData {
  date: string;
  revenue: number;
  ad_spend: number;
  new_accounts: number;
}
```

## 7. Rate Limiting

- Standard rate limit: 100 requests per minute per IP
- Burst limit: 20 requests per second per IP

## 8. CORS Configuration

The API supports CORS with the following configuration:
- Allowed Origins: Configured through environment variables
- Allowed Methods: GET, POST, PUT, PATCH, DELETE
- Allowed Headers: Content-Type, Authorization
- Max Age: 3600 seconds
