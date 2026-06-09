# Phase 05: Derived State (Filters + Sorting)

## Goal

Implement task discovery and ordering.

This phase adds computed state.

UI already exists.

No redesign allowed.

---

## Required Reading

```txt
phase-04-ui-wiring.md
entities/filters.md
entities/sorting.md
components/filter-bar.md
stores/task-store.md
```

---

## Scope

Implement ONLY:

* search
* status filtering
* priority filtering
* sorting
* computed task list
* sort direction
* filter persistence

---

## Forbidden

Do NOT implement:

* CRUD
* modal behavior
* create task
* edit task
* delete task
* redesign of filter UI

No styling changes.

---

## Output

User can:

* search tasks
* filter tasks
* sort tasks

Task list updates reactively.

---

## Definition of Done

Phase complete when:

* search works
* filters work
* sorting works
* empty state works
* filter persistence works
* no CRUD exists

STOP after completion.
