# Implementation Roadmap

## Purpose

Defines the official implementation order for the project.

This document exists to prevent architecture drift, uncontrolled implementation, and speculative coding.

Implementation is strictly phase-driven.

Each phase MUST be completed independently.

The coding agent MUST NEVER:

* skip phases
* merge multiple phases
* implement future scope
* redesign architecture
* improve UX outside phase scope

The coding agent acts as an executor.

Not an architect.

---

## Project Goal

Build a lightweight task manager application.

Core requirements:

* vertical task list
* task CRUD
* filtering
* sorting
* local persistence
* responsive layout
* light theme only
* neutral monochrome visual style
* subtle semantic accents

Non-goals:

* kanban
* drag and drop
* backend
* authentication
* server persistence
* dark theme
* notifications
* collaboration
* dashboards
* productivity analytics

---

## Required Reading Order

Before implementation begins:

Read in this order:

```txt
.spec/index.md
.spec/product/vision.md
.spec/product/scope.md
.spec/architecture/constraints.md
.spec/architecture/tech-stack.md
.spec/architecture/project-structure.md
.spec/design/design-system.md
```

After that:

Read ONLY the current phase file.

Never read future phases unless explicitly requested.

---

## Global Rules

### Small Increment Rule

Implement only one phase.

No future work.

No speculative architecture.

No premature abstractions.

No future-proofing.

---

### Deterministic Rule

Follow specifications exactly.

Do not invent features.

Do not redesign UI.

Do not improve architecture.

If information is missing:

STOP and request clarification.

Do not guess.

---

### Scope Isolation Rule

Every phase has isolated responsibility.

Only implement files defined in current phase.

Avoid touching unrelated files.

---

### Stop Rule

After phase completion:

1. Verify checklist
2. Report changed files
3. Explain intentionally missing scope
4. STOP

Never continue automatically.

---

## Phase Overview

Official implementation order:

```txt
01 → Bootstrap
02 → Layout (Static UI)
03 → Entities + Stores
04 → UI Wiring
05 → Derived State (Filters + Sorting)
06 → CRUD + Modal
07 → Polish
08 → Deployment
```

---

## Phase 01 — Bootstrap

File:

```txt
implementation/phase-01-bootstrap.md
```

Goal:

Initialize project foundation.

Includes:

* Vite
* Vue
* TypeScript
* Tailwind
* Pinia installation
* aliases
* folder structure

Output:

running project foundation.

Dependencies:

none.

No business logic.

No UI.

---

## Phase 02 — Layout (Static UI)

File:

```txt
implementation/phase-02-layout.md
```

Goal:

Create visual application shell.

Includes:

* page layout
* header
* Add Task button
* task card visuals
* task list visuals
* filter bar visuals
* modal shell
* responsive layout
* mock task data

Output:

fully designed but static interface.

Dependencies:

```txt
phase-01-bootstrap.md
```

Strict rule:

UI only.

No live behavior.

---

## Phase 03 — Entities + Stores

File:

```txt
implementation/phase-03-store.md
```

Goal:

Create application data model.

Includes:

* Task entity
* filter entity
* sorting entity
* task store
* ui store
* localStorage persistence

Output:

functional state layer.

Dependencies:

```txt
phase-02-layout.md
```

Strict rule:

No UI integration.

---

## Phase 04 — UI Wiring

File:

```txt
implementation/phase-04-ui-wiring.md
```

Goal:

Connect static UI to application state.

Includes:

* replace mock data
* TaskList rendering
* TaskCard rendering
* store → UI connection
* props wiring
* emits wiring
* overdue rendering
* completed state rendering

Output:

live task rendering.

Dependencies:

```txt
phase-03-store.md
```

Strict rule:

No CRUD.

No filtering.

No modal behavior.

---

## Phase 05 — Derived State (Filters + Sorting)

File:

```txt
implementation/phase-05-derived-state.md
```

Goal:

Implement task discovery and ordering.

Includes:

* search
* priority filter
* status filter
* sorting
* computed task list
* filter persistence

Output:

interactive task exploration.

Dependencies:

```txt
phase-04-ui-wiring.md
```

Strict rule:

No CRUD.

No modal logic.

---

## Phase 06 — CRUD + Modal

File:

```txt
implementation/phase-06-modal.md
```

Goal:

Implement task management flow.

Includes:

* create task
* edit task
* delete confirmation
* task form
* modal interaction
* status changes

Output:

fully usable application.

Dependencies:

```txt
phase-05-derived-state.md
```

---

## Phase 07 — Polish

Goal:

Improve quality.

Includes:

* animations
* hover states
* responsive refinements
* mobile improvements
* empty states
* microinteractions

Output:

production-quality UI.

Dependencies:

```txt
phase-06-modal.md
```

Strict rule:

No new features.

---

## Phase 08 — Deployment

Goal:

Deploy application.

Includes:

* GitHub Pages
* Vite base path
* GitHub Actions
* deployment verification

Output:

public hosted application.

Dependencies:

```txt
phase-07-polish.md
```

---

## Success Criteria

Implementation is complete when:

* all phases completed
* acceptance criteria passed
* responsive layout works
* persistence works
* deployment works
* no runtime errors exist
* no scope violations occurred
