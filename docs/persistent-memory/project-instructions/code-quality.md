---
id: code-quality
title: Code Quality Expectations
summary: Clean code; modular design; code hygiene; component reuse; readability and performance.
tags:
  - code-quality
  - standards
  - best-practices
updated: '2025-12-12T00:00:00.000Z'
---

# Code Quality Expectations

## Overview

This document outlines the code quality standards and best practices for the e-tutor evaluation project.

## Core Principles

### Clean, Modular, and Maintainable Code
- Write functions that do one thing well
- Keep files focused on a single responsibility
- Use meaningful variable and function names
- Limit function length to improve readability

### Follow Established Patterns
- Adhere to the project's folder structure
- Follow the coding style used throughout the codebase
- Maintain consistency with existing conventions
- Reference architecture docs when adding new modules

### Code Hygiene
- Remove unused imports before committing
- Delete console.log statements (use proper logging in production)
- Avoid redundant or obvious comments
- Keep comments meaningful and up-to-date

### Component Reuse
- Check for existing components before creating new ones
- Extract reusable logic into shared utilities
- Use established hooks and patterns from the codebase
- Avoid duplication across modules

### Quality Focus Areas
- **Readability**: Code should be self-documenting where possible
- **Performance**: Consider performance implications of changes
- **Consistency**: Match the style and patterns of surrounding code
