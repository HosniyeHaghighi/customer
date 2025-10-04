<template>
  <div
    class="contact-info-card flex flex-col flex-1 border rounded-2xl p-border-primary-8 px-5 gap-y-5"
  >
    <pandora-header
      :badge="{ type: 'warning', icon: phoneBold }"
      title="اطلاعات جغرافیایی"
      subtitle="لیست آدرس‌های پستی کاربر"
    >
      <template #action>
        <PButton type="warning" outline>شماره جدید</PButton>
      </template>
    </pandora-header>

    <div class="grid-wrapper">
      <ag-grid-vue
        class="ag-theme-alpine ag-custom-contact-style"
        :columnDefs="columnDefs"
        :rowData="rowData"
        :enableRtl="true"
        :gridOptions="gridOptions"
        :domLayout="'autoHeight'"
        :suppressHorizontalScroll="true"
      >
      </ag-grid-vue>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AgGridVue } from 'ag-grid-vue3'
import { ModuleRegistry } from 'ag-grid-community'
import { AllCommunityModule } from 'ag-grid-community'
import 'ag-grid-community/styles/ag-theme-alpine.css'
// import phoneBold from 'pandora-icons/phoneBold'
// import { PButton } from 'pandora-design-system'
import OperationsCellRenderer from './OperationsCellRenderer.vue'
import PandoraHeader from './PandoraHeader.vue'

ModuleRegistry.registerModules([AllCommunityModule])
const rowData = ref([
  { type: 'تلفن همراه', number: '۰۹۱۲۳۴۵۶۷۸۹' },
  { type: 'تلفن ثابت', number: '۰۳۴۳۲۲۶۱۲۳۴' },
])

const columnDefs = ref([
  {
    headerName: '',
    valueGetter: 'node.rowIndex + 1',
    width: 80,
    cellClass: 'row-number-cell',
  },
  {
    headerName: 'نوع',
    field: 'type',
    width: 150,
  },
  {
    headerName: 'شماره تماس',
    field: 'number',
    flex: 1,
    cellStyle: { direction: 'ltr', textAlign: 'right' },
  },
  {
    headerName: 'عملیات',

    cellRenderer: 'OperationsCellRenderer',
    width: 140,
  },
])

const gridOptions = {
  components: {
    OperationsCellRenderer,
  },
}
</script>

<style>
.contact-info-card {
  padding: 1.5rem; /* 24px */
}

/* --- ag-Grid Customization --- */
.grid-wrapper {
  width: 100%;
  border: 1px solid #e2e8f0; /* gray-200 */
  border-radius: 0.75rem; /* 12px */
  overflow: hidden; /* Important for border-radius */
}

.ag-custom-contact-style {
  --ag-header-background-color: transparent;
  --ag-header-foreground-color: #a0aec0; /* gray-400 */
  --ag-font-family: inherit;
  --ag-font-size: 14px;
  --ag-border-color: #e2e8f0; /* gray-200 */
  --ag-row-border-style: solid;
  --ag-row-border-width: 1px;
  --ag-row-border-color: var(--ag-border-color);
}

.ag-custom-contact-style .ag-root-wrapper {
  border: none !important;
}

.ag-custom-contact-style .ag-header {
  border-bottom: 1px solid var(--ag-border-color) !important;
  background-color: #f7fafc; /* gray-50 */
}

.ag-custom-contact-style .ag-header-cell {
  padding: 0 1rem;
}
.ag-custom-contact-style .ag-header-cell-label {
  font-weight: 500;
}

/* Vertical Separators in Header */
.ag-custom-contact-style .ag-header-cell:not(:first-child) {
  border-right: 1px solid var(--ag-border-color);
}

.ag-custom-contact-style .ag-cell {
  padding: 0 1rem;
  display: flex;
  align-items: center;
  line-height: 1; /* Fixes vertical alignment */
}

.ag-custom-contact-style .row-number-cell {
  color: #a0aec0; /* gray-400 */
  font-weight: 500;
  justify-content: center;
}

.ag-custom-contact-style .ag-row {
  /* Remove default top border of rows */
  border-top: none;
}
.ag-custom-contact-style .ag-row:not(:last-child) {
  border-bottom: 1px solid var(--ag-border-color);
}

.ag-custom-contact-style .ag-body-horizontal-scroll {
  display: none;
}
</style>
