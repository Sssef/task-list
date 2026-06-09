# App Shell Component

## Purpose

Defines the main application page layout.

This component assembles the UI shell only.

No business logic.

No task CRUD.

No store access.

---

## File Location

```txt
src/App.vue
```

Alternative allowed:

```txt
src/layouts/AppShell.vue
```

Only one app shell implementation may exist.

---

## Dependencies

Required:

- design/layout.md
- design/responsive.md
- components/task-list.md
- components/filter-bar.md

Optional future-safe:

- components/modal.md

---

## Responsibilities

The component MUST:

- render page container
- render page header
- render Add Task button
- render filter bar placeholder
- render task list placeholder
- render footer task count
- manage layout composition

The component MUST NOT:

- contain store logic
- persist data
- implement filtering
- implement sorting
- implement CRUD logic
- implement modal behavior

---

## Structure

Desktop structure:

```txt
[page container]

 └── [content surface]

      ├── [header]
      │      ├── title
      │      ├── subtitle
      │      └── add task button
      │
      ├── [divider]
      │
      ├── [filter bar]
      │
      ├── [task list]
      │
      └── [footer count]
```

---

## Header

Contains:

- page title
- page subtitle
- Add Task button

Title:

Tasks

Subtitle:

Stay organized and get things done

Button label:

Add Task

Button interaction:

UI only.

No modal opening in Phase 02.

---

## Filter Bar Integration

Render component.

Current behavior:

placeholder UI only.

No filtering functionality.

Allowed temporary implementation:

hardcoded props.

---

## Task List Integration

Render component.

Current behavior:

layout placeholder only.

Allowed temporary implementation:

mock task items.

No dynamic rendering logic.

---

## Footer Counter

Placement:

bottom center

Example:

```txt
7 tasks
```

Current behavior:

static text allowed.

No computed count.

---

## States

### Default

Page fully rendered.

Static UI only.

---

### Empty

Optional placeholder allowed.

No empty-state logic required.

---

## Accessibility

Requirements:

- semantic heading usage
- buttons keyboard accessible
- visible focus states

---

## Responsive Rules

Desktop:

full-width centered container

Tablet:

reduced spacing

Mobile:

compact header

filters stack safely

task list full width

---

## Acceptance Criteria

Component is complete when:

- layout visually matches design mockup
- header renders
- Add Task button renders
- filter bar placeholder renders
- task list placeholder renders
- footer counter renders
- no business logic exists
- no store exists
- responsive layout works