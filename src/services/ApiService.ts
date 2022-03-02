import axios, { type AxiosInstance } from 'axios'

export class SWApiService {
  private static instance: SWApiService
  private readonly _axios: AxiosInstance

  private constructor() {
    this._axios = axios.create({
      baseURL: 'https://swapi.dev/api'
    })
  }

  public static of() {
    if (this.instance == null) this.instance = new SWApiService()
    return this.instance._axios
  }
}
