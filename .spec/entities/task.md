# Task Entity

## Purpose
Defines the task data model including properties, types, and validation rules. This file guides TypeScript type definitions and store implementation.

## Information Belongs Here
- Task properties and types
- Required vs optional fields
- Validation rules
- Default values
- Task states and transitions

## MUST NOT Be Placed Here
- Component implementation details
- Store implementation details
- UI rendering logic
- API integration details

## Required Sections
- Purpose (this section)
- Information Belongs Here
- MUST NOT Be Placed Here
- Required Sections
- Files Linking to This File
- Files This File Depends On
- Example Structure
- Properties
- Types
- Validation Rules
- Default Values
- State Transitions

## Files Linking to This File
- stores/task-store.md
- components/task-card.md
- components/task-form.md
- components/task-list.md
- architecture/local-storage.md

## Files This File Depends On
- None

## Example Structure
```markdown
# Task Entity

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

## Properties
- id: [type]
- title: [type]
- description: [type]
- status: [type]
- priority: [type]
- dueDate: [type]
- createdAt: [type]
- updatedAt: [type]

## Types
[Type definitions]

## Validation Rules
- title: [rules]
- description: [rules]
- dueDate: [rules]

## Default Values
- status: [value]
- priority: [value]

## State Transitions
- [State 1] → [State 2]
- [State 2] → [State 3]
```
