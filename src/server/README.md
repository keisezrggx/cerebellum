# TypeScript Backend

This folder contains server-side application logic for Cerebellum. It is intentionally separate from `src/app`, which owns routes and UI composition.

```text
src/app/api       HTTP route handlers
src/server        backend use cases and contracts
src/server/db     database adapter boundary
src/server/llm    model provider adapter boundary
src/server/retrieval
                   retrieval and vector-search adapter boundary
src/server/storage
                   uploaded-file adapter boundary
```

Route handlers should validate input and authorization, then call functions in this folder. Database, model, storage, and retrieval SDKs should remain behind their respective adapter boundaries.

Each adapter folder exports a small port interface from its `index.ts`. Concrete providers should be added beneath the same boundary, for example `src/server/llm/providers/` or `src/server/db/postgres/`, and should not leak vendor-specific types into feature code.