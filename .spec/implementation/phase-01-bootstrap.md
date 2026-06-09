# Phase 01: Bootstrap

## Goal

Initialize the project foundation.

This phase creates only the project infrastructure.

No business logic.

No task functionality.

No completed UI.

---

## Scope

This phase MUST include:

* Vite setup
* Vue 3 setup
* TypeScript setup
* Tailwind CSS setup
* Pinia installation
* alias configuration
* base folder structure
* global styles
* light theme foundation
* empty App shell placeholder

---

## Forbidden Scope

This phase MUST NOT include:

* task components
* task list
* stores implementation
* localStorage logic
* filtering
* sorting
* modals
* animations
* responsive optimizations
* real UI implementation

No feature work.

Only infrastructure.

---

## Required Reading

Before implementation read:

```txt
.spec/index.md
.spec/architecture/tech-stack.md
.spec/architecture/project-structure.md
.spec/architecture/constraints.md
.spec/design/design-system.md
```

---

## Files To Create

### Project Configuration

Create:

```txt
vite.config.ts
tsconfig.json
tailwind.config.ts
postcss.config.js
```

---

### Source Structure

Create:

```txt
src/
├── assets/
│
├── components/
│   ├── common/
│   ├── layout/
│   └── tasks/
│
├── stores/
│
├── types/
│
├── constants/
│
├── composables/
│
├── utils/
│
├── styles/
│
├── App.vue
└── main.ts
```

Folders may remain empty.

Structure only.

---

## Dependencies

Install:

```txt
vue
typescript
vite
pinia
tailwindcss
@tailwindcss/forms
```

---

## Configuration Rules

### Alias

Configure:

```txt
@
```

Must resolve to:

```txt
src/
```

---

### Tailwind

Requirements:

* utility-first approach
* forms plugin enabled
* light theme only
* no custom CSS framework

---

### Styling

Create:

```txt
src/styles/main.css
```

Must include:

* tailwind base
* tailwind components
* tailwind utilities

Add base typography defaults.

No heavy styling yet.

---

## App Placeholder

Create temporary shell:

```txt
Task Manager
App initialized
```

No layout implementation yet.

Purpose:

verify project setup works.

---

## Implementation Steps

Execute in this order:

1. create vite project
2. install dependencies
3. configure tailwind
4. configure aliases
5. create folder structure
6. setup Pinia
7. create base styles
8. verify app runs

Do not change order.

---

## Acceptance Criteria

Phase complete when:

* project starts successfully
* Tailwind works
* Pinia works
* alias works
* folder structure exists
* TypeScript passes
* app renders placeholder
* no runtime errors exist

---

## Manual Validation

Run:

```bash
npm run dev
```

Verify:

* app loads
* no console errors
* styles applied
* alias imports resolve

---

## Stop Condition

After completion:

STOP.

Do not begin layout implementation.

Wait for:

```txt
phase-02-layout.md
```
