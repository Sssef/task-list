# Layout

## Purpose

Defines page composition and spacing.

This document describes ONLY layout.

No component logic.

---

## Desktop Container

Width:
max-w-[1200px]

Alignment:
centered

Padding:
px-8
py-8

Page background:
neutral light gray

Use:
bg-neutral-100

---

## App Shell

Structure:

[Page Header]

[Divider]

[Filter Bar]

[Task List]

[Footer Count]

---

## Header

Layout:
horizontal

Alignment:
space-between

Left side:

- title
- subtitle

Right side:

- Add Task button

Spacing:
mb-8

---

## Title Block

Title:

Tasks

Typography:
text-5xl
font-semibold
tracking-tight

Subtitle:

Stay organized and get things done

Typography:
text-lg
text-neutral-500

Spacing:
mt-2

---

## Add Task Button

Placement:
top-right

Height:
48px

Padding:
px-6

Shape:
rounded-2xl

Visual style:
solid black

Hover:
slightly lighter black

Icon:
leading plus icon

Must remain visible on desktop.

---

## Content Surface

Main content appears inside elevated panel.

Visual:
white background

Radius:
rounded-[32px]

Shadow:
shadow-sm

Padding:
p-8

Border:
subtle neutral border

---

## Divider

Placed below header.

Style:
neutral border

Spacing:
my-8

---

## Task List

Vertical list.

Spacing:
gap-4

Layout:
stacked cards

Width:
full

---

## Footer Counter

Placement:
bottom center

Example:
7 tasks

Typography:
text-sm
text-neutral-500

Spacing:
mt-8

---

## Forbidden

Do not use:

- masonry layouts
- card grids
- kanban columns
- sidebar navigation
- dashboard widgets
- floating panels