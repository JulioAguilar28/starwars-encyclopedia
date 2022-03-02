<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import { getCharacters } from '@/services/CharacterService'
import CharacterCardView from './CharacterCardView.vue'
import type { Character } from '@/models/CharacterModel'

interface CharactersListState {
  characters?: Array<Character>
}

const state: CharactersListState = reactive({
  characters: []
})

onMounted(async () => {
  state.characters = await getCharacters()
})
</script>

<template>
  <div class="character-list__container grid grid-flow-row gap-y-4 mt-4">
    <CharacterCardView
      v-for="character in state.characters"
      :key="character.name"
      :name="character.name"
      :planet="character.planet"
      :specie="character.specie"
      :gender="character.gender"
      :birth-year="character.birthYear"
    />
  </div>
</template>

<style scoped></style>
