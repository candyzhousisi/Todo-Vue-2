<template>
  <!-- 主体 -->
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li
        v-for="item in list"
        :key="item.id"
        :class="{ completed: item.done, editing: checkId === item.id }"
        @dblclick="onDoubleClick(item.id, item.content)"
      >
        <div class="view">
          <input
            class="toggle"
            type="checkbox"
            :checked="item.done"
            @change="$emit('changeTodo', item.id)"
          />
          <label>{{ item.content }}</label>
          <button class="destroy" @click="$emit('deletTodo', item.id)"></button>
        </div>
        <input
          :ref="`input${item.id}`"
          class="edit"
          v-model="content"
          @blur="onblur"
          @keyup.enter="keyup"
        />
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import type { todolistType } from '../types'
export default Vue.extend({
  props: {
    list: {
      type: Array,
      default: () => [] as any[]
    }
  },
  data() {
    return {
      checkId: -1,
      content: ''
    }
  },

  created() {},

  computed: {},

  methods: {
    deletTodo(id: number) {
      console.log(id)
    },
    onDoubleClick(id: number, content: string) {
      this.checkId = id
      this.content = content
      this.$nextTick(() => {
        const input = this.$refs[`input${id}`] as [HTMLInputElement]
        input[0].focus()
      })
    },
    onblur() {
      this.$emit('updateContent', this.checkId, this.content)
      this.checkId = -1
    },
    keyup(e: any) {
      e.target.blur()
    }
  }
})
</script>

<style lang="less" scoped></style>
