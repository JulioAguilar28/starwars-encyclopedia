import { SWApiService } from './ApiService'
import type { AxiosResponse } from 'axios'
import type { Character } from '@/models/CharacterModel'
import { parseCharacter } from '@/models/ApiParsers'

export const getCharacters = async (): Promise<Character[]> => {
  const response: AxiosResponse = await getCharactersRequest()
  return response.data.results.map((character: any) => parseCharacter(character))
}

const getCharactersRequest = (): Promise<AxiosResponse> => {
  return SWApiService.of().get('/people')
}
