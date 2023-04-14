<script setup lang="ts">
import { ref } from 'vue'

const search = ref<string>('')

const emit = defineEmits<{
  (e: 'oninput', value: string): void
}>()

const inputHandler = () => {
  emit('oninput', search.value)
}
</script>

<template>
  <label class="input relative">
    <img src="@/assets/search.svg" alt="search" width="32" height="32" />
    <input
      v-model="search"
      type="text"
      class="py-5 pl-14 w-full border rounded border-purpleLight"
      placeholder="Search for a character"
      @input="inputHandler"
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
