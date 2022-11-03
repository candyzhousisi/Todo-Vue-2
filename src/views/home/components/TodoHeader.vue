<template>
  <header class="header">
    <h1>todos</h1>
    <input
      class="new-todo"
      placeholder="What needs to be done?"
      autofocus
      v-model="value"
      @blur="onBlur"
      @keydown.enter="keyDown"
    />
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  components: {},

  data() {
    return {
      value: ''
    }
  },

  created() {},

  computed: {},

  methods: {
    onBlur(e: any) {
      if (this.value) {
        this.$emit('addTodo', this.value)
      }
      this.value = ''
      e.target.focus()
    },
    keyDown(e: any) {
      e.target.blur()
    }
  }
})
</script>

<style lang="less" scoped></style>
