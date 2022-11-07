<template>
  <section class="todoapp">
    <TodoHeader @addTodo="addTodo" />
    <TodoContent
      :list="list"
      @updateContent="updateTodo"
      @deletTodo="deletTodo"
      @changeTodo="changeTodo"
    />
    <TodoFooter v-if="todoList.length" :count="count" @onClear="onClear" />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import TodoContent from './components/TodoContent.vue'
import TodoFooter from './components/TodoFooter.vue'
import TodoHeader from './components/TodoHeader.vue'
// import Mock from 'mockjs'
import type { todolistType } from './types'

export default Vue.extend({
  name: 'Home',
  components: { TodoContent, TodoFooter, TodoHeader },
  data() {
    return {
      todoList: [
        { id: 1, content: '按摩', done: true },
        { id: 2, content: '吃饭', done: false },
        { id: 3, content: '做饭', done: true }
      ]
    }
  },
  created() {
    console.log(this.$route.name)
  },
  computed: {
    list() {
      const arr = this.todoList as todolistType[]
      switch (this.$route.name) {
        case 'Active':
          return arr.filter((item) => !item.done)
        case 'Completed':
          return arr.filter((item) => item.done)
        default:
          return arr
      }
    },

    count() {
      const arr = this.todoList as todolistType[]
      return arr.filter((item) => !item.done).length
    }
  },
  methods: {
    addTodo(content: string) {
      const obj: todolistType = {
        id: Date.now(),
        content,
        done: false
      }
      this.todoList.unshift(obj)
    },

    updateTodo(id: number, content: string) {
      console.log(content, id)
      this.todoList.forEach((item) => {
        if (item.id == id) {
          item.content = content
        }
      })
    },

    deletTodo(id: number) {
      this.todoList = this.todoList.filter((item) => item.id !== id)
    },

    changeTodo(id: number) {
      this.todoList.forEach((item) => {
        if (item.id === id) {
          item.done = !item.done
        }
      })
    },

    onClear() {
      this.todoList = this.todoList.filter((item) => !item.done)
    }
  }
})
</script>

<style lang="less" scoped></style>
