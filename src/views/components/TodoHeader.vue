<script setup lang="ts">
const emit = defineEmits(['onAddItem'])

const keydown = (e: any) => {
  e.target.blur()
}

const onBlur = (e: any) => {
  const value = e.target.value
  if (!value || !value.trim()) {
    e.target.value = ''
    return
  }
  emit('onAddItem', value.trim())
  e.target.focus()
  e.target.value = ''
}
</script>

<template>
  <header class="header">
    <h1>todos</h1>
    <input
      v-focus
      class="new-todo"
      placeholder="What needs to be done?"
      @blur="onBlur"
      @keydown.enter="keydown"
    />
  </header>
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
