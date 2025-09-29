<template>
  <div class="flex flex-col flex-1 border rounded-2xl p-border-primary-8 px-5">
    <pandora-header
      :badge="{ type: 'success', icon: mapPinOutline }"
      title="اطلاعات جغرافیایی"
      subtitle="لیست آدرس‌های پستی کاربر"
    >
      <template #action>
        <PButton type="success" outline>آدرس جدید</PButton>
      </template>
    </pandora-header>

  
    <table class="w-full text-right mt-4">
      <thead>
        <tr class="text-gray-400 font-light">
          <th class="p-2 w-12">#</th>
          <th class="p-2">نوع</th>
          <th class="p-2">آدرس</th>
          <th class="p-2">عملیات</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(address, index) in addresses" :key="index" class="border-b last:border-none">
          <td class="p-3">{{ index + 1 }}</td>
          <td class="p-3">{{ address.type }}</td>
          <td class="p-3">{{ address.location }}</td>
          <td class="p-3">
            <button class="p-1 border rounded-md">...</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { PButton } from 'pandora-design-system';
import PandoraHeader from './PandoraHeader.vue';
import mapPinOutline from 'pandora-icons/userOutline'; 

const addresses = ref([
  { type: 'خانه', location: 'شهید کامیاب ۸' },
  { type: 'شرکت', location: 'میدان قرنی - ساختمان پدر' },
  { type: 'دفتر', location: 'میدان قرنی - ساختمان پدر - واحد ۵...' },
  { type: 'فروشگاه', location: 'شهید بهشتی ۲۲ - پ ۱۴' },
  { type: 'سایر', location: 'صادقیه ۱۵ - آوینوکس' },
]);
</script>