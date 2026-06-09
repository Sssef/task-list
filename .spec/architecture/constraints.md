# Constraints

## Forbidden

- No UI libraries
- No component frameworks
- No drag and drop
- No kanban
- No backend
- No server persistence
- No auth
- No dark theme
- No i18n abstraction
- No premature abstractions
- No generic composables

## Styling

Must use:
- Tailwind CSS

Avoid:
- scoped CSS unless impossible
- CSS modules
- inline styles

## State

Allowed:
- Pinia

Forbidden:
- Vuex
- event bus

## Persistence

Only:
- localStorage

No:
- IndexedDB
- remote APIs