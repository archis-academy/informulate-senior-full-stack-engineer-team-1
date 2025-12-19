---
id: frontend
title: Frontend Architecture
summary: React/TypeScript layout; hooks/modules/components/lib; data access patterns.
tags:
  - frontend
  - react
  - typescript
updated: '2025-12-11T00:00:00.000Z'
---

# Frontend Architecture

## Structure

### Components
- **components/** - Reusable UI elements

### Modules
- **modules/** - Feature-based folders (courses, lectures, auth)

### Hooks
- **hooks/** - Custom hooks for state and API calls

### Libraries
- **lib/** - Utility functions, AI integration helpers

## TypeScript Best Practices

- Enable **strict mode** for type safety.
- Use **interfaces and types** for request/response shapes.
- Avoid `any`; prefer precise typing for services, controllers, and AI responses.

## Data Access Patterns

- Use **React Query** or similar for data fetching and caching.
- Keep API calls asynchronous and centralised in `services/api.ts`.
- Validate all inputs on the frontend.
- Implement paginated endpoints for courses, lectures, and reviews.

