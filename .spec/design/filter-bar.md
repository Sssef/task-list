# Filter Bar

## Purpose

Defines search and filter row.

No filtering logic.

Visual contract only.

---

## Layout

Desktop:
single horizontal row

Structure:

[search]

[status]

[priority]

[sort]

[sort direction]

Gap:
gap-4

Alignment:
center

---

## Search Input

Width:
flex-1

Height:
52px

Shape:
rounded-2xl

Style:
outlined

Leading icon:
search

Placeholder:
Search tasks...

---

## Filter Dropdowns

Height:
52px

Width:
compact auto

Shape:
rounded-2xl

Visual:
subtle border

Chevron:
trailing

Controls:

- Status
- Priority
- Sort by

---

## Sort Direction Button

Shape:
square

Size:
52px

Purpose:
ascending / descending

Visual:
ghost outlined

---

## States

Hover:
subtle background

Focus:
soft ring

Disabled:
reduced opacity

---

## Mobile

Converted into:

[search row]

[scrollable chips]

Filters may collapse.

No horizontal overflow clipping.

---

## Forbidden

Do not use:

- sidebar filters
- multilevel dropdowns
- advanced search
- accordion filter groups

---

### Reset Filters

Control:

text button or dropdown option

Label:

Reset Filters

Behavior:

returns all filters to default state.

Resets:

- search
- status
- priority
- sorting
- direction

Visual priority:

secondary action.

Must remain visible.

---

## Sort Direction Button

Visual feedback required.

ASC:

up arrow highlighted with accent color

DESC:

down arrow highlighted with accent color

Inactive direction:

neutral color

State must be visually obvious.

---

## Select Controls

Use ONLY one chevron icon.

Native browser chevron must be removed.

Double chevrons forbidden.

---

## Filter Icons

Status filter:

use workflow/progress-related icon.

Avoid generic sliders.

Priority filter:

use flag or layered-priority icon.

Avoid unrelated symbols.

Icons must improve scanability.