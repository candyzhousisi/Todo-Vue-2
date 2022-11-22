<script lang="ts">
export default {
  name: 'ComItem'
}
</script>

<script lang="ts" setup>
import type { Obj } from './db'

defineProps<{
  item: Obj
}>()
</script>

<template>
  <h3>{{ item.title }}</h3>
  <ul>
    <template v-if="item.list && item.list.length">
      <li v-for="v in item.list">
        <span>{{ v }}</span>
      </li>
    </template>

    <template v-if="item.children && item.children.length">
      <li v-for="v in item.children">
        <ComItem :item="v" />
      </li>
    </template>
  </ul>
</template>
