import type { Filters } from '@/types/filters'
import type { Sorting } from '@/types/sorting'
import type { Task, TaskPriority } from '@/types/task'

const PRIORITY_ORDER: Record<TaskPriority, number> = {
  low: 1,
  medium: 2,
  high: 3,
}

function matchesSearch(task: Task, search: string): boolean {
  const query = search.trim().toLowerCase()
  if (!query) return true

  return (
    task.title.toLowerCase().includes(query)
    || task.description.toLowerCase().includes(query)
  )
}

function compareDueDate(a: Task, b: Task): number {
  if (!a.dueDate && !b.dueDate) return 0
  if (!a.dueDate) return 1
  if (!b.dueDate) return -1
  return a.dueDate.localeCompare(b.dueDate)
}

function compareTasks(a: Task, b: Task, sorting: Sorting): number {
  let result = 0

  switch (sorting.sortBy) {
    case 'dueDate':
      result = compareDueDate(a, b)
      break
    case 'priority':
      result = PRIORITY_ORDER[a.priority] - PRIORITY_ORDER[b.priority]
      break
    case 'createdAt':
      result = a.createdAt.localeCompare(b.createdAt)
      break
  }

  return sorting.sortDirection === 'asc' ? result : -result
}

export function filterAndSortTasks(
  tasks: Task[],
  filters: Filters,
  sorting: Sorting,
): Task[] {
  const filtered = tasks.filter((task) => {
    if (filters.status !== 'all' && task.status !== filters.status) return false
    if (filters.priority !== 'all' && task.priority !== filters.priority) return false
    if (!matchesSearch(task, filters.search)) return false
    return true
  })

  return [...filtered].sort((a, b) => compareTasks(a, b, sorting))
}
