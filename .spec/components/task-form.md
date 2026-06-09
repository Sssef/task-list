# Task Form Component

## Purpose
Defines the task form component for creating and editing tasks. This file guides the implementation of task input and validation.

## Information Belongs Here
- Component purpose and responsibility
- Props interface
- Events emitted
- Form fields
- Validation rules
- Submit behavior
- Cancel behavior

## MUST NOT Be Placed Here
- Implementation code
- Styling details
- Validation implementation
- Store integration specifics

## Required Sections
- Purpose (this section)
- Information Belongs Here
- MUST NOT Be Placed Here
- Required Sections
- Files Linking to This File
- Files This File Depends On
- Example Structure
- Component Purpose
- Props Interface
- Events Emitted
- Form Fields
- Validation Rules
- Submit Behavior
- Cancel Behavior

## Files Linking to This File
- implementation/phase-06-modal.md

## Files This File Depends On
- entities/task.md
- product/user-flows.md

## Example Structure
```markdown
# Task Form Component

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

## Component Purpose
[Description]

## Props Interface
```typescript
interface Props {
  task?: Task
  mode: 'create' | 'edit'
}
```

## Events Emitted
- submit: [description]
- cancel: [description]

## Form Fields
- [field 1]: [type]
- [field 2]: [type]

## Validation Rules
- [field 1]: [rules]
- [field 2]: [rules]

## Submit Behavior
[Description]

## Cancel Behavior
[Description]
```
