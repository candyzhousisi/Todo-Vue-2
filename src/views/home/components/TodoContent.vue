<template>
  <!-- 主体 -->
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <!-- These are here just to show the structure of the list items -->
      <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
      <li class="completed editing">
        <div class="view">
          <input class="toggle" type="checkbox" />
          <label>Buy a unicorn</label>
          <button class="destroy"></button>
        </div>
        <input class="edit" type="text" />
      </li>
      <li>
        <div class="view">
          <input class="toggle" type="checkbox" />
          <label>Buy a unicorn</label>
          <button class="destroy"></button>
        </div>
        <input class="edit" value="Rule the web" />
      </li>
    </ul>
  </section>
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
