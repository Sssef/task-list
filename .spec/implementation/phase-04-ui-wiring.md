# Phase 04: UI Wiring

## Goal

Connect existing UI to application state.

This phase replaces mock data with live store data.

UI already exists.

Do not redesign components.

---

## Required Reading

```txt
phase-03-store.md
entities/task.md
stores/task-store.md
components/task-list.md
components/task-card.md
```

---

## Scope

Implement ONLY:

* replace mock tasks
* render store tasks
* AppShell → TaskList connection
* TaskList → TaskCard connection
* props wiring
* emits wiring
* overdue rendering
* completed rendering

---

## Forbidden

Do NOT implement:

* filtering
* sorting
* CRUD
* modal behavior
* create task
* edit task
* delete task

No styling changes.

No redesign.

---

## Output

Application displays real tasks from store.

UI becomes live.

Still read-only.

---

## Definition of Done

Phase complete when:

* mock data removed
* store renders tasks
* emits work
* overdue state works
* completed state works
* no filtering exists
* no CRUD exists

STOP after completion.
