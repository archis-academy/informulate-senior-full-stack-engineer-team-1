# Instructions

**Always use yarn** for package management commands (yarn install, yarn run, etc.), not npm.

## Persistent Memory Docs

**Always read** `docs/persistent-memory/project-instructions/page-index.yaml` first to understand available documentation. **Never read** `index.md` - it is generated and not needed. Then **progressively read** additional documentation files as needed based on the context of the task. For example:
- Writing or editing TypeScript code → read TypeScript best practices file
- Working on frontend features → read frontend architecture docs
- Backend API work → read backend architecture and data flow docs

Documentation structure:
- `docs/persistent-memory/project-instructions/page-index.yaml` - Single source of truth for page metadata
- `docs/persistent-memory/project-instructions/index.md` - Generated human-facing index (never hand-edit. DO NOT READ)

**Rule:** When editing any persistent-memory page or the index, update `page-index.yaml`, keep page frontmatter in sync, then run `yarn run docs:sync-index`. Never hand-edit or read `index.md` - it is auto-generated from `page-index.yaml`.

## Purpose of Project

E-Tutor is a fullstack learning management system that combines a

*React/TypeScript frontend* with a

*Node.js/Express* backend

delivering a _seamless_ platform for course delivery, student management, and assessments. The system enables:

- structured course creation and lecture management
- secure student enrollment, authentication, and role-based access control
- assignment, quiz, and AI-powered exercise management
- real-time progress tracking and reporting

AI integration enhances learning by providing:

- personalised study recommendations and learning paths
- automated quiz and practice exercise generation
- an intelligent course guide and chat assistant for contextual help
- semantic search and lecture summarisation powered by vector embeddings

Backend is built with *Node.js, Express, and TypeScript*, using a *modular architecture* with

controllers, services, and models for clear separation of concerns. The system ensures:

- secure authentication and authorization
- maintainable, type-safe code across frontend and backend
- scalable, production-ready deployment with containerization
- robust logging, monitoring, and AI service handling
- E-Tutor empowers institutions, instructors, and self-paced learners with a modern, AI-enhanced digital learning environment.