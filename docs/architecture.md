# Architecture

## Initial shape

Cerebellum starts as a modular monolith deployed as one Next.js application. This keeps the personal product inexpensive to operate while protecting the boundaries needed for future scale.

## Capability boundaries

### Assessment

Owns aptitude tests, question selection, answer submission, scoring, and progress snapshots. Reasoning categories are data, not separate applications.

### Learning content

Owns uploads, parsing, chunking, metadata, datasets, and retrieval. Source references must travel with generated questions and flashcards.

### Generation

Owns prompts, model/provider adapters, structured output validation, and generation audit records. It must not directly mutate review schedules.

### Spaced repetition

Owns cards, decks, review events, scheduling, and due-card queries. The scheduling algorithm should be replaceable behind an application interface.

### Identity and progress

Owns users, access control, preferences, and aggregate progress. Authorization is enforced at the server boundary for every user-owned resource.

## Dependency direction

`app -> features -> server adapters`

Feature code can depend on domain types and application ports. Vendor SDKs, databases, model providers, and file storage stay behind `src/server` adapters. UI components must not call providers directly.

## Operational path

1. Validate input and authorization at the route boundary.
2. Execute a feature use case.
3. Persist durable state and an audit event where applicable.
4. Emit structured logs with request and user-safe correlation identifiers.
5. Move expensive ingestion and generation to a worker when usage requires it.