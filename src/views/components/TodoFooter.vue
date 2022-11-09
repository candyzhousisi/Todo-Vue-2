<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <!-- 剩余完成数 -->
    <span class="todo-count"><strong>0</strong> item left</span>
    <!-- 过滤是否完成任务 -->
    <ul class="filters">
      <li>
        <a class="selected" href="#/all">All</a>
      </li>
      <li>
        <a href="#/active">Active</a>
      </li>
      <li>
        <a href="#/completed">Completed</a>
      </li>
    </ul>
    <!-- 清除已完成 -->
    <button class="clear-completed">Clear completed</button>
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
