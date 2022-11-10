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

const todoList = ref<TodoType[]>([
  {
    id: 1,
    done: false,
    content: '吃饭'
  },
  {
    id: 3,
    done: true,
    content: '睡觉'
  },
  {
    id: 5,
    done: false,
    content: '吃饭'
  }
])

const renderList = computed(() => {
  switch (route.name) {
    case 'Active':
      return todoList.value.filter((item) => !item.done)
    case 'Completed':
      return todoList.value.filter((item) => item.done)
    default:
      return todoList.value
  }
})

const count = computed(() => {
  return todoList.value.filter((item) => !item.done).length
})

const deleteTodo = (id: number) => {
  todoList.value = todoList.value.filter((item) => item.id !== id)
}

const changeTodo = (id: number) => {
  todoList.value.forEach((item) => {
    if (item.id === id) {
      item.done = !item.done
    }
  })
}

const onBlur = (id: number, value: string) => {
  todoList.value.forEach((item) => {
    if (item.id === id) {
      item.content = value
    }
  })
}

const addItem = (content: string) => {
  const obj: TodoType = {
    id: Date.now(),
    content,
    done: false
  }
  todoList.value.unshift(obj)
}

const onClear = () => {
  todoList.value = todoList.value.filter((item) => !item.done)
}
</script>

<template>
  <section class="todoapp">
    <!-- 头部 -->
    <TodoHeader @on-add-item="addItem" />
    <!-- 主体 -->
    <TodoContent
      :list="renderList"
      @delete-todo="deleteTodo"
      @change-todo="changeTodo"
      @on-blur="onBlur"
    />
    <!-- 底部 -->
    <TodoFooter :count="count" @on-clear="onClear" />
  </section>
</template>
