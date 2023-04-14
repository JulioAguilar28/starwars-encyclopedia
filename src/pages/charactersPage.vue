<script setup lang="ts">
import { ref } from 'vue'
import TheHeader from '@/components/TheHeader.vue'
import TheInput from '@/components/TheInput.vue'
import CharactersListController from '@/components/CharactersListController.vue'

const search = ref<string>('')

const inputHandler = (value: string) => {
  search.value = value
}
</script>

<template>
  <div class="characters-page__container">
    <TheHeader class="mb-4" />
    <TheInput @oninput="inputHandler" />
    <CharactersListController :search="search" />
  </div>
</template>

<style scoped></style>
