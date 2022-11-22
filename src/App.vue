<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'

const list = [
  {
    id: '1',
    title: '说说你对 Vue 的理解'
  },
  {
    id: '2',
    title: 'Vue 和 React 对比'
  },
  {
    id: '3',
    title: '说说你对 SPA 的理解'
  },
  {
    id: '4',
    title: '说说你对 VUE 生命周期的理解'
  }
]
</script>

<template>
  <main>
    <ul>
      <li v-for="item in list" :key="item.id">
        <RouterLink :to="item.id">
          <span>{{ item.title }}</span>
        </RouterLink>
      </li>
    </ul>
    <RouterView />
  </main>
</template>

<style>
body {
  margin: 0;
  box-sizing: border-box;
}
</style>

<style scoped>
main {
  display: flex;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
}

main > ul {
  width: 200px;
  list-style: none;
  padding: 0;
  overflow-y: auto;
  overflow-x: hidden;
}

main > ul > li {
  height: 40px;
  line-height: 40px;
  /* border-bottom: 1px solid #000; */
  padding-left: 10px;
  position: relative;
}

main > ul > li > a {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

main > section {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  margin-left: 10px;
  padding: 20px 0;
}
</style>
