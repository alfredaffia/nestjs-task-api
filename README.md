# NestJS Task API

A secure, production-ready task management backend built with **NestJS**, **Prisma 7**, **JWT authentication**, and **SQLite**.

Perfect for learning modern backend development or as a starter for freelance/client projects.

## Features

- **User Authentication**
  - Register with email/password (hashed with bcrypt)
  - Login with JWT token (7-day expiry)
  - Input validation with clean error messages
- **Task Management (Protected)**
  - Create, read, update, delete tasks
  - Only authenticated users can access **their own** tasks
  - Full CRUD with ownership checks
- **Modern Stack**
  - NestJS (TypeScript)
  - Prisma ORM (type-safe database queries)
  - SQLite (local dev – zero setup)
  - Swagger/OpenAPI documentation
- **Security & Best Practices**
  - JWT bearer auth
  - Validation pipes
  - Graceful error handling

## Live API Documentation

Run the app and visit:  
👉 **http://localhost:3000/api**

Interactive Swagger UI with:
- Auth endpoints
- Bearer token authorization
- Task CRUD testing
- Request/response schemas

## Quick Start

### Prerequisites
- Node.js v24+ (LTS recommended)
- npm

### Installation

```bash
git clone https://github.com/alfredaffia/nestjs-task-api.git
cd nestjs-task-api
npm install

Run the app
Bashnpm run start:dev
Server runs on http://localhost:3000
API docs: http://localhost:3000/api
Test Authentication

Register:

Bashcurl -X POST http://localhost:3000/auth/register -H "Content-Type: application/json" -d '{"email":"test@example.com","password":"secret123","name":"Test"}'

Login to get token:

Bashcurl -X POST http://localhost:3000/auth/login -H "Content-Type: application/json" -d '{"email":"test@example.com","password":"secret123"}'

Use token to create task:

Bashcurl -X POST http://localhost:3000/tasks -H "Authorization: Bearer <your-token>" -H "Content-Type: application/json" -d '{"title":"My first task","status":"IN_PROGRESS"}'
Database

Uses local SQLite file: dev.db (created automatically)
View data with DB Browser for SQLite

Tech Stack

Framework: NestJS
ORM: Prisma 7
Auth: JWT + bcrypt
Validation: class-validator
Docs: Swagger/OpenAPI

Future Improvements

PostgreSQL/MySQL support
Refresh tokens
Email verification
Rate limiting
Deployment (Docker + Render/Railway)

Author
Alfred Affia
NestJS Backend Developer | Uniuyo Student | Building toward ₦3M in 2026 💪
📩 alfredaffia@gmail.com
🔗 LinkedIn | GitHub
Open to freelance NestJS/Node.js projects!