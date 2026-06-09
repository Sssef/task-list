# Modal Component

## Purpose

Provides a generic container for modal dialogs.

Used for TaskForm (create/edit task).

This is a structural UI primitive.

---

## File Location

```txt
src/components/ui/Modal.vue
```

---

## Dependencies

Required:

- design/modal.md
- design/animations.md
- design/design-system.md

---

## Responsibilities

The component MUST:

- render overlay
- render modal container
- handle open/close state
- emit close events
- support slot content

The component MUST NOT:

- contain task-specific logic
- contain form logic
- access store
- define business behavior

---

## Props

```ts
interface Props {
  modelValue: boolean
  title?: string
  width?: 'sm' | 'md' | 'lg'
}
```

---

## Emits

```ts
interface Emits {
  (
    event: 'update:modelValue',
    value: boolean
  ): void

  (
    event: 'close'
  ): void
}
```

---

## Structure

Layout:

```txt
[overlay]
  └── [modal container]
        ├── header
        ├── content (slot)
        └── footer (slot)
```

---

## Overlay

- full screen
- semi-transparent black
- click outside closes modal

Must emit `close`.

---

## Container

Position:

center (desktop)
bottom sheet (mobile)

Style:

white surface
rounded-[28px]

---

## Header

Optional title slot.

If title exists:

- render left aligned title
- render close button on right

---

## Content Slot

Primary content area.

No padding assumptions beyond design spec.

---

## Footer Slot

Optional.

Typically contains action buttons.

---

## States

### Open

- overlay visible
- modal visible
- animation plays

---

### Close

- reverse animation
- emit close after transition ends

---

## Animation

Open:

- fade overlay
- slide modal in

Duration:
200ms

---

## Accessibility

- ESC closes modal
- focus trap inside modal
- initial focus inside content
- aria-modal=true

---

## Mobile Behavior

- modal becomes bottom sheet
- full width
- safe padding bottom

---

## Acceptance Criteria

Component is complete when:

- open/close works via v-model
- overlay closes modal
- slot content renders correctly
- accessibility requirements met
- no business logic exists