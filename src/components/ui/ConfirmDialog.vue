<script setup lang="ts">
import Modal from './Modal.vue'

defineProps<{
  modelValue: boolean
  title: string
  message: string
  confirmText?: string
  cancelText?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  confirm: []
  cancel: []
}>()

function close(): void {
  emit('update:modelValue', false)
  emit('cancel')
}
</script>

<template>
  <Modal
    :model-value="modelValue"
    :title="title"
    @update:model-value="emit('update:modelValue', $event)"
    @close="emit('cancel')"
  >
    <p class="text-sm text-slate-600">{{ message }}</p>

    <div class="mt-6 flex justify-end gap-3">
      <button
        type="button"
        class="rounded-2xl border border-neutral-200 bg-white px-6 py-3 text-sm font-medium text-slate-700"
        @click="close"
      >
        {{ cancelText ?? 'Cancel' }}
      </button>
      <button
        type="button"
        class="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-medium text-white"
        @click="emit('confirm')"
      >
        {{ confirmText ?? 'Delete' }}
      </button>
    </div>
  </Modal>
</template>
