# ST-MIND 2.0 - AI Agent Rules

These rules dictate the behavior of AI coding assistants operating on the ST-MIND 2.0 repository.

## 1. Incremental Execution
- Do not generate the entire application in one uncontrolled operation.
- Work incrementally.
- Request human approval after significant architectural or planning phases before writing code.

## 2. Coding Rules
- **Types:** Use explicit typing everywhere (TypeScript for frontend, Python type hints for backend).
- **Modularity:** Keep architecture modular. Avoid duplicated business logic.
- **Testing:** Write tests alongside implementation. Do not claim a feature works until its tests pass (pytest for backend, Jest/Playwright for frontend).

## 3. Safety & Security Rules
- **Secrets:** Never commit secrets. Use `.env` files.
- **Destructive Actions:** Do not execute commands that delete directories, databases, or user files without explicit human approval.
- **Migrations:** Do not run destructive database migrations automatically.
- **Placeholders:** Do not leave placeholder security logic (e.g., `is_authenticated = True`). Implement real auth and object-level permissions immediately.

## 4. Documentation
- Document every architectural decision in `docs/decisions/`.
- Maintain an up-to-date `CHANGELOG.md`.

## 5. Technology Constraints
- Backend: Django 5.2 LTS, DRF, PostgreSQL, Redis, Celery.
- Frontend: Next.js (App Router), Tailwind CSS.
