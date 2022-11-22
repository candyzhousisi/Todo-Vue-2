<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import db from './db'

import AboutView from './AboutView.vue'

const route = useRoute()

const page = computed(() => {
  return db(route.params.id as string)
})
</script>

<template>
  <section>
    <h1>{{ '\u989c\u8272\u5206\u7c7b' }}</h1>
    <h1>{{ page.title }}</h1>
    <ul>
      <li v-for="item in page.data">
        <AboutView :item="item" />
      </li>
    </ul>
  </section>
</template>

<style></style>
