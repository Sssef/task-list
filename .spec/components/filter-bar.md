# Filter Bar Component

## Purpose

Provides UI controls for filtering, searching, and sorting tasks.

This component ONLY handles UI interaction.

It does NOT implement filtering logic.

---

## File Location

```txt
src/components/tasks/FilterBar.vue
```

---

## Dependencies

Required:

- design/filter-bar.md
- entities/filters.md
- design/design-system.md

Optional:

- BaseInput
- BaseDropdown

---

## Responsibilities

The component MUST:

- render search input
- render filter controls
- render sort controls
- emit user interactions
- reflect current filter state
- reset filters

The component MUST NOT:

- filter task data
- sort task data
- access store directly
- mutate global state
- contain business rules

---

## Props

```ts
interface Props {
  search: string
  status: TaskStatus | 'all'
  priority: TaskPriority | 'all'
  sortBy: 'dueDate' | 'priority' | 'createdAt'
  sortDirection: 'asc' | 'desc'
}
```

All props are controlled externally.

---

## Emits

```ts
interface Emits {
  (
    event: 'update:search',
    value: string
  ): void

  (
    event: 'update:status',
    value: TaskStatus | 'all'
  ): void

  (
    event: 'update:priority',
    value: TaskPriority | 'all'
  ): void

  (
    event: 'update:sortBy',
    value: string
  ): void

  (
    event: 'update:sortDirection',
    value: 'asc' | 'desc'
  ): void

  (
    event: 'reset'
  ): void
}
```

All state changes are externalized.

---

## UI Structure

Layout:

horizontal row

Elements:

1. Search input
2. Status filter
3. Priority filter
4. Sort dropdown
5. Sort direction toggle

Spacing:

gap-4

---

## Search Input

- controlled input
- placeholder: "Search tasks..."
- debounce allowed (UI-level only)

Must emit every change.

---

## Status Filter

Options:

- All
- To Do
- In Progress
- Done

Visual:

dropdown or segmented control

---

## Priority Filter

Options:

- All
- Low
- Medium
- High

Same visual system as status.

---

## Sorting

Sort by:

- Due date
- Priority
- Created at

Must NOT compute sorting.

Only emit selected value.

---

## Sort Direction

Toggle:

- asc
- desc

Visual:

icon-based button

No text required.

---

## States

### Default

All controls visible.

---

### Focus

Subtle ring highlight.

---

### Mobile

Must wrap or collapse:

- search stays top
- filters become scrollable row or dropdown

---

## Accessibility

- all inputs keyboard accessible
- labels required
- aria-label for icon buttons

---

## Acceptance Criteria

Component is complete when:

- emits are correct
- props fully control UI
- no filtering logic exists
- layout matches design spec