# Project Overview

## Introduction
This is a full-stack web application built with modern technologies, featuring a Next.js frontend and Flask backend. The application is containerized using Docker for consistent development and deployment environments.

## Technology Stack

### Frontend
- **Framework**: Next.js 15.0.1 (React 18.3.1)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom configuration
- **UI Components**: 
  - Radix UI for accessible components
  - Custom components with class-variance-authority
  - Recharts for data visualization
- **Form Handling**: React Hook Form with Zod validation
- **HTTP Client**: Axios
- **Theme Management**: next-themes
- **Development Tools**:
  - ESLint for code linting
  - Prettier for code formatting
  - TypeScript for type checking
  - Turbo for fast development builds

### Backend
- **Framework**: Flask 2.0.1
- **Language**: Python
- **Database**: MongoDB (via pymongo 3.12.0)
- **Data Processing**:
  - Pandas 1.5.3
  - NumPy 1.21.0
- **Security & Configuration**:
  - python-dotenv for environment variables
  - flask-cors for Cross-Origin Resource Sharing

## Infrastructure

### Docker Configuration
The application uses Docker Compose for orchestrating multiple containers:
1. Frontend Container:
   - Node.js environment
   - Next.js application
   - Hot-reloading in development
   
2. Backend Container:
   - Python environment
   - Flask application
   - Mounted data volumes

### Development Environment
- TypeScript configuration for strict type checking
- ESLint and Prettier for code quality
- Git-based version control with appropriate gitignore settings
- Environment variable management using .env files