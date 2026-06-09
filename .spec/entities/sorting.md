# Sorting Entity

## Purpose
Defines the sorting data model including sort fields, directions, and rules. This file guides sort implementation and UI controls.

## Information Belongs Here
- Sort fields and definitions
- Sort directions
- Sort rules and priorities
- Default sort state
- Sort combinations

## MUST NOT Be Placed Here
- Component implementation details
- Store implementation details
- UI rendering logic
- Sort application logic

## Required Sections
- Purpose (this section)
- Information Belongs Here
- MUST NOT Be Placed Here
- Required Sections
- Files Linking to This File
- Files This File Depends On
- Example Structure
- Sort Fields
- Sort Directions
- Sort Rules
- Default State
- Sort Combinations

## Files Linking to This File
- stores/ui-store.md
- components/sort-controls.md
- components/task-list.md

## Files This File Depends On
- entities/task.md

## Example Structure
```markdown
# Sorting Entity

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

## Sort Fields
- createdAt: [type]
- dueDate: [type]
- priority: [type]
- title: [type]

## Sort Directions
- asc: [description]
- desc: [description]

## Sort Rules
[Rules for sorting]

## Default State
- field: [value]
- direction: [value]

## Sort Combinations
[Rules for combining sorts]
```
