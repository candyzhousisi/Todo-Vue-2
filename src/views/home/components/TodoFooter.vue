<template>
  <!-- 底部 -->
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

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  components: {},

  data() {
    return {}
  },

  created() {},

  computed: {},

  methods: {}
})
</script>

<style lang="less" scoped></style>
