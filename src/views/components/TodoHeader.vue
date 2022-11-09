<script setup lang="ts">
const onBlur = (e: any) => {
  if (!e.target.value || !e.target.value.trim()) {
    e.target.value = ''
    return
  }
  console.log(e.target.value)
  emit('onAddItem', e.target.value.trim())
  e.target.focus()
  e.target.value = ''
}

const addContent = (e: any) => {
  e.target.blur()
}

const emit = defineEmits(['onAddItem'])
</script>

<template>
  <header class="header">
    <h1>todos</h1>
    <input
      v-focus
      class="new-todo"
      placeholder="What needs to be done?"
      autofocus
      @blur="onBlur"
      @keyup.enter="addContent"
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
