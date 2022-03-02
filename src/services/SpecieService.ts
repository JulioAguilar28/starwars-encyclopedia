import { SWApiSpeciesService } from './ApiService'
import type { Specie } from '@/models/CharacterModel'
import type { AxiosResponse } from 'axios'
import { parseSpecie } from '@/models/ApiParsers'

export const getSpecieById = async (specieId: string): Promise<Specie> => {
  const response: AxiosResponse = await getSpecieByIdRequest(specieId)
  return parseSpecie(response.data)
}

const getSpecieByIdRequest = (specieId: string) => {
  return SWApiSpeciesService.of().get(`/${specieId}`)
}
