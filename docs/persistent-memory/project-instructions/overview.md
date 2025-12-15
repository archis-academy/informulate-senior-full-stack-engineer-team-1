---
id: overview
title: Project Overview & Structure
summary: High-level purpose, stack, and modular layout for frontend/backend.
tags:
  - overview
  - structure
updated: '2025-12-11T00:00:00.000Z'
---

# Project Overview & Structure

E-Tutor is a fullstack learning management system that combines a React/TypeScript frontend with a Node.js/Express backend, delivering a seamless platform for course delivery, student management, and assessments.

## Purpose

The system enables:
- structured course creation and lecture management
- secure student enrollment, authentication, and role-based access control
- assignment, quiz, and AI-powered exercise management
- real-time progress tracking and reporting

AI integration enhances learning by providing:
- personalised study recommendations and learning paths
- automated quiz and practice exercise generation
- an intelligent course guide and chat assistant for contextual help
- semantic search and lecture summarisation powered by vector embeddings

## Modular Project Structure

### Frontend (React/TypeScript)
- **components/** - Reusable UI elements
- **modules/** - Feature-based folders (courses, lectures, auth)
- **hooks/** - Custom hooks for state and API calls
- **lib/** - Utility functions, AI integration helpers

### Backend (Node.js/Express/TypeScript)
- **controllers/** - Request/response logic
- **services/** - Business logic and database access
- **models/** - Database schemas (ORM/ODM)
- **routes/** - API endpoint definitions
- **middleware/** - Authentication, RBAC, validation, error handling

The backend uses a modular architecture with controllers, services, and models for clear separation of concerns, ensuring secure authentication and authorization, maintainable type-safe code, scalable production-ready deployment with containerization, and robust logging, monitoring, and AI service handling.


