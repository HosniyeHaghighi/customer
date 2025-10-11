<template>
  <div class="grid-wrapper">
    <ag-grid-vue
      class="ag-theme-alpine ag-custom-base-style"
      :columnDefs="columnDefs"
      :rowData="rowData"
      :enableRtl="true"
      :gridOptions="mergedGridOptions"
      :domLayout="domLayout"
      :suppressHorizontalScroll="suppressHorizontalScroll"
    >
    </ag-grid-vue>
  </div>
</template>

<script setup lang="ts">
import { AgGridVue } from 'ag-grid-vue3'
import { ModuleRegistry } from 'ag-grid-community'
import { AllCommunityModule } from 'ag-grid-community'
import 'ag-grid-community/styles/ag-theme-alpine.css'
import { computed } from 'vue'

ModuleRegistry.registerModules([AllCommunityModule])

interface Props {
  columnDefs: any[]
  rowData: any[]
  gridOptions?: any
  domLayout?: 'normal' | 'autoHeight' | 'print'
  suppressHorizontalScroll?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  domLayout: 'autoHeight',
  suppressHorizontalScroll: true,
  gridOptions: () => ({})
})

const mergedGridOptions = computed(() => ({
  suppressRowTransform: true,
  rowHeight: 40,
  headerHeight: 48,
  ...props.gridOptions
}))
</script>

<style scoped>
.grid-wrapper {
  width: 100%;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  overflow: hidden;
}
</style>

<style>
/* استایل‌های global برای AG-Grid */
.ag-custom-base-style {
  --ag-header-background-color: transparent;
  --ag-header-foreground-color: #a0aec0;
  --ag-font-family: inherit;
  --ag-font-size: 14px;
  --ag-border-color: #e2e8f0;
  --ag-row-border-style: solid;
  --ag-row-border-width: 1px;
  --ag-row-border-color: var(--ag-border-color);
  --ag-row-height: 2.5rem;
}

.ag-custom-base-style .ag-root-wrapper {
  border: none !important;
}

.ag-custom-base-style .ag-header {
  border-bottom: 1px solid var(--ag-border-color) !important;
  background-color: #f7fafc;
  min-height: 2.5rem !important;
}

.ag-custom-base-style .ag-header-cell {
  padding: 0 1rem;
}

.ag-custom-base-style .ag-header-cell-label {
  font-weight: 500;
}

/* Vertical Separators in Header */
.ag-custom-base-style .ag-header-cell:not(:first-child) {
  border-right: 1px solid var(--ag-border-color);
}

.ag-custom-base-style .ag-cell {
  padding: 0 1rem;
  display: flex;
  align-items: center;
  line-height: 1.5;
  z-index: 1;
}

.ag-custom-base-style .row-number-cell {
  color: #a0aec0;
  font-weight: 500;
  justify-content: center;
}

.ag-custom-base-style .ag-row {
  border-top: none;
  height: 2.5rem !important;
}

.ag-custom-base-style .ag-row:not(:last-child) {
  border-bottom: 1px solid var(--ag-border-color);
}

.ag-custom-base-style .ag-body-horizontal-scroll {
  display: none;
}
</style>