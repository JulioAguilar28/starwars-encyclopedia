import { parsePlanet } from '@/models/ApiParsers'
import type { Planet } from '@/models/CharacterModel'
import type { AxiosResponse } from 'axios'
import { SWApiPlanetsService } from './ApiService'

export const getPlanetById = async (planetId: string): Promise<Planet> => {
  const response: AxiosResponse = await getPlanetByIdRequest(planetId)
  return parsePlanet(response.data)
}

const getPlanetByIdRequest = (planetId: string) => {
  return SWApiPlanetsService.of().get(`/${planetId}`)
}
