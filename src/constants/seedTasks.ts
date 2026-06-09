import type { Task } from '@/types/task'

function daysFromNow(days: number): string {
  const date = new Date()
  date.setDate(date.getDate() + days)
  return date.toISOString().split('T')[0]
}

function daysAgo(days: number): string {
  return daysFromNow(-days)
}

const now = new Date().toISOString()

export const seedTasks: Task[] = [
  {
    id: 'seed-1',
    title: 'Finish user onboarding flow',
    description: 'Complete the remaining onboarding screens and copy review.',
    status: 'in-progress',
    priority: 'medium',
    dueDate: daysFromNow(1),
    createdAt: daysAgo(5),
    updatedAt: now,
    commentsCount: 2,
  },
  {
    id: 'seed-2',
    title: 'Fix pagination bug on dashboard',
    description: 'Pagination resets when switching between filter tabs.',
    status: 'todo',
    priority: 'high',
    dueDate: '2024-05-24',
    createdAt: daysAgo(12),
    updatedAt: daysAgo(2),
    commentsCount: 1,
  },
  {
    id: 'seed-3',
    title: 'Write unit tests for auth module',
    description: 'Cover login, logout, and token refresh flows.',
    status: 'done',
    priority: 'low',
    dueDate: daysAgo(3),
    createdAt: daysAgo(20),
    updatedAt: daysAgo(1),
  },
  {
    id: 'seed-4',
    title: 'Update documentation',
    description: 'Refresh setup guide and architecture overview.',
    status: 'todo',
    priority: 'low',
    dueDate: null,
    createdAt: daysAgo(7),
    updatedAt: daysAgo(7),
  },
  {
    id: 'seed-5',
    title: 'Prepare quarterly report',
    description: 'Compile metrics and draft executive summary.',
    status: 'todo',
    priority: 'high',
    dueDate: daysFromNow(14),
    createdAt: daysAgo(3),
    updatedAt: now,
    attachmentsCount: 2,
  },
]
