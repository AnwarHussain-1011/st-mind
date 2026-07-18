# ST-MIND 2.0 - Architecture Document

## 1. High-Level Architecture
ST-MIND 2.0 adopts a modern decoupled monorepo architecture featuring a Next.js frontend and a Django backend, communicating primarily via REST APIs and WebSockets.

## 2. Technology Stack
### Frontend
- **Framework:** Next.js (App Router)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS
- **Components:** Accessible, reusable components, mobile-first responsive design.
- **Quality:** ESLint, automated testing frameworks (Jest/Playwright or Cypress).

### Backend
- **Framework:** Python / Django 5.2 LTS
- **API:** Django REST Framework (DRF), OpenAPI documentation
- **Database:** PostgreSQL (Relational Data, Users, Courses)
- **Cache / Message Broker:** Redis
- **Task Queue:** Celery (Document ingestion, chunking, embeddings)
- **Real-time:** Django Channels (WebSocket for asynchronous AI responses)
- **Testing:** pytest

### AI & RAG Subsystem
- **LLM Provider:** Gemini API (behind an abstraction layer for provider swapping).
- **Embeddings:** Vector search abstraction (PostgreSQL pgvector or a dedicated vector DB, managed via Django).
- **Pipeline:** Document -> Text Extraction -> Chunking -> Embedding -> Storage.

## 3. Infrastructure & Deployment
- **Containerization:** Docker and Docker Compose.
- **Environments:** Distinct configurations for development, testing, and production (via `.env`).
- **CI/CD:** GitHub Actions for linting, testing, and health checks.
- **Observability:** Structured logging, health-check endpoints.
- **Data Integrity:** Database migrations strategy, secure file upload handling, and backup documentation.
