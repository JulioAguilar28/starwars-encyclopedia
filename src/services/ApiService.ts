import axios, { type AxiosInstance } from 'axios'

export class SWApiPeopleService {
  private static instance: SWApiPeopleService
  private readonly _axios: AxiosInstance

  private constructor() {
    this._axios = axios.create({
      baseURL: 'https://swapi.dev/api/people'
    })
  }

  public static of() {
    if (this.instance == null) this.instance = new SWApiPeopleService()
    return this.instance._axios
  }
}

export class SWApiSpeciesService {
  private static instance: SWApiSpeciesService
  private readonly _axios: AxiosInstance

  private constructor() {
    this._axios = axios.create({
      baseURL: 'https://swapi.dev/api/species'
    })
  }

  public static of() {
    if (this.instance == null) this.instance = new SWApiSpeciesService()
    return this.instance._axios
  }
}

export class SWApiPlanetsService {
  private static instance: SWApiPlanetsService
  private readonly _axios: AxiosInstance

  private constructor() {
    this._axios = axios.create({
      baseURL: 'https://swapi.dev/api/planets'
    })
  }

  public static of() {
    if (this.instance == null) this.instance = new SWApiPlanetsService()
    return this.instance._axios
  }
}
