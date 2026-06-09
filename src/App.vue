<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import FilterBar from '@/components/tasks/FilterBar.vue';
import TaskForm, { type TaskFormData } from '@/components/tasks/TaskForm.vue';
import TaskList from '@/components/tasks/TaskList.vue';
import ConfirmDialog from '@/components/ui/ConfirmDialog.vue';
import Modal from '@/components/ui/Modal.vue';
import { useTaskStore } from '@/stores/taskStore';
import { useUiStore } from '@/stores/uiStore';
import type { TaskStatus } from '@/types/task';

const taskStore = useTaskStore();
const uiStore = useUiStore();

const { filteredTasks, filteredTaskCount } = storeToRefs(taskStore);
const { filters, sorting, isModalOpen, modalType, editingTaskId, isConfirmOpen, deletingTaskId } = storeToRefs(uiStore);

const editingTask = computed(() => {
  if (!editingTaskId.value) return undefined;
  return taskStore.getTaskById(editingTaskId.value);
});

const modalTitle = computed(() => (modalType.value === 'edit' ? 'Edit Task' : 'Add New Task'));

const submitLabel = computed(() => (modalType.value === 'edit' ? 'Save Task' : 'Add Task'));

const deletingTaskTitle = computed(() => {
  if (!deletingTaskId.value) return '';
  return taskStore.getTaskById(deletingTaskId.value)?.title ?? 'this task';
});

function openCreateModal(): void {
  uiStore.openModal('create');
}

function closeModal(): void {
  uiStore.closeModal();
}

function onFormSubmit(data: TaskFormData): void {
  if (modalType.value === 'edit' && editingTaskId.value) {
    taskStore.updateTask(editingTaskId.value, data);
  } else {
    taskStore.addTask(data);
  }
  uiStore.closeModal();
}

function onEdit(taskId: string): void {
  uiStore.openModal('edit', taskId);
}

function onDelete(taskId: string): void {
  uiStore.openConfirmDelete(taskId);
}

function onConfirmDelete(): void {
  if (deletingTaskId.value) {
    taskStore.deleteTask(deletingTaskId.value);
  }
  uiStore.closeConfirm();
}

function onStatusChange(payload: { taskId: string, status: TaskStatus; }): void {
  taskStore.updateTask(payload.taskId, { status: payload.status });
}
</script>

<template>
  <div class="min-h-svh bg-neutral-100 px-4 py-8 md:px-8">
    <div class="mx-auto max-w-[1200px]">
      <div class="rounded-[32px] border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
        <header class="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 class="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Tasks
            </h1>
            <p class="mt-2 text-lg text-neutral-500">
              Stay organized and get things done
            </p>
          </div>

          <button type="button"
            class="inline-flex h-12 shrink-0 items-center justify-center gap-2 self-start rounded-2xl bg-slate-900 px-6 text-sm font-medium text-white transition-colors hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2"
            @click="openCreateModal">
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
              aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Add Task
          </button>
        </header>

        <hr class="my-8 border-neutral-200" />

        <FilterBar :search="filters.search" :status="filters.status" :priority="filters.priority"
          :sort-by="sorting.sortBy" :sort-direction="sorting.sortDirection" @update:search="uiStore.setSearch"
          @update:status="uiStore.setStatus" @update:priority="uiStore.setPriority" @update:sort-by="uiStore.setSortBy"
          @update:sort-direction="uiStore.setSortDirection" @reset="uiStore.resetFilters" />

        <div class="mt-8">
          <TaskList :tasks="filteredTasks" @edit="onEdit" @delete="onDelete" @status-change="onStatusChange" />
        </div>

        <footer class="relative mt-8 text-center">
          <div class="absolute inset-x-0 top-1/2 border-t border-neutral-200" aria-hidden="true" />
          <p class="relative inline-block bg-white px-4 text-sm text-neutral-500">
            {{ filteredTaskCount }} tasks
          </p>
        </footer>
      </div>
    </div>

    <Modal v-model="isModalOpen" :title="modalTitle" @close="closeModal">
      <TaskForm :mode="modalType === 'edit' ? 'edit' : 'create'" :task="editingTask" :submit-label="submitLabel"
        @submit="onFormSubmit" @cancel="closeModal" />
    </Modal>

    <ConfirmDialog v-model="isConfirmOpen" title="Delete task"
      :message="`Are you sure you want to delete &quot;${deletingTaskTitle}&quot;? This action cannot be undone.`"
      confirm-text="Delete" cancel-text="Cancel" @confirm="onConfirmDelete" @cancel="uiStore.closeConfirm" />
  </div>
</template>
