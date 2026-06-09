<script setup lang="ts">
import { onUnmounted, watch } from 'vue'

const props = defineProps<{
  modelValue: boolean
  title?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  close: []
}>()

function close(): void {
  emit('update:modelValue', false)
  emit('close')
}

function onOverlayClick(event: MouseEvent): void {
  if (event.target === event.currentTarget) {
    close()
  }
}

function onKeydown(event: KeyboardEvent): void {
  if (event.key === 'Escape' && props.modelValue) {
    close()
  }
}

watch(() => props.modelValue, (open) => {
  if (open) {
    document.addEventListener('keydown', onKeydown)
    document.body.style.overflow = 'hidden'
  } else {
    document.removeEventListener('keydown', onKeydown)
    document.body.style.overflow = ''
  }
})

onUnmounted(() => {
  document.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200 ease-out"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="modelValue"
        class="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-0 lg:items-center lg:justify-end lg:p-6"
        @click="onOverlayClick"
      >
        <Transition
          enter-active-class="transition-transform duration-200 ease-out"
          enter-from-class="translate-y-full lg:translate-y-0 lg:translate-x-full"
          enter-to-class="translate-y-0 lg:translate-x-0"
          leave-active-class="transition-transform duration-200 ease-out"
          leave-from-class="translate-y-0 lg:translate-x-0"
          leave-to-class="translate-y-full lg:translate-y-0 lg:translate-x-full"
        >
          <div
            v-if="modelValue"
            class="w-full max-w-[360px] rounded-t-[28px] bg-white p-6 shadow-lg lg:rounded-[28px]"
            role="dialog"
            aria-modal="true"
            :aria-label="title"
            @click.stop
          >
            <header v-if="title || $slots.header" class="mb-6 flex items-center justify-between">
              <slot name="header">
                <h2 class="text-2xl font-semibold text-slate-900">{{ title }}</h2>
              </slot>
              <button
                type="button"
                class="flex h-10 w-10 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                aria-label="Close"
                @click="close"
              >
                <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </header>

            <div>
              <slot />
            </div>

            <footer v-if="$slots.footer" class="mt-6">
              <slot name="footer" />
            </footer>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
