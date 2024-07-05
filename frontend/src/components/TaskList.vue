<template lang="">
  <div class="overflow-auto h-75" v-if="sortedTasks.length > 0">
    <TaskCard v-for="task in sortedTasks" :task="task" :key="task.id" />
  </div>
  <div class="text-start" v-else>
    <h1 class="display-6">No tasks found</h1>
  </div>
</template>
<script setup>
import TaskCard from './TaskCard/Main.vue'
import { useTasksStore } from '../stores/tasks'
import { computed } from 'vue'

const tasksStore = useTasksStore()

const sortedTasks = computed(() =>
  [...tasksStore.tasks].sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1))
)
</script>
<style lang=""></style>
