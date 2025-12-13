---
id: data-flow
title: API & Frontend Data Flow
summary: API/frontend fetch via React Query; validation; pagination.
tags:
  - api
  - data-flow
  - react-query
updated: '2025-12-11T00:00:00.000Z'
---

# API & Frontend Data Flow

## Data Fetching

- Use **React Query** or similar for data fetching and caching.
- Keep API calls asynchronous and centralised in `services/api.ts`.

## Validation

- Validate all inputs on both frontend and backend.
- Never rely solely on frontend checks for security.

## Pagination

- Implement paginated endpoints for courses, lectures, and reviews.
- Ensure consistent pagination patterns across the application.


