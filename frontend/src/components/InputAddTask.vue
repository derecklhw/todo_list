<template>
  <form @submit.prevent="addNewTask" class="mb-4" novalidate>
    <div class="input-group has-validation">
      <input
        type="text"
        class="form-control"
        :class="{ 'is-invalid': isInvalid }"
        placeholder="Enter New task"
        aria-label="Enter new task"
        aria-describedby="button-add-new-task"
        v-model.trim="newTask"
        required
      />
      <button class="input-group-text" id="button-add-new-task" type="submit">
        <i class="bi bi-plus-lg"></i>
      </button>
      <div class="invalid-feedback">Please enter a task before adding.</div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTasksStore } from '../stores/tasks'

const tasksStore = useTasksStore()
const emit = defineEmits(['triggerAlert'])

const newTask = ref('')
const isInvalid = ref(false)

const addNewTask = () => {
  if (newTask.value.trim() === '') {
    isInvalid.value = true
    return
  }

  tasksStore.addTask(newTask.value)
  newTask.value = ''
  isInvalid.value = false
  emit('triggerAlert')
}
</script>

<style scoped>
.input-group .form-control {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.input-group .input-group-text {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
</style>
