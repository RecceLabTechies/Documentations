# Frontend Overview

## Tech Stack

- **Framework**: The frontend is built using **Next.js**, a popular React framework for building server-side rendered and statically generated web applications.
- **Styling**: Tailwind CSS is used for styling, as indicated by the presence of `tailwind.config.ts` and `tailwind.config.js`. Shadcn/UI is used as building blocks for UI.
- **TypeScript**: The project uses TypeScript, as evidenced by the presence of `tsconfig.json` and `.d.ts` files.
- **Linting and Formatting**: ESLint and Prettier are used for code linting and formatting, as indicated by `.eslintrc.cjs` and `prettier.config.js`.
- **Containerization**: A `Dockerfile` is present, suggesting that the application can be containerized using Docker.

## Directory Structure

- **`src/`**: Contains the main source code for the frontend.
  - **`components/`**: Houses reusable UI components.
  - **`api/`**: Contains API-related code,
  - **`types/`**: Contains TypeScript type definitions.
  - **`lib/`**: Likely contains utility functions or libraries.
  - **`styles/`**: Contains global styles or CSS files.
  - **`app/`**: Contains the main application logic or pages.

## Pages

### Main Pages

- **`layout.tsx`**: This file likely defines the overall layout structure for the application, including common elements like headers, footers, and navigation bars.
- **`page.tsx`**: This file serves as the main entry point for the application, rendering the primary content and integrating various components.

### Dashboard

- **`dashboard/`**: This directory contains components and pages related to the dashboard functionality.
  - **`ad-spend-table.tsx`**: Displays a table of advertising spend data, likely with sorting and filtering capabilities.
  - **`filter-bar.tsx`**: Provides filtering options for the dashboard, allowing users to customize the data view.
  - **`page.tsx`**: The main dashboard page, integrating various components to display key performance indicators and charts.
  - **`channel-bar-chart.tsx`**: Renders a bar chart visualizing data by channel.
  - **`kpi-cards.tsx`**: Displays key performance indicators in a card format for quick insights.
  - **`revenue-chart.tsx`**: Visualizes revenue data over time, possibly with interactive elements.
  - **`age-group-bar-chart.tsx`**: Renders a bar chart showing data segmented by age groups.
  - **`layout.tsx`**: Defines the layout specific to the dashboard, possibly including side navigation and content areas.

### Other Directories

- **`login/`**: Likely contains components and pages related to user authentication and login functionality.
- **`auth/`**: May include authentication logic, such as token management and user session handling.
- **`report/`**: Could contain components and pages for generating and viewing reports.
- **`admin/`**: Likely includes administrative tools and pages for managing the application.
- **`mongo_manager/`**: May involve database management or interactions with MongoDB.
- **`settings/`**: Could contain user or application settings pages.

## APIs

### Database API (`dbApi.ts`)

- **`fetchDbStructure`**: Fetches the database structure from the server. Returns a `DbStructure` object or `null` if the request fails.
- **`fetchUsers`**: Retrieves a list of users from the server. Returns an array of `User` objects or `null` if the request fails.
- **`addUser`**: Adds a new user to the database. Accepts a `User` object and returns a success message or `null` if the request fails.
- **`fetchUserByUsername`**: Fetches a user by their username. Returns a `User` object or `null` if the request fails.
- **`fetchLeadsDateChartData`**: Retrieves leads data for charting purposes. Returns an array of `LeadsDateChartData` objects or `null` if the request fails.
- **`fetchRevenueDateChartData`**: Retrieves revenue data for charting purposes. Returns an array of `RevenueDateChartData` objects or `null` if the request fails.

### LLM API (`llmApi.ts`)

- **`analyzeData`**: Sends a query to the LLM API for analysis. Returns an `AnalysisResponse` object containing the analysis results or an error message if the request fails.
- **`checkHealth`**: Checks the health status of the LLM API service. Returns an object with a `status` string.
- **`isChartResponse`**: Helper function to determine if the response contains a chart.
- **`isReportResponse`**: Helper function to determine if the response contains a report.

## Configuration Files

- **`next.config.js`**: Configuration for Next.js, possibly including custom server settings or build options.
- **`env.js`**: Environment-specific configurations or variables.
- **`.env.example`**: An example environment file, indicating the use of environment variables for configuration.

## Additional Tools

- **Docker**: The presence of a `Dockerfile` suggests that the application can be run in a Docker container, facilitating deployment and scaling.
- **ESLint and Prettier**: These tools ensure code quality and consistency across the codebase.