# ST-MIND 2.0 - Product Requirements Document (PRD)

## 1. Overview
ST-MIND 2.0 is an open, accessible, AI-assisted educational and research platform designed for students, teachers, researchers, mentors, and administrators. Evolving from the original 2023 Python-Django system, this 2.0 version is a production-oriented platform emphasizing modern architecture, AI safety, and scalability.

## 2. User Roles
- **Student:** Can join courses, view materials, ask questions to the AI, and provide feedback on answers.
- **Teacher:** Can create courses, manage student access, upload course materials (e.g., PDFs), and monitor AI interactions.
- **Researcher:** Can access anonymized engagement metrics and AI feedback for studies.
- **Mentor:** Can provide supplementary guidance and review student progress.
- **Institution Administrator:** Manages users, courses, and platform settings for their specific institution.
- **Platform Administrator:** Oversees entire platform health, security, global settings, and superuser functions.

## 3. Core Features (Phase 1)
### 3.1 Course Management
- Teachers can create and configure courses.
- Students can register and enroll in courses.
- Role-based access control enforces isolation between courses.

### 3.2 Document Ingestion
- Secure upload of course documents (PDFs).
- Background processing for text extraction and semantic chunking.
- Vector embedding generation and storage for Retrieval-Augmented Generation (RAG).

### 3.3 AI-Assisted Q&A (RAG)
- Students ask natural language questions about course documents.
- The system retrieves relevant semantic chunks, enforcing document-level permissions.
- AI generates answers grounded *only* in retrieved context.
- Answers include citations (document title, page number, supporting passages).
- User feedback loop (Helpful, Incorrect, Unsupported).

## 4. Security & Quality Requirements
- **Authentication:** Secure password hashing, rate-limiting on endpoints.
- **Data Protection:** Object-level permissions ensuring users only access authorized data. AI must never bypass these checks.
- **Input Validation:** Strict validation of file types, sizes, and user inputs to prevent CSRF, XSS, SQL injection, and IDOR.
- **AI Safety:** Prompt injection protection, prohibition of unsupported/fabricated citations (hallucinations).
- **Code Quality:** Strict TypeScript, automated tests (frontend/backend) required before any feature is considered complete. No placeholder security logic.
