<template lang="">
  <div
    v-if="showAlert"
    class="alert alert-success alert-top-right"
    style="position: fixed"
    role="alert"
  >
    A new task added!
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const showAlert = ref(false)

const triggerAlert = () => {
  showAlert.value = true
  setTimeout(() => {
    showAlert.value = false
  }, 1000)
}

defineExpose({ triggerAlert })
</script>
<style>
.alert-top-right {
  top: 20px;
  right: 20px;
  z-index: 1050;
}
</style>
