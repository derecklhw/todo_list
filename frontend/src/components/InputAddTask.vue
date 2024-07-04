<template lang="">
  <div class="input-group mb-4">
    <input
      type="text"
      class="form-control"
      placeholder="Enter New task"
      aria-label="Enter new task"
      aria-describedby="button-add-new-task"
      v-model="newTask"
    />
    <button class="input-group-text" id="button-add-new-task" @click="addNewTask()">
      <i class="bi bi-plus-lg"></i>
    </button>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const newTask = ref('')
const addNewTask = () => {
  console.log('Add new task:', newTask.value)
  newTask.value = ''
}
</script>
<style lang=""></style>
