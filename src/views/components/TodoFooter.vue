<script setup lang="ts">
import { RouterLink as Link, useRoute } from 'vue-router'
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
    default: 0
  }
})

// const routerz
</script>

<template>
  <footer class="footer">
    <!-- 剩余完成数 -->
    <span class="todo-count">
      <strong>{{ count }}</strong> item left
    </span>
    <!-- 过滤是否完成任务 -->
    <ul class="filters">
      <li v-for="item in list" :key="item.to">
        <Link :to="item.to" :class="{ selected: item.name == useRoute().name }">{{
          item.name
        }}</Link>
      </li>
    </ul>
    <!-- 清除已完成 -->
    <button class="clear-completed" @click="$emit('onClear')">Clear completed</button>
  </footer>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
