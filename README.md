# InsightAI — AI-Powered Analytics Platform

An AI-powered analytics platform for e-commerce businesses, combining interactive business intelligence dashboards with an intelligent assistant for natural-language data analysis.

The platform allows users to explore sales and business metrics through interactive dashboards and, eventually, ask the AI assistant questions about their data using natural language.

> 🚧 **Status:** The core analytics dashboard is functional. The AI assistant is currently under development.

## Features

### Analytics Dashboard

- Interactive sales and business analytics
- Revenue and sales visualizations
- Responsive dashboard interface
- PostgreSQL database with Prisma ORM
- Efficient data fetching with TanStack Query
- Input validation with Zod
- User authentication and protected application routes

### AI Assistant

- Natural-language interaction with business data
- AI-powered analytics and insights
- Context-aware responses based on application data
- Backend AI processing with Python and FastAPI
- Designed to connect the AI assistant directly with the analytics data layer

> The AI assistant is actively being developed and additional agent capabilities will be added as the project evolves.

## Architecture

```text
                    ┌──────────────────────┐
                    │      Next.js         │
                    │   Analytics UI       │
                    └──────────┬───────────┘
                               │
                    ┌──────────▼───────────┐
                    │   Application API    │
                    │   / Data Layer       │
                    └──────────┬───────────┘
                               │
                    ┌──────────▼───────────┐
                    │     PostgreSQL       │
                    │      + Prisma        │
                    └───────────────────────┘
                               │
                               │
                    ┌──────────▼───────────┐
                    │      FastAPI         │
                    │     AI Backend       │
                    └──────────┬───────────┘
                               │
                    ┌──────────▼───────────┐
                    │    AI Assistant      │
                    │  Natural Language    │
                    │     Analytics        │
                    └──────────────────────┘
```

## Tech Stack

### Frontend & Application

- Next.js
- TypeScript
- Tailwind CSS
- TanStack Query
- Recharts
- Zod
- Better Auth

### Backend & Database

- Python
- FastAPI
- PostgreSQL
- Prisma

### AI

- LLM Integration
- AI Agents
- Natural-language data analysis
- Context-aware analytics

## Getting Started

Clone the repository:

```bash
git clone https://github.com/kaze1-dev/Analytics_Dashboard.git
cd Analytics_Dashboard
```

Install dependencies:

```bash
npm install
```

Create a `.env` file and add your database URL:

```env
DATABASE_URL="your_database_url"
```

Run the database migrations:

```bash
npx prisma migrate dev
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Live Demo

[Analytics Dashboard](https://analytics-dashboard-nu-mocha.vercel.app/)

## Project Status

The analytics dashboard is currently functional and deployed.

The AI assistant is under active development, with the goal of allowing users to interact with their business data conversationally and receive AI-generated insights without manually navigating through every dashboard metric.

More AI capabilities will be added as development continues.