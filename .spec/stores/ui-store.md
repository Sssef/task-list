# UI Store

## Purpose
Defines the UI store for managing UI state (filters, sorting, modals). This file guides the implementation of UI state management.

## Information Belongs Here
- Store state definition
- Getters (computed properties)
- Actions (mutations)
- Filter state management
- Sort state management
- Modal state management

## MUST NOT Be Placed Here
- Implementation code
- Component integration details
- Task state
- Local storage implementation details

## Required Sections
- Purpose (this section)
- Information Belongs Here
- MUST NOT Be Placed Here
- Required Sections
- Files Linking to This File
- Files This File Depends On
- Example Structure
- State Definition
- Getters
- Actions
- Filter State Management
- Sort State Management
- Modal State Management

## Files Linking to This File
- architecture/state-management.md
- implementation/phase-03-store.md

## Files This File Depends On
- entities/filters.md
- entities/sorting.md
- architecture/state-management.md

## Example Structure
```markdown
# UI Store

## Purpose
[Description]

## Information Belongs Here
[Bullet points]

## MUST NOT Be Placed Here
[Bullet points]

## Required Sections
[Bullet points]

## Files Linking to This File
[List]

## Files This File Depends On
[List]

## Example Structure
[Code block]

## State Definition
```typescript
interface State {
  filters: Filters
  sort: Sort
  isModalOpen: boolean
  modalType: string | null
}
```

## Getters
- [getter 1]: [description]
- [getter 2]: [description]

## Actions
- setFilter: [description]
- resetFilters: [description]
- setSort: [description]
- openModal: [description]
- closeModal: [description]

## Filter State Management
[Description]

## Sort State Management
[Description]

## Modal State Management
[Description]
```
