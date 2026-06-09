# Phase 03: Entities + Stores

## Goal

Create the application data layer.

This phase introduces domain entities, application state, and persistence.

No UI integration.

UI already exists from previous phase.

---

## Required Reading

Read in this order:

```txt
phase-02-layout.md
entities/task.md
entities/filters.md
entities/sorting.md
stores/task-store.md
stores/ui-store.md
architecture/state-management.md
architecture/local-storage.md
architecture/constraints.md
```

---

## Scope

Implement ONLY:

### Entities

* Task type
* TaskPriority
* TaskStatus
* Filters type
* Sorting type

---

### Stores

Create:

* task store
* ui store

---

### Persistence

Implement:

* localStorage persistence
* task persistence
* filter persistence
* sorting persistence

Persistence rules must follow:

```txt
architecture/local-storage.md
```

---

### Seed Data

Create default seed tasks.

Used when localStorage is empty.

Minimum:

5 realistic tasks.

Must include:

* overdue
* completed
* no deadline
* high priority
* low priority

---

## Allowed

Allowed:

* computed store state
* actions
* getters
* persistence utilities

---

## Forbidden

Do NOT implement:

* UI integration
* AppShell changes
* TaskList rendering
* TaskCard wiring
* filtering UI
* sorting UI
* CRUD
* modal logic
* form logic

No component modifications.

No styling changes.

No redesign.

---

## Output

Application has:

* domain models
* working stores
* persisted state

UI still uses mock data.

No live rendering yet.

---

## Definition of Done

Phase complete when:

* entities exist
* stores exist
* localStorage works
* reload restores state
* seed tasks load correctly
* no UI integration exists
* no CRUD exists

STOP after completion.
