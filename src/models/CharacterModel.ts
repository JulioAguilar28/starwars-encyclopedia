export interface Character {
  name: string
  birthYear: string
  gender: string
  specie: Specie
  planet: Planet
}

export interface Specie {
  name: string
  languaje: string
}

export interface Planet {
  name: string
  population: string
  gravity: string
}
