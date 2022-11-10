<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
const list = [
  {
    to: '/all',
    name: 'All'
  },
  {
    to: '/active',
    name: 'Active'
  },
  {
    to: '/completed',
    name: 'Completed'
  }
]

defineProps({
  count: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['onClear'])
</script>

<template>
  <footer class="footer">
    <!-- 剩余完成数 -->
    <span class="todo-count">
      <strong>{{ count }}</strong>
      <span> item left</span>
    </span>
    <!-- 过滤是否完成任务 -->
    <ul class="filters">
      <li v-for="item in list" :key="item.name">
        <RouterLink :class="{ selected: useRoute().name === item.name }" :to="item.to">
          <span>{{ item.name }}</span>
        </RouterLink>
      </li>
    </ul>
    <!-- 清除已完成 -->
    <button class="clear-completed" @click="emit('onClear')">Clear completed</button>
  </footer>
</template>
