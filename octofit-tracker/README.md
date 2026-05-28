# OctoFit Tracker

A modern multi-tier fitness tracking application built with React, Express, and MongoDB.

## Project Structure

```
octofit-tracker/
├── backend/           # Node.js + Express + TypeScript API
│   ├── src/
│   │   ├── models/   # Mongoose schemas
│   │   └── index.ts  # Express server entry point
│   ├── package.json
│   └── tsconfig.json
└── frontend/         # React 19 + Vite application
    ├── src/
    │   ├── App.jsx
    │   └── main.jsx
    ├── package.json
    └── vite.config.js
```

## Prerequisites

- Node.js (LTS version)
- MongoDB (local or connection string)

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd octofit-tracker/backend
   ```

2. Copy the environment file:
   ```bash
   cp .env.example .env
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server (runs on port 8000):
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd octofit-tracker/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server (runs on port 5173):
   ```bash
   npm run dev
   ```

## Stack

### Presentation Tier
- React 19
- Vite (build tool)
- react-router-dom (routing)
- Bootstrap (styling)

### Logic Tier
- Node.js (LTS)
- Express (web framework)
- TypeScript

### Data Tier
- MongoDB
- Mongoose (ODM for MongoDB)

## Ports

- Frontend: 5173
- Backend API: 8000
- MongoDB: 27017

## Features

- User authentication and profiles
- Activity logging and tracking
- Team creation and management
- Competitive leaderboard
- Personalized workout suggestions

## Development

To start developing:

1. Start MongoDB (ensure mongod is running)
2. Open two terminals:
   - Terminal 1: Run backend (`npm run dev` from backend directory)
   - Terminal 2: Run frontend (`npm run dev` from frontend directory)
3. Open http://localhost:5173 in your browser

## Build

### Backend
```bash
cd octofit-tracker/backend
npm run build
npm run start
```

### Frontend
```bash
cd octofit-tracker/frontend
npm run build
```

## License

MIT
