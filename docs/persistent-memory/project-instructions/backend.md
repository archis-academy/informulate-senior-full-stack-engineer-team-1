---
id: backend
title: Backend Architecture
summary: Express/TypeScript layers; auth/security; models/routes/middleware.
tags:
  - backend
  - express
  - typescript
updated: '2025-12-11T00:00:00.000Z'
---

# Backend Architecture

## Structure

### Controllers
- **controllers/** - Request/response logic

### Services
- **services/** - Business logic and database access

### Models
- **models/** - Database schemas (ORM/ODM)

### Routes
- **routes/** - API endpoint definitions

### Middleware
- **middleware/** - Authentication, RBAC, validation, error handling

## TypeScript Best Practices

- Enable **strict mode** for type safety.
- Use **interfaces and types** for request/response shapes.
- Avoid `any`; prefer precise typing for services, controllers, and AI responses.

## Authentication & Security

- Use **bcrypt** for password hashing.
- Generate **JWTs** with user roles for role-based access.
- Secure sensitive environment variables in `.env.local`.
- Protect API endpoints with middleware; never rely solely on frontend checks.

## Database & Models

- Choose **PostgreSQL (TypeORM)** or **MongoDB (Mongoose)**.
- Define clear relationships: Users, Courses, Lectures, Exercises, Orders.
- Index frequently queried fields for performance.
- Store AI-generated embeddings for semantic search.

## Libraries
- Uses Express v5 (use the context7 library id "/websites/expressjs_en" for latest documentation)
