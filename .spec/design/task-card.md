# Task Card

## Purpose

Defines visual structure of task item.

This document is visual only.

No business logic.

---

## Height

Minimum:
96px

Desktop:
104–112px preferred

Mobile:
compact variant allowed

---

## Layout

Horizontal row.

Structure:

[checkbox]

[color ring indicator]

[content]

[badge area]

[actions]

Alignment:
center vertically

Spacing:
gap-4

Padding:
px-6
py-6

---

## Card Surface

Background:
white

Radius:
rounded-[24px]

Border:
border border-neutral-200

Shadow:
none

Hover:
subtle elevation

Use:
hover:shadow-sm

Transition:
200ms ease

---

## Checkbox

Position:
left

Style:
neutral

Size:
20px

No custom animated checkbox.

---

## Priority Indicator Ring

Purpose:
quick semantic identification

Shape:
circular ring

Size:
20px

Colors:

Low:
green

Medium:
amber

High:
red

Default:
neutral gray

Must remain subtle.

Avoid saturated colors.

---

## Content Area

Layout:
vertical

Structure:

[task title]

[metadata row]

Gap:
gap-2

Width:
flex-1

---

## Title

Typography:
text-2xl
font-medium

Color:
neutral-900

Max lines:
2

Overflow:
truncate

---

## Metadata Row

Contains:

- due date
- comments count placeholder

Typography:
text-sm

Gap:
gap-4

Color:
neutral-500

Icons:
small outline icons

---

## Due Date States

Default:
neutral

Upcoming:
amber

Overdue:
red

No heavy warning styles.

---

## Badge Area

Placement:
right side

Alignment:
center

Width:
fixed

Badges use soft pill style.

---

## Status Badge

Shape:
pill

Padding:
px-4
py-2

Radius:
full

Style:
soft background

Examples:

To Do:
neutral

In Progress:
blue

Done:
green

No strong saturation.

---

## Priority Badge

Same visual system as status.

Low:
green

Medium:
amber

High:
red

---

## Actions

Placement:
right edge

Control:
three dots button

Visual:
ghost button

No visible border.

---

## Hover

Effects:

- subtle shadow
- slight border emphasis

Must feel lightweight.

Avoid transform scaling.

---

## Forbidden

Do not add:

- avatars
- colorful backgrounds
- progress bars
- large icons
- shadows stronger than shadow-md
- nested cards

---

## Status Checkbox

Purpose:

replaces previous status indicator.

Acts as:

- completion checkbox
- status indicator

Visual:

circular checkbox

Unchecked state:

subtle semantic border

Checked state:

check icon visible

Check icon color MUST match task status color.

Examples:

Todo:
neutral

In Progress:
amber or blue

Done:
green

The previous standalone status indicator is removed.

Forbidden:

- separate status dot
- duplicated indicators