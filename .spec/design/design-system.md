Design System
Theme
light-only

Visual direction:
neutral monochrome + subtle accents

Radius
card: rounded-3xl (24px)
input: rounded-2xl (16px)
button: rounded-2xl (16px)
badge: rounded-full (pill)
checkbox: rounded-md (4px)

Shadows
card: shadow-sm
card hover: shadow-md
modal: shadow-lg

Avoid heavy shadows.

Spacing
page container: max-w-[1100px]
task list gap: gap-4
card padding: p-6
header gap: gap-2
filter bar gap: gap-3
metadata gap: gap-4

Typography
page title: text-4xl font-semibold tracking-tight
page subtitle: text-sm text-slate-600
task title: text-lg font-medium text-slate-900
metadata: text-sm text-slate-500
badge text: text-xs font-medium
button text: text-sm font-medium
input placeholder: text-sm text-slate-400

Colors
background: white
surface: white
border: neutral-200
text primary: slate-900
text secondary: slate-600
text muted: slate-500
accent orange: orange-500 (due tomorrow)
accent red: red-500 (overdue, high priority)
accent green: green-500 (low priority, in progress)
accent amber: amber-500 (medium priority, upcoming)
accent blue: blue-500 (in progress badge)
accent neutral: slate-100 (to do badge)

Buttons
primary:
bg-slate-900 text-white rounded-2xl px-6 py-3
secondary:
bg-white border border-neutral-200 text-slate-700 rounded-2xl px-6 py-3
ghost:
bg-transparent text-slate-600 hover:bg-slate-100
icon button:
w-10 h-10 rounded-full

Badges
Status To Do:
bg-slate-100 text-slate-700
Status In Progress:
bg-blue-50 text-blue-700
Status Done:
bg-green-50 text-green-700
Priority Low:
bg-green-50 text-green-700
Priority Medium:
bg-amber-50 text-amber-700
Priority High:
bg-red-50 text-red-700

All badges:
px-4 py-2 rounded-full text-xs font-medium

Checkbox
size: 20px
border: border-2 border-neutral-300
checked: bg-slate-900 border-slate-900
unchecked: bg-white

Priority Ring
size: 20px
shape: circular ring
border-width: 2px
Low: border-green-500
Medium: border-amber-500
High: border-red-500
Default: border-neutral-300

Card
background: white
border: border border-neutral-200
radius: rounded-3xl
padding: p-6
shadow: shadow-sm
hover shadow: shadow-md
transition: 200ms ease
min-height: 96px

Task Card Layout
Horizontal row.
Structure:
[checkbox] [priority ring] [content] [badge] [actions]
Alignment: center vertically
Spacing: gap-4

Search Input
width: full
height: 48px
padding: px-4
border: border border-neutral-200
radius: rounded-2xl
placeholder: text-slate-400
icon: search icon left

Filter Dropdown
height: 48px
padding: px-4 pr-10
border: border border-neutral-200
radius: rounded-2xl
background: white
chevron: right side

Modal
background: white
radius: rounded-3xl
shadow: shadow-lg
padding: p-8
max-width: 500px
overlay: bg-black/50

Modal Form
label: text-sm font-medium text-slate-700 mb-2
input: w-full h-12 border border-neutral-200 rounded-2xl px-4
textarea: w-full min-h-[120px] border border-neutral-200 rounded-2xl p-4
button group: flex gap-3 justify-end

Mobile Layout
container: max-w-[400px]
card padding: p-4
task title: text-base
badge: px-3 py-1.5
filter chips: horizontal scroll
search: full width

Icons
size: 20px (default)
size: 16px (small, metadata)
style: outline
color: inherit from parent

Forbidden
Do not add:
avatars
colorful backgrounds
progress bars
large icons (>24px)
shadows stronger than shadow-lg
nested cards
gradients
custom animations
saturated colors