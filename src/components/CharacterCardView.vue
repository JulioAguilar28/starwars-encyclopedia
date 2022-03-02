<script setup lang="ts">
import type { Planet, Specie } from '@/models/CharacterModel'

interface CharacterCardProps {
  name: string
  planet: Planet
  gender: string
  birthYear: string
  specie: Specie
}

const props = defineProps<CharacterCardProps>()
</script>

<template>
  <div class="w-80 h-44 bg-purpleLightest p-4">
    <h2 class="text__header-2">{{ props.name }}</h2>
    <p class="text__content-small mb-4">{{ props.planet.name }}</p>
    <div class="character-info flex flex-col gap-y-2 gap-x-1">
      <span class="text__content-small text-purpleMuted"
        >Gender: <i>{{ props.gender }}</i></span
      >
      <span class="text__content-small text-purpleMuted"
        >Specie: <i>{{ props.specie.name }}</i></span
      >
      <span class="text__content-small text-purpleMuted"
        >Birth year: <i>{{ props.birthYear }}</i></span
      >
    </div>
  </div>
</template>

<style scoped></style>
