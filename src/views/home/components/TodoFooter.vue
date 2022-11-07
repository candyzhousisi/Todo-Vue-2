<template>
  <!-- 底部 -->
  <footer class="footer">
    <!-- 剩余完成数 -->
    <span class="todo-count">
      <strong>{{ count }}</strong> item left
    </span>
    <!-- 过滤是否完成任务 -->
    <ul class="filters">
      <li v-for="item in list" :key="item.id">
        <a :class="{ selected: item.statu === $route.name }" :href="`#${item.path}`">{{
          item.statu
        }}</a>
      </li>
    </ul>
    <!-- 清除已完成 -->
    <button class="clear-completed" @click="$emit('onClear')">Clear completed</button>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  components: {},
  props: {
    count: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      list: [
        { id: 1, statu: 'All', path: '/all' },
        { id: 2, statu: 'Active', path: '/active' },
        { id: 3, statu: 'Completed', path: '/completed' }
      ]
    }
  },

  created() {
    // console.log('route', this.$route)
    // console.log('router', this.$router)
    if (this.$route.name !== 'All') {
      this.$router.push('/')
    }
  },

  computed: {},

  methods: {}
})
</script>

<style lang="less" scoped></style>
