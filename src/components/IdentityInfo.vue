<template>
  <div class="flex flex-col border rounded-2xl p-border-primary-8 px-5">
    <pandora-header
      :badge="{
        type: 'info',
        icon: userIdOutline,
      }"
      title="اطلاعات هویتی"
      subtitle="مشخصات و اطلاعات هویتی کاربر"
    >
      <template #action>
        <PButton type="white" fill>انصراف</PButton>
        <PButton type="info" fill>ذخیره تغییرات</PButton>
      </template>
    </pandora-header>
    <div class="w-full grid grid-cols-3 gap-x-2">
      <div class="flex flex-col gap-y-2 w-full">
        <PDropdown title="نوع مشتری" :options="typeOfCustomerOptions" size="lg"> </PDropdown>
        <div class="item-wrapper">
          <PDropdown title="جنسیت" :options="typeOfJenderOptions" size="lg" class="col-span-3">
          </PDropdown>
          <PTextInput title="نام" size="lg" class="col-span-9"></PTextInput>
        </div>
        <div class="item-wrapper">
          <PDropdown
            v-model="genderValue"
            title="وضعیت تاهل"
            :options="typeOfMarridOptions"
            size="lg"
            class="col-span-3"
          >
          </PDropdown>
          <PTextInput
            title="تاریخ ازدواج"
            size="lg"
            :disabled="!isMarried"
            class="col-span-9"
          ></PTextInput>
        </div>
        <div>
          <PDropdown title="شغل" :options="typeOfJobOptions" size="lg" multiple>
            <template #link> ایجاد برچسب جدید </template>
          </PDropdown>
        </div>
      </div>
      <div class="flex flex-col w-full gap-y-2">
        <div class="item-wrapper">
          <PDropdown title="ملیت" :options="nationalOptions" size="lg" class="col-span-3">
          </PDropdown>
          <PTextInput title="کدملی/فراگیر" size="lg" class="col-span-9"></PTextInput>
        </div>
        <div><PTextInput title="نام خانوادگی" size="lg"></PTextInput></div>
        <div><PTextInput title="نام خانوادگی" size="lg"></PTextInput></div>

        <div>
          <PDropdown
            v-model="genderValue"
            title="جستوجو در برچسب ها"
            :options="typeOfMarridOptions"
            size="lg"
          ></PDropdown>
        </div>
        <span class="mb-7">ایجاد برچسب جدید</span>
      </div>
      <div class="flex flex-col w-full gap-y-2">
        <div class="flex items-center w-full gap-x-2">
          <PTextInput title="شماره شناسنامه" size="lg"></PTextInput>
          <PTextInput title="تاریخ تولد" size="lg"></PTextInput>
        </div>
        <div><PTextInput title="نام رسمی" size="lg"></PTextInput></div>
        <div><PTextInput title="کد عضویت" size="lg"></PTextInput></div>

        <div>
          <PDropdown
            v-model="genderValue"
            title="جستوجو در برچسب ها"
            :options="typeOfMarridOptions"
            size="lg"
          ></PDropdown>
        </div>
        <span class="mb-7">ایجاد برچسب جدید</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import PandoraHeader from './PandoraHeader.vue'
import { PSidebarItem, PDropdown, PTextInput, PButton } from 'pandora-design-system'
import userIdOutline from 'pandora-icons/userIdOutline'
import userOutline from 'pandora-icons/userOutline'

const nationalOptions = [
  {
    key: 'ایرانی',
    value: 0,
  },
  {
    key: 'هلندی',
    value: 1,
  },
  {
    key: 'ازبکستانی',
    value: 2,
  },
]
const typeOfCustomerOptions = [
  {
    key: 'عادی',
    value: 0,
  },
  {
    key: 'ویژه',
    value: 1,
  },
  {
    key: 'حقوقی',
    value: 2,
  },
]
const typeOfJenderOptions = [
  {
    key: 'مرد',
    value: 0,
  },
  {
    key: 'زن',
    value: 1,
  },
]
const typeOfMarridOptions = [
  {
    key: 'مجرد',
    value: 0,
  },
  {
    key: 'متاهل',
    value: 1,
  },
]
const typeOfJobOptions = [
  {
    key: 'شغل ۱',
    value: 0,
  },
  {
    key: 'شغل۲',
    value: 0,
  },
  {
    key: 'شغل ۳',
    value: 0,
  },
  {
    key: '۳شغل ',
    value: 1,
  },
]

const genderValue = ref()
const isMarried = computed(() => genderValue.value == 1)
</script>

<style lang="scss" scoped>
.item-wrapper {
  @apply grid grid-cols-12 items-center w-full gap-x-2;
  & > * {
    min-width: 3rem;
  }
}
</style>
