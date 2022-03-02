<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import TheInput from '@/components/TheInput.vue'
import CharactersListController from '@/components/CharactersListController.vue'
</script>

<template>
  <div class="characters-page__container">
    <TheHeader class="mb-4" />
    <TheInput />
    <CharactersListController />
  </div>
</template>

<style scoped></style>
