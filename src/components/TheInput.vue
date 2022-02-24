<script setup lang="ts"></script>

<template>
  <label class="input relative">
    <img src="@/assets/search.svg" alt="search" width="32" height="32" />
    <input
      type="text"
      class="py-5 pl-14 w-full border rounded border-purpleLight"
      placeholder="Search Characters"
    />
  </label>
</template>

<style scoped>
.input > img {
  position: absolute;
  top: -4px;
  left: 8px;
  z-index: 1;
}
</style>
