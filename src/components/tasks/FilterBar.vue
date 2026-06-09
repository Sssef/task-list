<script setup lang="ts">
import type { SortDirection, SortField } from '@/types/sorting'
import type { TaskPriority, TaskStatus } from '@/types/task'

const props = defineProps<{
  search: string
  status: TaskStatus | 'all'
  priority: TaskPriority | 'all'
  sortBy: SortField
  sortDirection: SortDirection
}>()

const emit = defineEmits<{
  'update:search': [value: string]
  'update:status': [value: TaskStatus | 'all']
  'update:priority': [value: TaskPriority | 'all']
  'update:sortBy': [value: SortField]
  'update:sortDirection': [value: SortDirection]
  reset: []
}>()

const selectClass = 'inline-flex h-[52px] w-full appearance-none rounded-2xl border border-neutral-200 bg-white bg-none py-0 text-sm font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300'

const mobileStatuses: { value: TaskStatus | 'all', label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'todo', label: 'To Do' },
  { value: 'in-progress', label: 'In Progress' },
  { value: 'done', label: 'Done' },
]

function onSearchInput(event: Event): void {
  emit('update:search', (event.target as HTMLInputElement).value)
}

function onStatusChange(event: Event): void {
  emit('update:status', (event.target as HTMLSelectElement).value as TaskStatus | 'all')
}

function onPriorityChange(event: Event): void {
  emit('update:priority', (event.target as HTMLSelectElement).value as TaskPriority | 'all')
}

function onSortByChange(event: Event): void {
  emit('update:sortBy', (event.target as HTMLSelectElement).value as SortField)
}

function toggleSortDirection(): void {
  emit('update:sortDirection', props.sortDirection === 'asc' ? 'desc' : 'asc')
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-4">
      <div class="relative flex-1">
        <svg
          class="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.5"
          aria-hidden="true"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <input
          type="search"
          :value="search"
          placeholder="Search tasks..."
          class="h-[52px] w-full rounded-2xl border border-neutral-200 bg-white pl-12 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-slate-200"
          aria-label="Search tasks"
          @input="onSearchInput"
        />
      </div>

      <div class="hidden items-center gap-4 lg:flex">
        <div class="relative">
          <svg class="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>
          <select
            :value="status"
            :class="selectClass"
            class="pl-10 pr-10"
            aria-label="Filter by status"
            @change="onStatusChange"
          >
            <option value="all">Status</option>
            <option value="todo">To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>
          <svg class="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>

        <div class="relative">
          <svg class="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.5757 1.42426C11.81 1.18995 12.1899 1.18995 12.4243 1.42426L22.5757 11.5757C22.81 11.81 22.8101 12.1899 22.5757 12.4243L12.4243 22.5757C12.19 22.81 11.8101 22.8101 11.5757 22.5757L1.42426 12.4243C1.18995 12.19 1.18995 11.8101 1.42426 11.5757L11.5757 1.42426Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8L12 12" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.01L12.01 15.9989" />
          </svg>
          <select
            :value="priority"
            :class="selectClass"
            class="pl-10 pr-10"
            aria-label="Filter by priority"
            @change="onPriorityChange"
          >
            <option value="all">Priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <svg class="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>

        <div class="relative">
          <select
            :value="sortBy"
            :class="selectClass"
            class="pl-4 pr-10"
            aria-label="Sort tasks"
            @change="onSortByChange"
          >
            <option value="dueDate">Sort by: Due date</option>
            <option value="priority">Sort by: Priority</option>
            <option value="createdAt">Sort by: Created at</option>
          </select>
          <svg class="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>

        <button
          type="button"
          class="inline-flex h-[52px] w-[52px] items-center justify-center rounded-2xl border border-neutral-200 bg-white hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
          aria-label="Toggle sort direction"
          @click="toggleSortDirection"
        >
          <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M16 18L16 6M16 6L20 10.125M16 6L12 10.125"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              :class="sortDirection === 'asc' ? 'text-slate-900' : 'text-neutral-300'"
            />
            <path
              d="M8 6L8 18M8 18L12 13.875M8 18L4 13.875"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              :class="sortDirection === 'desc' ? 'text-slate-900' : 'text-neutral-300'"
            />
          </svg>
        </button>

        <button
          type="button"
          class="text-sm font-medium text-slate-600 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
          @click="emit('reset')"
        >
          Reset Filters
        </button>
      </div>
    </div>

    <div class="flex items-center justify-between gap-2 lg:hidden">
      <div class="flex gap-2 overflow-x-auto pb-1">
        <button
          v-for="item in mobileStatuses"
          :key="item.value"
          type="button"
          class="shrink-0 rounded-full px-4 py-2 text-sm font-medium"
          :class="status === item.value
            ? 'bg-slate-900 text-white'
            : 'border border-neutral-200 bg-white text-slate-700'"
          @click="emit('update:status', item.value)"
        >
          {{ item.label }}
        </button>
      </div>

      <button
        type="button"
        class="shrink-0 text-sm font-medium text-slate-600 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
        @click="emit('reset')"
      >
        Reset Filters
      </button>
    </div>
  </div>
</template>
