<template>
  <div class="w-full flex items-center justify-between pt-5 pb-7 px-5">
    <slot name="start">
      <div class="flex items-center gap-x-3">
        <PBadge :type="badge?.type" :icon="badge?.icon" :title="badge?.title" />
        <div class="flex flex-col">
          <span v-if="title?.length" class="text-base font-extrabold p-text-primary-100">{{
            title
          }}</span>
          <span v-if="subtitle?.length" class="text-sm font-medium p-text-primary-60">{{
            subtitle
          }}</span>
        </div>
      </div>
    </slot>
    <div class="flex items-center gap-x-1.5">
      <slot name="action"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PBadge } from 'pandora-design-system'

export type BadgeType =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | string
interface IPandoraHeaderProps {
  badge?: {
    type?: BadgeType
    icon?: any
    title?: string
  }
  title?: string
  subtitle?: string
}

defineProps<IPandoraHeaderProps>()

</script>
