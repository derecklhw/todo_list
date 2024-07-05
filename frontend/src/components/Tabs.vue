<template lang="">
  <ul class="nav mb-2">
    <li class="nav-item">
      <a class="nav-link btn" aria-current="page"
        >Pending <span class="badge text-bg-warning">{{ pendingTasks.length }}</span>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link btn"
        >Completed <span class="badge text-bg-success">{{ completedTasks.length }}</span>
      </a>
    </li>
  </ul>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useTasksStore } from '../stores/tasks'

const tasksStore = useTasksStore()

const pendingTasks = computed(() => tasksStore.tasks.filter((task) => !task.completed))
const completedTasks = computed(() => tasksStore.tasks.filter((task) => task.completed))
</script>
<style lang=""></style>
