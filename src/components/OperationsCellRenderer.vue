<template>
  <div
    class="w-full flex items-center gap-2 py-2 overflow-visible"
    :class="{ 'row-active': moreMenu }"
  >
    <PMenu v-model="moreMenu" :items="menuItemsWithChildren" trigger-size="sm" />
  </div>
</template>

<script setup lang="ts">
import { PMenu } from 'pandora-design-system'
import infoCircleOutline from 'pandora-icons/infoCircleOutline'
import { onMounted, ref, watch } from 'vue'

const moreMenu = ref(false)

watch(
  moreMenu,
  () => {
    console.log('more', moreMenu.value)
  },
  { immediate: true },
)

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
</script>

<style scoped>
.op-btn {
  background-color: #f7fafc; /* gray-50 */
  border: 1px solid #e2e8f0; /* gray-200 */
  border-radius: 0.375rem; /* 6px */
  width: 2rem; /* 32px */
  height: 2rem; /* 32px */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #718096; /* gray-500 */
  font-weight: bold;
  transition: background-color 0.2s;
}

.op-btn:hover {
  background-color: #edf2f7; /* gray-200 */
}
</style>
