import { ref } from 'vue'
import { defineStore } from 'pinia'
import { DEFAULT_FILTERS, type Filters } from '@/types/filters'
import { DEFAULT_SORTING, type SortField, type Sorting, type SortDirection } from '@/types/sorting'
import type { TaskPriority, TaskStatus } from '@/types/task'
import { STORAGE_KEYS, storageGet, storageSet } from '@/utils/storage'

export type ModalType = 'create' | 'edit' | null

function isFilters(value: unknown): value is Filters {
  if (!value || typeof value !== 'object') return false
  const filters = value as Record<string, unknown>
  return (
    typeof filters.search === 'string'
    && typeof filters.status === 'string'
    && typeof filters.priority === 'string'
  )
}

function isSorting(value: unknown): value is Sorting {
  if (!value || typeof value !== 'object') return false
  const sorting = value as Record<string, unknown>
  return (
    typeof sorting.sortBy === 'string'
    && (sorting.sortDirection === 'asc' || sorting.sortDirection === 'desc')
  )
}

export const useUiStore = defineStore('ui', () => {
  const filters = ref<Filters>({ ...DEFAULT_FILTERS })
  const sorting = ref<Sorting>({ ...DEFAULT_SORTING })
  const isModalOpen = ref(false)
  const modalType = ref<ModalType>(null)
  const editingTaskId = ref<string | null>(null)
  const isConfirmOpen = ref(false)
  const deletingTaskId = ref<string | null>(null)

  function persistFilters(): void {
    storageSet(STORAGE_KEYS.filters, filters.value)
  }

  function persistSorting(): void {
    storageSet(STORAGE_KEYS.sorting, sorting.value)
  }

  function loadState(): void {
    const storedFilters = storageGet<unknown>(STORAGE_KEYS.filters)
    if (isFilters(storedFilters)) {
      filters.value = { ...DEFAULT_FILTERS, ...storedFilters }
    }

    const storedSorting = storageGet<unknown>(STORAGE_KEYS.sorting)
    if (isSorting(storedSorting)) {
      sorting.value = { ...DEFAULT_SORTING, ...storedSorting }
    }
  }

  function setSearch(search: string): void {
    filters.value = { ...filters.value, search }
    persistFilters()
  }

  function setStatus(status: TaskStatus | 'all'): void {
    filters.value = { ...filters.value, status }
    persistFilters()
  }

  function setPriority(priority: TaskPriority | 'all'): void {
    filters.value = { ...filters.value, priority }
    persistFilters()
  }

  function resetFilters(): void {
    filters.value = { ...DEFAULT_FILTERS }
    sorting.value = { ...DEFAULT_SORTING }
    persistFilters()
    persistSorting()
  }

  function setSortBy(sortBy: SortField): void {
    sorting.value = { ...sorting.value, sortBy }
    persistSorting()
  }

  function setSortDirection(sortDirection: SortDirection): void {
    sorting.value = { ...sorting.value, sortDirection }
    persistSorting()
  }

  function setSorting(next: Sorting): void {
    sorting.value = { ...next }
    persistSorting()
  }

  function openModal(type: Exclude<ModalType, null>, taskId: string | null = null): void {
    isModalOpen.value = true
    modalType.value = type
    editingTaskId.value = taskId
  }

  function closeModal(): void {
    isModalOpen.value = false
    modalType.value = null
    editingTaskId.value = null
  }

  function openConfirmDelete(taskId: string): void {
    deletingTaskId.value = taskId
    isConfirmOpen.value = true
  }

  function closeConfirm(): void {
    isConfirmOpen.value = false
    deletingTaskId.value = null
  }

  return {
    filters,
    sorting,
    isModalOpen,
    modalType,
    editingTaskId,
    isConfirmOpen,
    deletingTaskId,
    loadState,
    setSearch,
    setStatus,
    setPriority,
    resetFilters,
    setSortBy,
    setSortDirection,
    setSorting,
    openModal,
    closeModal,
    openConfirmDelete,
    closeConfirm,
  }
})
