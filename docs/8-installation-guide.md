# Installation Guide

## Prerequisites

- Docker and Docker Compose
- Git
- Node.js (for local development)
- Python 3.8+ (for local development)
- MongoDB (for local development without Docker)

## Local Development Setup

### Prerequisites

- Docker installed
- Node.JS installed
- GROQ API key

### Deployment Steps

1. Clone the repository:

```bash
git clone https://github.com/RecceLabTechies/FullStack.git
cd FullStack
```

2. Create an .env

```
# Groq API Configuration
GROQ_API_KEY=<your_key>
```

3. Deploy

```
docker compose up --build
```

4. Once everything is up and running, you can access the platform at: `http://localhost`

### Default User Accounts

#### Admin Account

- Email: admin@recce.com
- Role: root
- Password: Admin@123

#### Guest Account

- Username: guest
- Email: guest@recce.com
- Role: member
- Password: Admin@123

## Deployment on ECS

### Prerequisites

- ECS access
- Docker installed
- GROQ API key

### Deployment Steps

1. Clone the repository:

```bash
git clone https://github.com/RecceLabTechies/FullStack.git
cd FullStack
```

2. Set your LLM API key from GROQ:

```bash
export GROQ_LLM_KEY=<your_own_key>
```

You can obtain your key from GROQ at the following link: https://console.groq.com/keys

3. Build and start the containers:

```bash
docker-compose up --build
```

4. Once everything is up and running, you can access the platform at: http://47.84.36.73

### Default User Accounts

#### Admin Account

- Email: admin@recce.com
- Role: root
- Password: Admin@123

#### Guest Account

- Username: guest
- Email: guest@recce.com
- Role: member
- Password: Admin@123

## Verification

1. Frontend should be accessible at `http://localhost:3000` (local) or `http://47.84.36.73` (ECS)
2. Backend API should be accessible at `http://localhost:8000` (local)
3. LLM Backend should be accessible at `http://localhost:8001` (local)
4. Test the connection by logging in with one of the provided accounts

## Common Installation Issues

1. **Port Conflicts**

   - Ensure ports 3000, 8000, and 8001 are available
   - Check for other services using these ports
   - Modify port mappings in docker-compose.yml if needed

2. **Environment Variables**

   - Verify all required variables are set
   - Check for correct formatting
   - Ensure no trailing spaces
   - Verify GROQ_LLM_KEY is properly set

3. **Database Connection**

   - Verify MongoDB is running
   - Check connection strings
   - Confirm network access

4. **Docker Issues**
   - Ensure Docker daemon is running
   - Check Docker logs for errors
   - Verify Docker Compose version compatibility
