# ST-MIND 2.0 - AI Safety & Security Guidelines

## 1. Foundational Rule
The AI must act solely as an educational assistant restricted to the boundaries of the provided course materials.

## 2. Authorization Boundaries
- **No Global Context:** The LLM does not have global access to the database.
- **Strict Retrieval:** The AI only receives document chunks retrieved *after* the backend verifies the requesting user's explicit authorization to access those specific documents.

## 3. Grounding & Hallucination Prevention
- **Strict Grounding:** System prompts must instruct the LLM to refuse to answer if the provided context does not contain the answer.
- **Citation Requirement:** The LLM must cite its sources. The backend must enforce that citations returned by the LLM match the actual chunks provided in the context.
- **No Fabrication:** Fabricated citations or URLs will be filtered out or flagged as errors.

## 4. Prompt Injection Protection
- Inputs will be sanitized.
- System prompts will include strong delimiters to separate instructions from user input.
- LLM outputs will be treated as untrusted and safely rendered on the frontend (mitigating XSS).

## 5. Feedback Loop
- Users evaluate answers (Helpful, Incorrect, Unsupported).
- "Unsupported" flags trigger immediate reviews, helping tune the RAG retrieval parameters and system prompts.
