import { TASK_PRIORITIES, TASK_STATUSES, type Task } from '@/types/task'

export function isTask(value: unknown): value is Task {
  if (!value || typeof value !== 'object') return false

  const task = value as Record<string, unknown>

  return (
    typeof task.id === 'string'
    && typeof task.title === 'string'
    && typeof task.description === 'string'
    && typeof task.status === 'string'
    && TASK_STATUSES.includes(task.status as Task['status'])
    && typeof task.priority === 'string'
    && TASK_PRIORITIES.includes(task.priority as Task['priority'])
    && (task.dueDate === null || typeof task.dueDate === 'string')
    && typeof task.createdAt === 'string'
    && typeof task.updatedAt === 'string'
  )
}

export function parseTasks(value: unknown): Task[] | null {
  if (!Array.isArray(value)) return null

  const tasks = value.filter(isTask)
  return tasks.length === value.length ? tasks : null
}
