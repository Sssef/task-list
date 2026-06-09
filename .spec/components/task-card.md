# TaskCard Component

## Purpose

Renders a single task inside the vertical task list.

This component is presentation-focused.

It displays task information and emits actions.

The component MUST NOT mutate store state directly.

---

## File Location

```txt
src/components/tasks/TaskCard.vue
```

---

## Dependencies

Required:

* `entities/task.md`
* `design/task-card.md`
* `design/design-system.md`
* `design/animations.md`

Optional future-safe:

* `BaseDropdown.vue`

---

## Responsibilities

The component MUST:

* display task title
* display task deadline
* display task priority
* display task status
* display overdue state
* provide actions menu
* emit interaction events

The component MUST NOT:

* call Pinia store
* persist data
* contain modal logic
* contain business filtering logic
* mutate props

---

## Props

```ts
interface Props {
  task: Task
}
```

Required prop:

```ts
task: Task
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

---

## Layout Structure

Desktop layout:

```txt
[checkbox]
[indicator-dot]

[title]
[metadata]

[priority badge]
[status badge]
[actions button]
```

Card direction:

horizontal

Alignment:

center

Spacing:

comfortable

---

## Rendered Elements

### Checkbox

Purpose:

mark completion visually

Current behavior:

UI only

No persistence logic.

---

### Status Indicator

Small colored circle.

Color determined by task status.

Visual only.

---

### Title

Required.

Must always render.

Truncation:

2 lines max.

Overflow:

ellipsis.

---

### Metadata Row

Contains:

* due date
* optional created date

Rules:

deadline hidden if null

---

### Priority Badge

Always visible.

Variants:

* high
* medium
* low

Style:

soft semantic badge

Never use saturated colors.

---

### Status Badge

Always visible.

Variants:

* todo
* in-progress
* done

Must use subtle monochrome style.

---

### Actions Menu

Contains:

* edit
* delete
* change status

Interaction:

dropdown menu

No drag and drop.

---

## States

### Default

Neutral card.

Soft border.

Subtle shadow.

---

### Hover

Slight elevation increase.

No aggressive animation.

Duration:

150ms–200ms.

---

### Overdue

Condition:

deadline < today
AND status !== done

Behavior:

deadline becomes red.

Visual priority increased.

No background change.

---

### Completed

Visual opacity slightly reduced.

Title:

optional line-through.

Keep readability high.

---

## Accessibility

Requirements:

* keyboard focusable
* visible focus state
* semantic button usage
* aria-label for actions

---

## Responsive Rules

Desktop:

horizontal card

Mobile:

full-width card

Padding reduced.

Metadata wraps safely.

Actions remain accessible.

---

## Acceptance Criteria

Component is complete when:

* task renders correctly
* overdue state works
* emits fire correctly
* no store access exists
* responsive layout works
* hover state matches design
* keyboard navigation works
