<template>
  <div class="flex flex-col flex-1 border rounded-2xl p-border-primary-8 px-5">
    <pandora-header
      :badge="{ type: 'accent', icon: phoneOutline }"
      title="اطلاعات تماس"
      subtitle="لیست شماره‌های تلفن کاربر"
    >
      <template #action>
        <PButton type="accent" outline>شماره جدید</PButton>
      </template>
    </pandora-header>
    
    
    <table class="w-full text-right mt-4">
      <thead>
        <tr class="text-gray-400 font-light">
          <th class="p-2 w-12">#</th>
          <th class="p-2">نوع</th>
          <th class="p-2">شماره تماس</th>
          <th class="p-2">عملیات</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(contact, index) in contacts" :key="index" class="border-b last:border-none">
          <td class="p-3">{{ index + 1 }}</td>
          <td class="p-3">{{ contact.type }}</td>
          <td class="p-3" dir="ltr">{{ contact.number }}</td>
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
import phoneOutline from 'pandora-icons/phoneOutline';

const contacts = ref([
  { type: 'تلفن همراه', number: '۰۹۱۲۳۴۵۶۷۸۹' },
  { type: 'تلفن ثابت', number: '۰۳۴۳۲۲۶۱۲۳۴' },
]);
</script>