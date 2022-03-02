import { SWApiPeopleService } from './ApiService'
import { getSpecieById } from './SpecieService'
import type { AxiosResponse } from 'axios'
import type { Character } from '@/models/CharacterModel'
import { parseCharacter } from '@/models/ApiParsers'
import { getIdFromUrl } from '@/utils/CharactersUtils'
import { getPlanetById } from './PlanetService'

export const getCharacters = async (): Promise<Character[]> => {
  const response: AxiosResponse = await getCharactersRequest()

  // This will wait for all promises then collect the results in an Array
  return await Promise.all(
    response.data.results.map(async (character: any) => {
      const specieUrl = character.species[0]
      let specieId = '1'

      if (specieUrl) specieId = getIdFromUrl(specieUrl, /species(?=)/)

      const specie = await getSpecieById(specieId)
      const planet = await getPlanetById(getIdFromUrl(character.homeworld, /planet(?=)/))

      return parseCharacter(character, specie, planet)
    })
  )
}

const getCharactersRequest = (): Promise<AxiosResponse> => {
  return SWApiPeopleService.of().get('')
}
