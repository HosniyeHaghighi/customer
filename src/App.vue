<template>
  <!-- TODO: check paddings -->
  <div dir="rtl" class="w-full bg-[#f3f0ff] pt-[4.25rem] ps-[4.25rem] pe-[2.75rem] min-h-screen">
    <header>
      <div class="wrapper"></div>
    </header>

    <main class="flex w-full flex-col bg-white rounded-3xl">
      <pandora-header class="p-6">
        <template #start>
          <div class="flex flex-col gap-y-1">
            <PBreadcrumb>
              <span>کاربران</span>
              <span>کاربر 45675</span>
            </PBreadcrumb>
            <span class="p-text-primary-60 font-medium">جزئیات پرونده و مشخصات کاربری</span>
          </div>
        </template>
        <template #action>
          <PButton type="secondary" outline :start-icon="closeCircleBoldDuotone"
            >احراز هویت نشده</PButton
          >
          <PMenu v-model="operationMenu" :items="menuItemsWithChildren">
            <template #trigger="{ isOpen }">
              <PButton fill type="secondary">
                عملیات
                <template #end>
                  <PSvg
                    :svg="altArrowDownOutline"
                    class="transform transition-transform duration-300"
                    :class="{ 'rotate-180': isOpen }"
                  />
                </template>
              </PButton>
            </template>
          </PMenu>
          <PMenu v-model="moreMenu" :items="menuItemsWithChildren"> </PMenu>
        </template>
      </pandora-header>

      <div class="flex w-full gap-x-3 px-4">
        <div class="flex flex-col w-[17.75rem] border-t border-x rounded-t-2xl p-border-primary-8">
          <pandora-header
            :badge="{
              type: 'accent',
              icon: userOutline,
            }"
            title="محمد عرفان وصال‌طلب"
            subtitle="۰۹۱۲۳۴۵۶۷۸۹"
          >
          </pandora-header>

          <div class="flex flex-col w-full gap-1 mt-2 px-5">
            <!-- TODO: add logic of tabs -->
            <PSidebarItem
              v-for="(item, sIdx) in sidebarItems"
              :key="`sidebar-${sIdx}`"
              :selected="sIdx == 0"
              :title="item.title"
              :startIcon="item.icon"
              mode="inside"
            >
            </PSidebarItem>
          </div>
        </div>
        <div class="flex flex-col flex-grow">
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
        </div>
      </div>

      <!-- <p-form></p-form> -->
    </main>
  </div>
</template>

<script setup lang="ts">
import './main.scss'
import PandoraHeader from './components/PandoraHeader.vue'
import PForm from './components/PForm.vue'
import { PBreadcrumb, PSidebarItem } from 'pandora-design-system'
import { PButton, PMenu, PSvg } from 'pandora-design-system'
import closeCircleBoldDuotone from 'pandora-icons/closeCircleBoldDuotone'
import { ref } from 'vue'
import infoCircleOutline from 'pandora-icons/infoCircleOutline'
import altArrowDownOutline from 'pandora-icons/altArrowDownOutline'
import userIdOutline from 'pandora-icons/userIdOutline'
import userOutline from 'pandora-icons/userOutline'
import documentTextOutline from 'pandora-icons/documentTextOutline'
import wadOfMoneyOutline from 'pandora-icons/wadOfMoneyOutline'
import databaseOutline from 'pandora-icons/databaseOutline'
import document2Outline from 'pandora-icons/document2Outline'

const operationMenu = ref(false)
const moreMenu = ref(false)

const menuItemsWithChildren = ref<any[]>([
  {
    title: 'برچسب',
    startIcon: infoCircleOutline,

    children: [
      {
        title: 'فرزند ۱-۱',
        startIcon: infoCircleOutline,
      },
      {
        title: 'فرزند ۱-۲',
        startIcon: infoCircleOutline,
        children: [
          { title: 'فرزند ۳-۱', startIcon: infoCircleOutline },
          {
            title: 'فرزند ۳-۲',
            startIcon: infoCircleOutline,
            children: [
              { title: 'فرزند ۳-۱', startIcon: infoCircleOutline },
              { title: 'فرزند ۳-۲', startIcon: infoCircleOutline },
            ],
          },
        ],
      },
    ],
  },
])

const sidebarItems = [
  {
    title: 'عنوان',
    icon: userOutline,
  },
  {
    title: 'عنوان',
    icon: documentTextOutline,
  },
  {
    title: 'عنوان',
    icon: wadOfMoneyOutline,
  },
  {
    title: 'عنوان',
    icon: databaseOutline,
  },
  {
    title: 'عنوان',
    icon: document2Outline,
  },
]
</script>

<style scoped></style>
