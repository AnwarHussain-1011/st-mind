# ST-MIND 2.0 - Data Model

## 1. Overview
The database will be PostgreSQL. The schema is designed around Django's ORM, utilizing a custom User model and robust relational mapping for courses and RAG metadata.

## 2. Core Entities

### 2.1 Users & Authentication
- **User:** Custom user model extending `AbstractUser`. Contains roles (Student, Teacher, Researcher, Mentor, Admin), email (unique), password hash, active status.
- **Profile:** Extended user data (bio, preferences, institution link).

### 2.2 Course Management
- **Course:** Title, description, creator (Teacher FK), status (active, archived), timestamps.
- **CourseEnrollment:** User FK, Course FK, role in course (Student/Mentor), enrollment date.

### 2.3 Documents & RAG Pipeline
- **Document:** Course FK, uploaded_by (User FK), title, file_path, original_filename, file_type, size, upload_date, status (pending, processing, ready, failed).
- **DocumentChunk:** Document FK, chunk_index, page_number, raw_text, embedding (vector field).

### 2.4 Q&A and AI Interactions
- **Question:** User FK, Course FK, raw_query, timestamp.
- **Answer:** Question FK, raw_response, generated_at.
- **Citation:** Answer FK, DocumentChunk FK, exact_quote used.
- **AIFeedback:** Answer FK, User FK, rating (helpful, incorrect, unsupported), optional text comment.

## 3. Security Considerations
- All foreign keys involving user access will enforce object-level permissions (e.g., verifying a student's `CourseEnrollment` before allowing queries against a `DocumentChunk` linked to that course).
