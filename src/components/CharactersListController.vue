<script setup lang="ts">
import { onMounted } from 'vue'
import { getCharacters } from '@/services/CharacterService'

onMounted(async () => {
  const characters = await getCharacters()
  console.log(characters)
})
</script>

<template>
  <div></div>
</template>

<style scoped></style>
