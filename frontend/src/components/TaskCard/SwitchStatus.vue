<template lang="">
  <div class="form-check form-switch col-auto mx-2">
    <input
      class="form-check-input"
      type="checkbox"
      role="switch"
      id="flexSwitchCheckDefault"
      aria-label="Toggle feature"
    />
  </div>
</template>
<script setup></script>
<style scoped>
.form-switch .form-check-input {
  width: 3rem;
  height: 2rem;
  border-radius: 10%;
  border-color: #00000040;

  background-color: #ff9501;
  background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba(255,255,255,1.0)'/></svg>");
  background-size: 75% 75%;
}
.form-switch .form-check-input:focus {
  outline: 0;
  box-shadow: 0 0 0 0 #00000000;
}
.form-switch .form-check-input:checked {
  background-color: #30d158;
  background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'><path stroke='%23fff' stroke-width='1.5' fill='none' d='M1,4 L3,6 L7,2'/></svg>");
  background-size: 75% 75%;
}
.form-switch .form-check-input:hover {
  cursor: pointer;
}
</style>
