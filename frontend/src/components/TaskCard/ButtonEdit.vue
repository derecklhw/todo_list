<template>
  <!-- Button trigger modal -->
  <a class="btn btn-primary mx-2 col-auto" aria-label="Edit" @click="openModal">
    <i class="bi bi-pencil"></i>
  </a>

  <!-- Modal -->
  <div
    class="modal fade"
    id="editModal"
    tabindex="-1"
    aria-labelledby="editModalLabel"
    aria-hidden="true"
    ref="modalRef"
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
          <form class="needs-validation" novalidate ref="form">
            <div class="mb-3">
              <label for="task-title" class="col-form-label">Title: </label>
              <input
                type="text"
                class="form-control"
                id="task-title"
                v-model="modalTitle"
                required
              />
              <div class="invalid-feedback">Please provide a title for the task.</div>
            </div>
            <div class="mb-3">
              <label for="task-description" class="col-form-label">Description:</label>
              <textarea
                class="form-control"
                id="task-description"
                v-model="modalDescription"
                required
              ></textarea>
              <div class="invalid-feedback">Please provide a description for the task.</div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click="validateAndUpdateTask">
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTasksStore } from '../../stores/tasks'
import { ref, onMounted } from 'vue'
import { Modal } from 'bootstrap'

const tasksStore = useTasksStore()
const props = defineProps(['task'])

const modalTitle = ref(props.task.title)
const modalDescription = ref(props.task.description)
const modalRef = ref('')
const form = ref<InstanceType<typeof HTMLFormElement> | null>(null)

let modalInstance: any = null

onMounted(() => {
  modalInstance = new Modal(modalRef.value)
})

const openModal = () => {
  if (modalInstance) {
    modalInstance.show()
  }
}

const validateAndUpdateTask = () => {
  if (form.value && form.value.checkValidity()) {
    updateTask()
  } else {
    if (form.value) form.value.classList.add('was-validated')
  }
}

const updateTask = () => {
  tasksStore.updateTaskDetails({
    id: props.task.id,
    title: modalTitle.value,
    description: modalDescription.value
  })
  if (modalInstance) {
    modalInstance.hide()
  }
}

defineExpose({ openModal })
</script>
