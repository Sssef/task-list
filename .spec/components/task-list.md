# Task List Component

## Purpose

Renders a vertical list of TaskCard components.

This component is purely structural.

It does NOT contain business logic.

---

## File Location

```txt
src/components/tasks/TaskList.vue
```

---

## Dependencies

Required:

- entities/task.md
- components/TaskCard.vue
- design/layout.md
- design/task-card.md

Optional:

- empty-state component (future-safe)

---

## Responsibilities

The component MUST:

- render list of tasks
- iterate over tasks array
- pass task to TaskCard
- handle empty state
- forward events from TaskCard upward

The component MUST NOT:

- mutate store
- perform filtering
- perform sorting
- contain pagination logic
- contain modal logic

---

## Props

```ts
interface Props {
  tasks: Task[]
}
```

---

## Emits

```ts
interface Emits {
  (
    event: 'edit',
    taskId: string
  ): void

  (
    event: 'delete',
    taskId: string
  ): void

  (
    event: 'status-change',
    payload: {
      taskId: string
      status: TaskStatus
    }
  ): void
}
```

All emits are forwarded from TaskCard.

No transformation logic allowed.

---

## Rendering Logic

### List Rendering

- iterate tasks array
- stable key must be task.id
- preserve order as provided

---

### Empty State

Condition:

tasks.length === 0

Render:

- simple message
- no actions
- no suggestions

Text example:

"No tasks found"

Style:

neutral, low emphasis

---

## Layout

Direction:

vertical stack

Spacing:

gap-4

Width:

100%

---

## TaskCard Integration

Each item MUST:

- render TaskCard
- pass task prop
- listen to emits
- re-emit unchanged

No wrapping logic.

---

## States

### Default

List of TaskCard components.

---

### Loading (future-safe)

Optional skeleton rows.

Must not change structure.

---

## Accessibility

- list must be semantic `<div>` or `<ul>`
- each TaskCard must remain keyboard accessible
- empty state must be readable

---

## Acceptance Criteria

Component is complete when:

- tasks render correctly
- empty state works
- emits are forwarded
- no business logic exists
- no store usage exists