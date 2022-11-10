<script setup lang="ts">
import { ref, nextTick } from 'vue'

type TodoType = {
  id: number
  content: string
  done: boolean
}

const checkId = ref(-1)
const inputValue = ref('')

withDefaults(
  defineProps<{
    list: TodoType[]
  }>(),
  {}
)

const emit = defineEmits(['deleteTodo', 'changeTodo', 'onBlur'])

const dblclick = (id: number, content: string) => {
  checkId.value = id
  inputValue.value = content
}

const onBlur = () => {
  emit('onBlur', checkId.value, inputValue.value)
  checkId.value = -1
}

const keydown = (e: any) => {
  e.target.blur()
}
</script>

<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li
        v-for="item in list"
        :key="item.id"
        :class="{ completed: item.done, editing: checkId === item.id }"
      >
        <div class="view">
          <input
            class="toggle"
            type="checkbox"
            :checked="item.done"
            @change="emit('changeTodo', item.id)"
          />
          <label @dblclick="dblclick(item.id, item.content)">{{ item.content }}</label>
          <button class="destroy" @click="emit('deleteTodo', item.id)"></button>
        </div>
        <input
          v-focus
          class="edit"
          type="text"
          v-model="inputValue"
          @blur="onBlur"
          @keydown.enter="keydown"
        />
      </li>
    </ul>
  </section>
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
