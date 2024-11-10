---
title: Nuxt.js Project Structure Guide
description: This guide explains our standardized project structure designed for large-scale applications and team collaboration.
---

# Nuxt.js Project Structure Guide

## Directory Structure Overview

```
📁 project-root/
```

## Core Directories

### Assets (`/assets`)

Contains your static files like images, fonts, and global styles. These files are processed by webpack during build.

-  `images/`: Application images and icons
-  `fonts/`: Custom font files
-  `styles/`: Global SCSS files, variables, and mixins

### Components (`/components`)

Houses all Vue components, organized for maximum reusability and maintainability.

-  `common/`: Base UI components used across features (buttons, inputs, modals)
-  `layout/`: Components specific to page layout (header, footer, sidebar)
-  `features/`: Feature-specific components organized by domain

### Composables (`/composables`)

Contains reusable Vue composition functions (hooks) that encapsulate common logic and state management.

-  Perfect for sharing functionality between components
-  Each composable focuses on a specific feature or functionality

### Layouts (`/layouts`)

Defines the different layouts available for your pages.

-  `default.vue`: Standard layout used by most pages
-  `auth.vue`: Specific layout for authentication pages
-  `admin.vue`: Layout for admin dashboard

### Middleware (`/middleware`)

Contains route middleware for handling navigation guards and authentication.

-  Executes code before rendering routes
-  Perfect for authentication checks and route protection

### Pages (`/pages`)

Contains your application views and routes, automatically mapped by Nuxt.

-  Organized by feature/domain
-  Follows the file-based routing convention
-  Nested routes through directory structure

### Plugins (`/plugins`)

Houses plugins that need to run before mounting the application.

-  Global plugin configurations
-  Third-party library integrations
-  Custom plugin implementations

### Stores (`/stores`)

Contains Pinia store modules for state management.

-  Organized by feature/domain
-  Clear separation of concerns
-  Type-safe state management

### Types (`/types`)

TypeScript type definitions for better code maintainability.

-  API response types
-  Store state types
-  Model interfaces

### Utils (`/utils`)

Helper functions and constants used throughout the application.

-  Pure utility functions
-  Application constants
-  Shared logic

### Server (`/server`)

Server-side code when using Nitro.

-  API routes
-  Server middleware
-  Server utilities

### Tests (`/test`)

Contains all test files.

-  Unit tests
-  End-to-end tests
-  Test utilities

## Benefits of This Structure

1. **Scalability**

   -  Easy to add new features without conflicts
   -  Clear boundaries between different parts of the application
   -  Modular architecture that scales with team size

2. **Maintainability**

   -  Consistent organization across projects
   -  Easy to find and fix issues
   -  Clear separation of concerns
   -  Reduced cognitive load for developers

3. **Team Collaboration**

   -  Multiple teams can work on different features simultaneously
   -  Reduced merge conflicts
   -  Clear ownership of code
   -  Easy onboarding for new team members

4. **Code Reusability**

   -  Common components are easy to find and reuse
   -  Shared utilities and composables
   -  Consistent patterns across the application

5. **Performance**

   -  Efficient code splitting
   -  Better caching strategies
   -  Optimized build process

6. **Testing**
   -  Easy to write and organize tests
   -  Clear structure for different types of tests
   -  Improved test coverage

This structure follows Vue.js and Nuxt.js best practices while providing the flexibility needed for large applications. It's designed to scale with your team and application size while maintaining code quality and developer productivity.
