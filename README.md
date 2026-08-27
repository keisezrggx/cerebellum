<div align="center">
	<img src="docs/images/cerebellum_white.png" alt="Cerebellum platform flow" width="200" />
	<h1>Cerebellum</h1>
</div>

Personal active-recall learning platform for aptitude practice and flashcards.

The first release is a modular monolith with a TypeScript web app and a Python content worker. The web app owns the user experience and application boundaries remain explicit so ingestion and generation can run asynchronously without coupling product workflows to model tooling.

## Product flow

```text
Manuals/PDFs -> Ingestion -> Dataset -> Retrieval -> Question generation
											 |-> Numerical reasoning
											 |-> Verbal reasoning
											 |-> Logical reasoning

Aptitude test -> Results/progress
Dataset -> Flashcards -> Spaced repetition -> Review history
```

## Repository layout

- `src/app`: Next.js routes and UI composition
- `src/features`: product capabilities and their use cases
- `src/server`: persistence, retrieval, model, and integration adapters
- `src/lib`: framework-independent shared utilities
- `workers/content_pipeline`: Python PDF ingestion, retrieval, and question-generation worker
- `tests`: unit, integration, and end-to-end test layers
- `deploy`: deployment manifests and environment runbooks
- `scripts`: repeatable local and release automation
- `docs`: architecture and product decisions

## Local development

```bash
npm install
npm run dev
```

The application runs at `http://localhost:3000`.

Before opening a pull request:

```bash
npm run lint
npm run build
```

The Python worker is independently managed:

```bash
cd workers/content_pipeline
python -m venv .venv
source .venv/bin/activate
python -m pip install -e '.[dev]'
python -m pytest
```

The worker should communicate with the web app through versioned job payloads and durable storage, not by importing TypeScript code or sharing private implementation details.

## Configuration

Copy `.env.example` to `.env.local` for local development. Never commit credentials or user data. Production secrets belong in the deployment platform's secret manager.

## Delivery principles

- Keep domain rules independent from Next.js and vendor SDKs.
- Treat uploaded learning material as private user data.
- Make generated questions traceable to source material and model configuration.
- Store review scheduling and history as durable records, not client state.
- Add observability and a rollback path before production launch.
