<template lang="">
  <div class="container vh-100">
    <Header />
    <Tabs />
    <InputAddTask @triggerAlert="triggerAlert" />
    <TaskList />
  </div>
  <Alert ref="alert" />
</template>

<script setup lang="ts">
import Header from './Header.vue'
import Tabs from './Tabs.vue'
import InputAddTask from './InputAddTask.vue'
import TaskList from './TaskList.vue'
import Alert from './Alert.vue'

import { useTasksStore } from '../stores/tasks'
import { onMounted, ref } from 'vue'

const tasksStore = useTasksStore()
const alert = ref(null)

const triggerAlert = () => {
  alert.value.triggerAlert()
}

onMounted(() => {
  tasksStore.fetchTasks()
})
</script>
<style></style>
