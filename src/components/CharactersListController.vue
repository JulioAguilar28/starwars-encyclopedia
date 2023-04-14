<script setup lang="ts">
import { reactive, onMounted, defineProps, withDefaults, watch } from 'vue'
import { getCharacters } from '@/services/CharacterService'
import CharacterCardView from './CharacterCardView.vue'
import type { Character } from '@/models/CharacterModel'

interface CharacterListProps {
  search?: string
}

interface CharactersListState {
  characters?: Array<Character>
}

const props = withDefaults(defineProps<CharacterListProps>(), {
  search: ''
})

const state: CharactersListState = reactive({
  characters: []
})

const getCharactersHandler = async (search?: string) => {
  const request = search ? getCharacters(search) : getCharacters()
  state.characters = await request
}

onMounted(async () => {
  getCharactersHandler()
})

watch(
  () => props.search,
  (search) => {
    if (search.length > 1) getCharactersHandler(search)
    else getCharactersHandler()
  }
)
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
