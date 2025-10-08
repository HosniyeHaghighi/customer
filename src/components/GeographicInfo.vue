<template>
  <div class="flex flex-col flex-1 border rounded-2xl p-border-primary-8 px-5 gap-y-5">
    <pandora-header
      :badge="{ type: 'success', icon: mapPointAddBold }"
      title="اطلاعات جغرافیایی"
      subtitle="لیست آدرس‌های پستی کاربر"
    >
      <template #action>
        <PButton type="success" outline>آدرس جدید</PButton>
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
import mapPointAddBold from 'pandora-icons/mapPointAddBold'
import { PButton } from 'pandora-design-system'
import OperationsCellRenderer from './OperationsCellRenderer.vue'
import PandoraHeader from './PandoraHeader.vue'
import BaseTable from './BaseTable.vue'

const rowData = ref([
  { province: 'تهران', city: 'تهران', address: 'خیابان ولیعصر، پلاک ۱۲۳' },
  { province: 'اصفهان', city: 'اصفهان', address: 'خیابان چهارباغ، پلاک ۴۵' },
])

const columnDefs = ref([
  {
    headerName: '',
    valueGetter: 'node.rowIndex + 1',
    width: 80,
    cellClass: 'row-number-cell',
  },
  {
    headerName: 'استان',
    field: 'province',
    width: 120,
  },
  {
    headerName: 'شهر',
    field: 'city',
    width: 120,
  },
  {
    headerName: 'آدرس',
    field: 'address',
    flex: 1,
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