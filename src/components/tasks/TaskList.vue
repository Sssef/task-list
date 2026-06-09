<script setup lang="ts">
import type { Task, TaskStatus } from '@/types/task';
import TaskCard from './TaskCard.vue';

defineProps<{
  tasks: Task[];
}>();

const emit = defineEmits<{
  edit: [taskId: string];
  delete: [taskId: string];
  'status-change': [payload: { taskId: string, status: TaskStatus; }];
}>();
</script>

<template>
  <p v-if="tasks.length === 0" class="text-center text-sm text-slate-500">
    No tasks found
  </p>

  <ul v-else class="flex w-full list-none flex-col gap-4 p-0">
    <TaskCard v-for="task in tasks" :key="task.id" :task="task" @edit="emit('edit', $event)"
      @delete="emit('delete', $event)" @status-change="emit('status-change', $event)" />
  </ul>
</template>
