# Frontend Architecture

## Project Structure

```
frontend/
├── src/ # Source code
├── public/ # Static assets
├── .next/ # Next.js build output
├── node_modules/ # Dependencies
├── components.json # UI component configurations
├── tailwind.config.ts # Tailwind CSS configuration
├── next.config.js # Next.js configuration
└── package.json # Project dependencies and scripts
```

## Key Components

### 1. Application Setup
- Built on Next.js 15.0.1 with TypeScript support
- Uses the App Router pattern for routing
- Implements server-side rendering (SSR) capabilities

### 2. UI Framework
- **Base Styling**: Tailwind CSS with custom configuration
- **Component Library**: 
  - Radix UI primitives for accessible components
  - Custom components built with class-variance-authority
  - Responsive design patterns
  - Dark/light theme support via next-themes

### 3. State Management
- React's built-in hooks for local state
- React Hook Form for form state management
- Zod for runtime type validation

### 4. Data Fetching
- Axios for HTTP requests
- Built-in Next.js data fetching methods
- API route handlers for backend communication

### 5. Development Tools
- TypeScript for static type checking
- ESLint for code quality
- Prettier for code formatting
- Turbo for fast development builds

### 6. Performance Optimizations
- Next.js image optimization
- Automatic code splitting
- Static site generation where applicable
- Client-side navigation with prefetching

## Development Workflow
1. Local development using `npm run dev`
2. Type checking with `npm run typecheck`
3. Linting with `npm run lint`
4. Code formatting with `npm run format:write`
5. Production builds with `npm run build`