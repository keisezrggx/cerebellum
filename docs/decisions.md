# Decisions

## Modular monolith first

The initial product is personal and has four related workflows. A single deployable application minimizes operational overhead. Explicit feature and adapter boundaries preserve the option to introduce background workers or separate services later.

## Source-grounded generation

Generated questions and cards should retain dataset, document, and chunk references. This supports review, correction, and trust in the learning material.

## Server-owned scheduling

Card intervals, review history, and due dates are authoritative server data. Clients may optimistically render a review result but cannot be the source of truth.