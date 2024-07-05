<template lang="">
  <a
    class="btn btn-danger mx-2 col-auto"
    aria-label="Delete"
    @click="tasksStore.deleteTask(taskId)"
  >
    <i class="bi bi-trash3"></i>
  </a>
</template>
<script setup lang="ts">
import { useTasksStore } from '../../stores/tasks'

const tasksStore = useTasksStore()
const props = defineProps(['taskId'])
</script>
<style lang=""></style>
