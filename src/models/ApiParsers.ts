import type { Character, Specie, Planet } from './CharacterModel'

export const parseCharacter = (json: any): Character => ({
  name: json.name,
  birthYear: json.birth_year,
  gender: json.gender
  // specie: parseSpecie(json),
  // homeworld: parsePlanet(json)
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
