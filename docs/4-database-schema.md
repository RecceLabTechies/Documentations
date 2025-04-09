# Database Schema Documentation

## 1. Overview
The system uses MongoDB as its database system, implementing a document-based schema design. The database is structured to support three main domains: User Management, Campaign Performance Analytics, and Prophet Predictions.

## 2. Collections

### 2.1 Campaign Performance Collection
```typescript
interface CampaignPerformance {
  date: string;           // ISO format date
  campaign_id: string;    // Unique campaign identifier
  channel: string;        // Marketing channel
  age_group: string;      // Target demographic
  ad_spend: number;       // Advertising expenditure
  views: number;          // Number of views/impressions
  leads: number;          // Number of leads generated
  new_accounts: number;   // Number of new accounts
  country: string;        // Target country
  revenue: number;        // Generated revenue
}
```

#### Indexes:
- Compound Index: `{date: 1, campaign_id: 1}` (Primary)
- Single Field Index: `{channel: 1}`
- Single Field Index: `{country: 1}`

### 2.2 User Collection
```typescript
interface User {
  username: string;                   // Unique username
  email: string;                      // User email
  role: string;                       // User role
  company: string;                    // Associated company
  password: string;                   // Hashed password
  chart_access: boolean;              // Chart viewing permission
  report_generation_access: boolean;  // Report generation permission
  user_management_access: boolean;    // User management permission
}
```

#### Indexes:
- Unique Index: `{username: 1}` (Primary)
- Unique Index: `{email: 1}`
- Single Field Index: `{role: 1}`

### 2.3 Prophet Predictions Collection
```typescript
interface ProphetPrediction {
  date: string;           // Prediction date
  revenue: number;        // Predicted revenue
  ad_spend: number;       // Predicted ad spend
  new_accounts: number;   // Predicted new accounts
}
```

#### Indexes:
- Single Field Index: `{date: 1}` (Primary)
- Compound Index: `{date: 1, revenue: 1}`

## 3. Data Types

### 3.1 Primitive Types
- `string`: UTF-8 encoded text
- `number`: 64-bit floating point
- `boolean`: True/False values
- `date`: ISO 8601 formatted dates

### 3.2 Complex Types
- Arrays: Ordered lists of values
- Objects: Nested document structures
- References: Document references (ObjectId)

## 4. Schema Validation

### 4.1 Campaign Performance Validation
```javascript
{
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["date", "campaign_id", "channel", "age_group", "ad_spend", 
                "views", "leads", "new_accounts", "country", "revenue"],
      properties: {
        date: { bsonType: "string" },
        campaign_id: { bsonType: "string" },
        channel: { bsonType: "string" },
        age_group: { bsonType: "string" },
        ad_spend: { bsonType: "number" },
        views: { bsonType: "number" },
        leads: { bsonType: "number" },
        new_accounts: { bsonType: "number" },
        country: { bsonType: "string" },
        revenue: { bsonType: "number" }
      }
    }
  }
}
```

### 4.2 User Validation
```javascript
{
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["username", "email", "role", "company", "password",
                "chart_access", "report_generation_access", "user_management_access"],
      properties: {
        username: { bsonType: "string" },
        email: { bsonType: "string" },
        role: { bsonType: "string" },
        company: { bsonType: "string" },
        password: { bsonType: "string" },
        chart_access: { bsonType: "bool" },
        report_generation_access: { bsonType: "bool" },
        user_management_access: { bsonType: "bool" }
      }
    }
  }
}
```

## 5. Relationships

### 5.1 Campaign Performance Relationships
- One-to-Many: Campaign to Performance Metrics
- Many-to-One: Campaign to Channel
- Many-to-One: Campaign to Country

### 5.2 User Relationships
- One-to-Many: User to Company
- One-to-Many: User to Access Permissions

## 6. Indexing Strategy

### 6.1 Primary Indexes
- Campaign Performance: `{date: 1, campaign_id: 1}`
- Users: `{username: 1}`
- Prophet Predictions: `{date: 1}`

### 6.2 Secondary Indexes
- Campaign Performance:
  - `{channel: 1}`
  - `{country: 1}`
  - `{age_group: 1}`
- Users:
  - `{email: 1}`
  - `{role: 1}`
  - `{company: 1}`

### 6.3 Text Indexes
- Campaign Performance: `{channel: "text", country: "text"}`

## 7. Data Integrity

### 7.1 Constraints
- Unique username constraint
- Unique email constraint
- Required field validation
- Data type validation

### 7.2 Referential Integrity
- Campaign ID uniqueness
- User role validation
- Company name consistency

## 8. Performance Considerations

### 8.1 Query Optimization
- Index usage for common queries
- Compound indexes for multi-field queries
- Covered queries where possible

### 8.2 Storage Optimization
- Appropriate data types
- Efficient indexing
- Document size management

## 9. Security

### 9.1 Access Control
- Role-based access
- Collection-level permissions
- Field-level encryption

### 9.2 Data Protection
- Password hashing
- Sensitive data encryption
- Audit logging
