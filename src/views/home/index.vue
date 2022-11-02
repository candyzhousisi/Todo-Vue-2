im

<template>
  <section class="todoapp">
    <TodoHeader />
    <TodoContent
      :list="todoList"
      @updateContent="updateTodo"
      @deletTodo="deletTodo"
      @changeTodo="changeTodo"
    />
    <TodoFooter />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import TodoContent from './components/TodoContent.vue'
import TodoFooter from './components/TodoFooter.vue'
import TodoHeader from './components/TodoHeader.vue'
// import Mock from 'mockjs'

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
  created() {},
  computed: {},
  methods: {
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
    }
  }
})
</script>

<style lang="less" scoped></style>
