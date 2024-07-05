<template lang="">
  <!-- Button trigger modal -->
  <a
    class="btn btn-primary mx-2 col-auto"
    aria-label="Edit"
    data-bs-toggle="modal"
    data-bs-target="#editModal"
  >
    <i class="bi bi-pencil"></i>
  </a>
  <!-- Modal -->
  <div
    class="modal fade"
    id="editModal"
    tabindex="-1"
    aria-labelledby="editModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Task</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="task-title" class="col-form-label">Title: </label>
              <input type="text" class="form-control" id="task-title" v-model="modalTitle" />
            </div>
            <div class="mb-3">
              <label for="task-description" class="col-form-label">Description:</label>
              <textarea
                class="form-control"
                id="task-description"
                v-model="modalDescription"
              ></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button
            type="button"
            class="btn btn-primary"
            @click="updateTask()"
            data-bs-dismiss="modal"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useTasksStore } from '../../stores/tasks'
import { ref } from 'vue'

const tasksStore = useTasksStore()
const props = defineProps(['task'])
const modalTitle = ref(props.task.title)
const modalDescription = ref(props.task.description)

const updateTask = () => {
  tasksStore.updateTaskDetails({
    id: props.task.id,
    title: modalTitle.value,
    description: modalDescription.value
  })
}
</script>
<style lang=""></style>
