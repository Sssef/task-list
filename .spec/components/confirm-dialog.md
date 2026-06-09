# Confirm Dialog Component

## Purpose
Defines the confirm dialog component for destructive actions. This file guides the implementation of confirmation dialogs.

## Information Belongs Here
- Component purpose and responsibility
- Props interface
- Events emitted
- Dialog content
- Button actions
- Default behavior

## MUST NOT Be Placed Here
- Implementation code
- Styling details
- Specific action implementations
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
- Dialog Content
- Button Actions
- Default Behavior

## Files Linking to This File
- implementation/phase-06-modal.md

## Files This File Depends On
- components/modal.md
- product/user-flows.md

## Example Structure
```markdown
# Confirm Dialog Component

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
  title: string
  message: string
  confirmText: string
  cancelText: string
}
```

## Events Emitted
- confirm: [description]
- cancel: [description]

## Dialog Content
[Description]

## Button Actions
- Confirm: [behavior]
- Cancel: [behavior]

## Default Behavior
[Description]
```
