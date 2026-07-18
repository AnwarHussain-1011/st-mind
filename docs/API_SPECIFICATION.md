# ST-MIND 2.0 - API Specification

## 1. Overview
The backend exposes a RESTful API via Django REST Framework and real-time capabilities via Django Channels. All endpoints must be documented using OpenAPI standard.

## 2. REST API Endpoints (Phase 1)

### 2.1 Authentication & Users
- `POST /api/v1/auth/register/` - Register a new user.
- `POST /api/v1/auth/login/` - Authenticate and return JWT/Session.
- `GET /api/v1/users/me/` - Get current user profile and roles.

### 2.2 Courses
- `GET /api/v1/courses/` - List accessible courses.
- `POST /api/v1/courses/` - Create a course (Teacher/Admin only).
- `POST /api/v1/courses/{id}/enroll/` - Enroll in a course.

### 2.3 Documents
- `GET /api/v1/courses/{course_id}/documents/` - List documents for a course.
- `POST /api/v1/courses/{course_id}/documents/` - Upload a new document (PDF). Starts Celery task.
- `GET /api/v1/documents/{id}/status/` - Check ingestion status.

### 2.4 Q&A (Synchronous Fallback)
- `POST /api/v1/courses/{course_id}/ask/` - Submit a question. Returns answer and citations.
- `POST /api/v1/answers/{id}/feedback/` - Submit feedback on an AI answer.

## 3. WebSockets (Real-time AI Streaming)
- `ws://<host>/ws/courses/{course_id}/chat/`
  - Client sends: `{"type": "ask_question", "query": "..."}`
  - Server streams chunks: `{"type": "ai_chunk", "text": "..."}`
  - Server concludes: `{"type": "ai_complete", "citations": [...]}`

## 4. Security
- JWT or Session authentication required for all endpoints (except login/register).
- Rate limiting applied heavily to `/ask/` and authentication routes.
- Object-level permission checks embedded in API views/viewsets.
