<script setup lang="ts">
import { ref } from 'vue'

type TodoType = {
  id: number
  content: string
  done: boolean
}

withDefaults(
  defineProps<{
    list: TodoType[]
  }>(),
  {}
)

const checkedId = ref(-1)

const inputValue = ref('')

const emit = defineEmits(['deleteTodo', 'changeCheckbox', 'onBlur'])

const dblclick = (id: number, content: string) => {
  checkedId.value = id
  inputValue.value = content
}

const onBlur = () => {
  emit('onBlur', checkedId.value, inputValue.value)
  checkedId.value = -1
}
const changeContent = (e: any) => {
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
        :class="{ completed: item.done, editing: checkedId === item.id }"
      >
        <div class="view">
          <input
            class="toggle"
            type="checkbox"
            :checked="item.done"
            @change="emit('changeCheckbox', item.id)"
          />
          <label @dblclick="dblclick(item.id, item.content)">{{ item.content }}</label>
          <button class="destroy" @click="emit('deleteTodo', item.id)"></button>
        </div>
        <input
          class="edit"
          type="text"
          v-focus
          v-model="inputValue"
          @blur="onBlur"
          @keyup.enter="changeContent"
        />
      </li>

      <!-- <li>
        <div class="view">
          <input class="toggle" type="checkbox" />
          <label>Buy a unicorn</label>
          <button class="destroy"></button>
        </div>
        <input class="edit" value="Rule the web" />
      </li> -->
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
