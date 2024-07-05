<template lang="">
  <div class="container vh-100">
    <Header />
    <Tabs />
    <InputAddTask />
    <TaskList />
  </div>
</template>
<script setup lang="ts">
import Header from './Header.vue'
import Tabs from './Tabs.vue'
import InputAddTask from './InputAddTask.vue'
import TaskList from './TaskList.vue'

import { useTasksStore } from '../stores/tasks'
import { onMounted } from 'vue'

const tasksStore = useTasksStore()

onMounted(() => {
  tasksStore.fetchTasks()
})
</script>
<style></style>
