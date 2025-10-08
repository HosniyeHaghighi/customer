<template>
  <div
    class="contact-info-card flex flex-col flex-1 border rounded-2xl p-border-primary-8 pb-7 px-5 gap-y-5"
  >
    <pandora-header
      :badge="{ type: 'warning', icon: phoneBold }"
      title="اطلاعات تماس"
      subtitle="لیست شماره‌های تماس کاربر"
    >
      <template #action>
        <PButton type="warning" outline>شماره جدید</PButton>
      </template>
    </pandora-header>

    <BaseTable
      :columnDefs="columnDefs"
      :rowData="rowData"
      :gridOptions="gridOptions"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import phoneBold from 'pandora-icons/phoneBold'
import { PButton } from 'pandora-design-system'
import OperationsCellRenderer from './OperationsCellRenderer.vue'
import PandoraHeader from './PandoraHeader.vue'
import BaseTable from './BaseTable.vue'

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