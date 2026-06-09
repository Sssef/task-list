import type { TaskPriority, TaskStatus } from '@/types/task'

export interface Filters {
  search: string
  status: TaskStatus | 'all'
  priority: TaskPriority | 'all'
}

export const DEFAULT_FILTERS: Filters = {
  search: '',
  status: 'all',
  priority: 'all',
}
