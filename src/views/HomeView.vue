<script setup lang="ts">
import TodoHeader from './components/TodoHeader.vue'
import TodoContent from './components/TodoContent.vue'
import TodoFooter from './components/TodoFooter.vue'
</script>

<template>
  <section class="todoapp">
    <!-- 头部 -->
    <TodoHeader />
    <!-- 主体 -->
    <TodoContent />
    <!-- 底部 -->
    <TodoFooter />
  </section>
</template>
