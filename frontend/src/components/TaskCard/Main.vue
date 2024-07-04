<template lang="">
  <div class="card w-100" style="background-color: var(--bs-tertiary-bg)">
    <div class="card-body">
      <h5 class="card-title mb-3"><strong>Card title</strong></h5>
      <div class="row">
        <p class="card-text col-md-9 text-wrap">
          With supporting text below as a natural lead-in to additional content. With supporting
          text below as a natural lead-in to additional content. With supporting text below as a
          natural lead-in to additional content.s With supporting text below as a natural lead-in to
          additional content.s a natural lead-in to additional content. With supporting text below
          as a natural lead-in to additional content.s With supporting text below as a natural
          lead-in to additional content.s a natural lead-in to additional content. With supporting
          text below as a natural lead-in to additional content.s With supporting text below as a
          natural lead-in to additional content.
        </p>
        <div class="col-md-3">
          <div class="row justify-content-start justify-content-md-end align-items-center">
            <ButtonDelete />
            <ButtonEdit />
            <SwitchStatus />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import ButtonDelete from './ButtonDelete.vue'
import ButtonEdit from './ButtonEdit.vue'
import SwitchStatus from './SwitchStatus.vue'
</script>
<style scoped>
.card-text {
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Number of lines to show */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
