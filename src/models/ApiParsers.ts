import type { Character, Specie, Planet } from './CharacterModel'

export const parseCharacter = (json: any, specie: Specie, planet: Planet): Character => ({
  name: json.name,
  birthYear: json.birth_year,
  gender: json.gender,
  specie,
  planet
})

export const parseSpecie = (json: any): Specie => ({
  name: json.name,
  languaje: json.languaje
})

export const parsePlanet = (json: any): Planet => ({
  name: json.name,
  population: json.population,
  gravity: json.gravity
})
