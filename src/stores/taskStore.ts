import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { seedTasks } from '@/constants/seedTasks';
import type { Task } from '@/types/task';
import { DEFAULT_TASK_PRIORITY, DEFAULT_TASK_STATUS } from '@/types/task';
import { useUiStore } from '@/stores/uiStore';
import { filterAndSortTasks } from '@/utils/filterAndSortTasks';
import { STORAGE_KEYS, storageGet, storageSet } from '@/utils/storage';
import { parseTasks } from '@/utils/validateTask';

type CreateTaskInput = Omit<Task, 'id' | 'createdAt' | 'updatedAt'>;

export const useTaskStore = defineStore('task', () => {
  const tasks = ref<Task[]>([]);
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  const taskCount = computed(() => tasks.value.length);

  const filteredTasks = computed(() => {
    const uiStore = useUiStore();
    return filterAndSortTasks(tasks.value, uiStore.filters, uiStore.sorting);
  });

  const filteredTaskCount = computed(() => filteredTasks.value.length);

  function getTaskById(id: string): Task | undefined {
    return tasks.value.find(task => task.id === id);
  }

  function persistTasks(): void {
    storageSet(STORAGE_KEYS.tasks, tasks.value);
  }

  function loadTasks(): void {
    isLoading.value = true;
    error.value = null;

    try {
      const stored = storageGet<unknown>(STORAGE_KEYS.tasks);
      const parsed = stored === null ? null : parseTasks(stored);

      if (parsed && parsed.length > 0) {
        tasks.value = parsed;
      } else {
        tasks.value = structuredClone(seedTasks);
        persistTasks();
      }
    } catch {
      error.value = 'Failed to load tasks';
      tasks.value = structuredClone(seedTasks);
      persistTasks();
    } finally {
      isLoading.value = false;
    }
  }

  function addTask(input: CreateTaskInput): Task {
    const now = new Date().toISOString();
    const task: Task = {
      ...input,
      id: crypto.randomUUID(),
      status: input.status ?? DEFAULT_TASK_STATUS,
      priority: input.priority ?? DEFAULT_TASK_PRIORITY,
      createdAt: now,
      updatedAt: now,
    };

    tasks.value = [...tasks.value, task];
    persistTasks();
    return task;
  }

  function updateTask(id: string, updates: Partial<Omit<Task, 'id' | 'createdAt'>>): Task | null {
    const index = tasks.value.findIndex(task => task.id === id);
    if (index === -1) return null;

    const updated: Task = {
      ...tasks.value[index],
      ...updates,
      id,
      createdAt: tasks.value[index].createdAt,
      updatedAt: new Date().toISOString(),
    };

    tasks.value = tasks.value.map(task => (task.id === id ? updated : task));
    persistTasks();
    return updated;
  }

  function deleteTask(id: string): boolean {
    const exists = tasks.value.some(task => task.id === id);
    if (!exists) return false;

    tasks.value = tasks.value.filter(task => task.id !== id);
    persistTasks();
    return true;
  }

  return {
    tasks,
    isLoading,
    error,
    taskCount,
    filteredTasks,
    filteredTaskCount,
    getTaskById,
    loadTasks,
    addTask,
    updateTask,
    deleteTask,
  };
});
