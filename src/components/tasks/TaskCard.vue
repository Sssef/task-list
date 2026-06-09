<script setup lang="ts">
import { ref } from 'vue';
import type { Task, TaskPriority, TaskStatus } from '@/types/task';
import { formatDueDate, isOverdue } from '@/utils/formatDueDate';

const props = defineProps<{
  task: Task;
}>();

const emit = defineEmits<{
  edit: [taskId: string];
  delete: [taskId: string];
  'status-change': [payload: { taskId: string, status: TaskStatus; }];
}>();

const menuOpen = ref(false);

function onCheckboxChange(): void {
  const status: TaskStatus = props.task.status === 'done' ? 'todo' : 'done';
  emit('status-change', { taskId: props.task.id, status });
}

function toggleMenu(): void {
  menuOpen.value = !menuOpen.value;
}

function onEditClick(): void {
  menuOpen.value = false;
  emit('edit', props.task.id);
}

function onDeleteClick(): void {
  menuOpen.value = false;
  emit('delete', props.task.id);
}

const statusLabels: Record<TaskStatus, string> = {
  todo: 'To Do',
  'in-progress': 'In Progress',
  done: 'Done',
};

const priorityLabels: Record<TaskPriority, string> = {
  low: 'Low',
  medium: 'Medium',
  high: 'High',
};

const priorityCheckboxUncheckedClass: Record<TaskPriority, string> = {
  low: 'border-green-500 bg-green-50/50',
  medium: 'border-amber-500 bg-amber-50/50',
  high: 'border-red-500 bg-red-50/50',
};

const priorityCheckboxCheckedClass: Record<TaskPriority, string> = {
  low: 'border-green-500 bg-green-50',
  medium: 'border-amber-500 bg-amber-50',
  high: 'border-red-500 bg-red-50',
};

const priorityCheckIconClass: Record<TaskPriority, string> = {
  low: 'text-green-500',
  medium: 'text-amber-500',
  high: 'text-red-500',
};

const statusBadgeClass: Record<TaskStatus, string> = {
  todo: 'bg-slate-100 text-slate-700',
  'in-progress': 'bg-blue-50 text-blue-700',
  done: 'bg-green-50 text-green-700',
};

const priorityBadgeClass: Record<TaskPriority, string> = {
  low: 'bg-green-50 text-green-700',
  medium: 'bg-amber-50 text-amber-700',
  high: 'bg-red-50 text-red-700',
};
</script>

<template>
  <li
    class="flex min-h-24 flex-wrap items-center gap-4 rounded-3xl border border-neutral-200 bg-white p-4 transition-all duration-200 ease-out hover:border-neutral-300 hover:shadow-sm md:flex-nowrap md:px-6 md:py-6"
    :class="{ 'opacity-70': task.status === 'done' }">
    <button type="button" role="checkbox" :aria-checked="task.status === 'done'"
      class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 cursor-pointer"
      :class="task.status === 'done'
        ? priorityCheckboxCheckedClass[task.priority]
        : priorityCheckboxUncheckedClass[task.priority]" aria-label="Mark task complete" @click="onCheckboxChange">

      <svg v-if="task.status === 'done'" class="h-4 w-4" :class="priorityCheckIconClass[task.priority]"
        viewBox="0 0 24 24" fill="none">
        <path d="M5 14L8.23309 16.4248C8.66178 16.7463 9.26772 16.6728 9.60705 16.2581L18 6" stroke="currentColor"
          stroke-width="2.5" stroke-linecap="round" />
      </svg>
    </button>

    <div class="min-w-0 flex-1">
      <p class="line-clamp-2 text-lg font-medium text-slate-900 md:text-2xl"
        :class="{ 'line-through': task.status === 'done' }">
        {{ task.title }}
      </p>

      <div v-if="task.dueDate" class="mt-2 flex flex-wrap items-center gap-4 text-sm text-slate-500">
        <span class="inline-flex items-center gap-1.5" :class="{
          'text-red-500': isOverdue(task.dueDate, task.status),
          'text-amber-500': !isOverdue(task.dueDate, task.status) && formatDueDate(task.dueDate).tone === 'upcoming',
        }">
          <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"
            aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
          </svg>
          {{ formatDueDate(task.dueDate).label }}
        </span>
      </div>
    </div>

    <div class="hidden shrink-0 items-center gap-3 md:flex">
      <span class="rounded-full px-4 py-2 text-xs font-medium" :class="priorityBadgeClass[task.priority]">
        {{ priorityLabels[task.priority] }}
      </span>

      <span class="rounded-full px-4 py-2 text-xs font-medium" :class="statusBadgeClass[task.status]">
        {{ statusLabels[task.status] }}
      </span>
    </div>

    <div class="relative shrink-0">
      <button type="button"
        class="flex h-10 w-10 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
        aria-label="Task actions" aria-haspopup="menu" :aria-expanded="menuOpen" @click="toggleMenu">
        <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="5" cy="12" r="1.5" />
          <circle cx="12" cy="12" r="1.5" />
          <circle cx="19" cy="12" r="1.5" />
        </svg>
      </button>

      <div v-if="menuOpen"
        class="absolute right-0 top-full z-10 mt-1 min-w-[120px] rounded-xl border border-neutral-200 bg-white py-1 shadow-sm"
        role="menu">
        <button type="button" class="block w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-50"
          role="menuitem" @click="onEditClick">
          Edit
        </button>
        <button type="button" class="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-slate-50"
          role="menuitem" @click="onDeleteClick">
          Delete
        </button>
      </div>
    </div>

    <div class="flex w-full flex-wrap items-center gap-2 md:hidden">
      <span class="rounded-full px-3 py-1.5 text-xs font-medium" :class="priorityBadgeClass[task.priority]">
        {{ priorityLabels[task.priority] }}
      </span>
      <span class="rounded-full px-3 py-1.5 text-xs font-medium" :class="statusBadgeClass[task.status]">
        {{ statusLabels[task.status] }}
      </span>
    </div>
  </li>
</template>
