<script setup lang="ts">
import { ref, watch } from 'vue';
import type { Task, TaskPriority, TaskStatus } from '@/types/task';
import { DEFAULT_TASK_PRIORITY, DEFAULT_TASK_STATUS } from '@/types/task';

export interface TaskFormData {
  title: string;
  description: string;
  priority: TaskPriority;
  status: TaskStatus;
  dueDate: string | null;
}

const props = defineProps<{
  task?: Task;
  mode: 'create' | 'edit';
  submitLabel: string;
}>();

const emit = defineEmits<{
  submit: [data: TaskFormData];
  cancel: [];
}>();

const title = ref('');
const description = ref('');
const priority = ref<TaskPriority>(DEFAULT_TASK_PRIORITY);
const status = ref<TaskStatus>(DEFAULT_TASK_STATUS);
const dueDate = ref('');
const titleError = ref('');

function resetForm(): void {
  title.value = '';
  description.value = '';
  priority.value = DEFAULT_TASK_PRIORITY;
  status.value = DEFAULT_TASK_STATUS;
  dueDate.value = '';
  titleError.value = '';
}

function applyTask(task: Task): void {
  title.value = task.title;
  description.value = task.description;
  priority.value = task.priority;
  status.value = task.status;
  dueDate.value = task.dueDate ?? '';
  titleError.value = '';
}

watch(
  () => [props.mode, props.task] as const,
  ([mode, task]) => {
    if (mode === 'edit' && task) {
      applyTask(task);
    } else if (mode === 'create') {
      resetForm();
    }
  },
  { immediate: true },
);

function selectPriority(value: TaskPriority): void {
  priority.value = value;
}

function priorityClass(value: TaskPriority): string {
  if (priority.value !== value) {
    return 'border-neutral-200 bg-white text-slate-700';
  }

  if (value === 'low') return 'border-neutral-200 bg-green-50 text-green-700';
  if (value === 'medium') return 'border-neutral-200 bg-amber-50 text-amber-700';
  return 'border-neutral-200 bg-red-50 text-red-700';
}

function validate(): boolean {
  if (!title.value.trim()) {
    titleError.value = 'Title is required';
    return false;
  }

  titleError.value = '';
  return true;
}

function onSubmit(): void {
  if (!validate()) return;

  emit('submit', {
    title: title.value.trim(),
    description: description.value.trim(),
    priority: priority.value,
    status: status.value,
    dueDate: dueDate.value || null,
  });
}
</script>

<template>
  <form class="flex flex-col gap-6" @submit.prevent="onSubmit">
    <div>
      <label class="mb-2 block text-sm font-medium text-slate-700">Task title</label>
      <input v-model="title" type="text" placeholder="What needs to be done?"
        class="h-12 w-full rounded-xl border px-4 text-sm text-slate-900 placeholder:text-slate-400"
        :class="titleError ? 'border-red-500' : 'border-neutral-200'" autofocus />
      <p v-if="titleError" class="mt-1 text-sm text-red-500">{{ titleError }}</p>
    </div>

    <div>
      <label class="mb-2 block text-sm font-medium text-slate-700">Priority</label>
      <div class="flex gap-2">
        <button type="button"
          class="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium"
          :class="priorityClass('low')" @click="selectPriority('low')">
          <span class="h-4 w-4 rounded-full border-2 border-green-500" aria-hidden="true" />
          Low
        </button>
        <button type="button"
          class="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium"
          :class="priorityClass('medium')" @click="selectPriority('medium')">
          <span class="h-4 w-4 rounded-full border-2 border-amber-500" aria-hidden="true" />
          Medium
        </button>
        <button type="button"
          class="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium"
          :class="priorityClass('high')" @click="selectPriority('high')">
          <span class="h-4 w-4 rounded-full border-2 border-red-500" aria-hidden="true" />
          High
        </button>
      </div>
    </div>

    <div>
      <label class="mb-2 block text-sm font-medium text-slate-700">Status</label>
      <select v-model="status"
        class="flex h-12 w-full items-center rounded-xl border border-neutral-200 bg-white px-4 text-sm text-slate-700">
        <option value="todo">To Do</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
      </select>
    </div>

    <div>
      <label class="mb-2 block text-sm font-medium text-slate-700">Due date</label>
      <div class="relative">
        <input v-model="dueDate" type="date"
          class="h-12 w-full rounded-xl border border-neutral-200 px-4 pr-12 text-sm text-slate-900" />
        <svg class="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" fill="none"
          viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
        </svg>
      </div>
    </div>

    <div>
      <label class="mb-2 block text-sm font-medium text-slate-700">Notes (optional)</label>
      <textarea v-model="description" placeholder="Add notes..." rows="4"
        class="min-h-[120px] w-full resize-none rounded-xl border border-neutral-200 p-4 text-sm text-slate-900 placeholder:text-slate-400" />
    </div>

    <div class="flex justify-end gap-3">
      <button type="button"
        class="rounded-2xl border border-neutral-200 bg-white px-6 py-3 text-sm font-medium text-slate-700"
        @click="emit('cancel')">
        Cancel
      </button>
      <button type="submit" class="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-medium text-white">
        {{ submitLabel }}
      </button>
    </div>
  </form>
</template>
