<template>
  <div class="operations-container">
    <PMenu v-model="moreMenu" :items="menuItemsWithChildren" />
    <button class="op-btn">
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { PMenu } from 'pandora-design-system'
import infoCircleOutline from 'pandora-icons/infoCircleOutline'
import { ref } from 'vue'

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
</script>

<style scoped>
.operations-container {
  display: flex;
  align-items: center;
  gap: 0.5rem; /* 8px */
  /* This helps center it perfectly in the ag-Grid cell */
  width: 100%;
  height: 100%;
}

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
