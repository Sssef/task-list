export type TaskStatus = 'todo' | 'in-progress' | 'done';

export type TaskPriority = 'low' | 'medium' | 'high';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string | null;
  createdAt: string;
  updatedAt: string;
  commentsCount?: number;
  attachmentsCount?: number;
}

export const TASK_STATUSES: TaskStatus[] = ['todo', 'in-progress', 'done'];

export const TASK_PRIORITIES: TaskPriority[] = ['low', 'medium', 'high'];

export const DEFAULT_TASK_STATUS: TaskStatus = 'todo';

export const DEFAULT_TASK_PRIORITY: TaskPriority = 'medium';
