# Phase 06: CRUD + Modal

## Goal

Implement complete task management flow.

UI and state already exist.

This phase enables interaction.

---

## Required Reading

Read in this order:

```txt
phase-05-derived-state.md
components/modal.md
components/task-form.md
components/task-card.md
stores/task-store.md
entities/task.md
product/user-flows.md
```

---

## Scope

Implement ONLY:

### Modal Behavior

* open modal
* close modal
* overlay close
* ESC close
* create/edit mode

---

### Task Creation

User can:

* open Add Task modal
* fill form
* validate fields
* create task

Persist changes.

---

### Task Editing

User can:

* open existing task
* edit task
* save task

Form must prefill values.

Persist changes.

---

### Task Deletion

User can:

* delete task
* confirm deletion

Persist changes.

---

### Status Change

User can:

* change task status
* mark task complete

Persist changes.

---

## Validation Rules

Required:

Title:

* required
* trim whitespace
* minimum 1 character

Optional:

* description
* deadline

Priority:

required.

Status:

required.

---

## Forbidden

Do NOT implement:

* new layouts
* redesign
* drag and drop
* bulk actions
* subtasks
* recurring tasks
* attachments
* notifications

No styling changes.

No architecture changes.

---

## Output

Application becomes fully usable.

User can:

* create
* edit
* delete
* complete tasks

---

## Definition of Done

Phase complete when:

* modal works
* create works
* edit works
* delete works
* status updates work
* persistence works
* validation works
* no redesign exists

STOP after completion.
