# Content Pipeline

Python worker boundary for Cerebellum's document and AI workloads.

## Responsibilities

- Parse manuals and PDFs.
- Normalize and chunk source material.
- Request embeddings and retrieval operations through adapters.
- Generate validated aptitude questions and flashcards.
- Preserve source references and generation metadata.

## Boundary

This package does not own users, assessment sessions, card scheduling, or browser requests. It should receive versioned jobs and publish versioned results through the application's queue and storage contracts.

## Development

```bash
python -m venv .venv
source .venv/bin/activate
python -m pip install -e '.[dev]'
python -m pytest
ruff check .
```