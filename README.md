# Task Tracker

A simple task manager application built with Vue 3, TypeScript, Pinia, Tailwind CSS, and Vite.

## Tech Stack

- **Vue 3** - Progressive JavaScript framework
- **TypeScript** - Type-safe JavaScript
- **Pinia** - State management
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and dev server

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the application.

## Build

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

This application is configured to deploy to GitHub Pages via GitHub Actions.

### Automatic Deployment

Push to the `main` branch to trigger automatic deployment to GitHub Pages.

### Manual Deployment

1. Build the application:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to GitHub Pages using your preferred method.

### GitHub Pages Configuration

The application is configured with `base: '/task-tracker/'` for GitHub Pages deployment. Adjust the `VITE_BASE_URL` environment variable if deploying to a different path.

## Project Structure

```
src/
├── components/       # Vue components
├── composables/     # Reusable composition functions
├── stores/          # Pinia stores
├── types/           # TypeScript type definitions
├── utils/           # Utility functions
└── App.vue          # Root component
```
