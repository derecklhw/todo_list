<template lang="">
  <div class="input-group mb-4">
    <input
      type="text"
      class="form-control"
      placeholder="Enter New task"
      aria-label="Enter new task"
      aria-describedby="button-add-new-task"
      v-model="newTask"
      @keyup.enter="addNewTask"
    />
    <button class="input-group-text" id="button-add-new-task" @click="addNewTask()">
      <i class="bi bi-plus-lg"></i>
    </button>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useTasksStore } from '../stores/tasks'

const tasksStore = useTasksStore()
const newTask = ref('')

const addNewTask = () => {
  tasksStore.addTask(newTask.value)
  newTask.value = ''
}
</script>
<style lang=""></style>
