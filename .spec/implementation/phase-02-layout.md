# Phase 02: Layout (Static UI)

## Goal

Create the complete visual interface.

This phase builds the application shell and component visuals.

The application should look functional but remain mostly static.

This is a UI-only phase.

---

## Required Reading

Read in this order:

```txt
index.md
architecture/constraints.md
design/design-system.md
design/layout.md
design/task-card.md
design/filter-bar.md
design/modal.md
design/responsive.md
design/animations.md
components/app-shell.md
components/task-list.md
components/task-card.md
components/filter-bar.md
components/modal.md
```

---

## Scope

Implement ONLY:

* App shell
* page container
* header
* Add Task button
* divider
* filter bar UI
* task list UI
* TaskCard UI
* Modal shell UI
* footer task counter
* responsive layout
* mock tasks

---

## Allowed

Allowed:

* static props
* mock data
* placeholder handlers
* hardcoded examples
* temporary empty callbacks

---

## Forbidden

Do NOT implement:

* stores
* Pinia usage
* localStorage
* filtering logic
* sorting logic
* search logic
* modal behavior
* CRUD
* form validation
* business logic
* emits wiring
* computed state

No overengineering.

No abstractions.

---

## Required UI

### Header

Contains:

* title
* subtitle
* Add Task button

---

### Filter Bar

Must visually render:

* search input
* status filter
* priority filter
* sort dropdown
* direction toggle

Visual only.

---

### Task List

Render:

minimum 5 mock tasks.

Include mixed states:

* overdue
* completed
* high priority
* low priority
* no deadline

---

### Modal

Must exist as UI shell.

May remain unused.

No open/close behavior.

---

## Definition of Done

Phase complete when:

* UI visually matches mockup
* responsive layout works
* desktop complete
* mobile complete
* mock tasks render
* no store exists
* no logic exists
* no persistence exists

STOP after completion.
