<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

import TodoHeader from './components/TodoHeader.vue'
import TodoContent from './components/TodoContent.vue'
import TodoFooter from './components/TodoFooter.vue'

const route = useRoute()
type TodoType = {
  id: number
  content: string
  done: boolean
}
const todolist = ref<TodoType[]>([
  { id: 1, content: '学习vue', done: true },
  { id: 2, content: '学习React', done: false },
  { id: 3, content: '学习', done: true }
])

const renderList = computed(() => {
  switch (route.name) {
    case 'Active':
      return todolist.value.filter((item) => !item.done)
    case 'Completed':
      return todolist.value.filter((item) => item.done)
    default:
      return todolist.value
  }
})

const deleteTodo = (id: number) => {
  todolist.value = todolist.value.filter((item) => item.id !== id)
}

const changeCheckbox = (id: number) => {
  console.log('33', id)

  todolist.value.forEach((item) => {
    if (item.id === id) {
      item.done = !item.done
    }
  })
}

const onBlur = (id: number, content: string) => {
  todolist.value.forEach((item) => {
    if (item.id === id) {
      item.content = content
    }
  })
}

const onAddItem = (content: string) => {
  const obj = {
    id: Date.now(),
    content,
    done: false
  }

  console.log(content)
  todolist.value.unshift(obj)
}

const onClear = () => {
  todolist.value = todolist.value.filter((item) => !item.done)
}

const count = computed(() => {
  return todolist.value.filter((item) => !item.done).length
})
</script>

<template>
  <section class="todoapp">
    <!-- 头部 -->
    <TodoHeader @on-add-item="onAddItem" />
    <!-- 主体 -->
    <TodoContent
      :list="renderList"
      @delete-todo="deleteTodo"
      @change-checkbox="changeCheckbox"
      @on-blur="onBlur"
    />
    <!-- 底部 -->
    <TodoFooter @onClear="onClear" :count="count" />
  </section>
</template>
