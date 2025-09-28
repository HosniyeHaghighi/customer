<template>
  <div class="w-full flex items-center justify-between p-5 bg-white">
    <div class="flex flex-col">
      <!-- <PBadge :icon="icon"></PBadge> -->
      <PBreadcrumb>
        <span>کاربران</span>
        <span>کاربر 45675</span>
      </PBreadcrumb>
      <span class="p-text-primary-60 font-weight: 500">جزئیات پرونده و مشخصات کاربری</span>
    </div>
    <div>
      <PButton type="secondary" outline :start-icon="closeCircleBoldDuotone"
        >احراز هویت نشده</PButton
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { PButton, PBreadcrumb, PBadge } from 'pandora-design-system'
import closeCircleBoldDuotone from 'pandora-icons/closeCircleBoldDuotone'

// import userAi2Iconly from 'pandora-icons/userAi2Iconly'
</script>
