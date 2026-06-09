export type SortField = 'dueDate' | 'priority' | 'createdAt'

export type SortDirection = 'asc' | 'desc'

export interface Sorting {
  sortBy: SortField
  sortDirection: SortDirection
}

export const DEFAULT_SORTING: Sorting = {
  sortBy: 'dueDate',
  sortDirection: 'asc',
}
