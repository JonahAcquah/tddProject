import axios from 'axios';

import {ClientOptions} from '../hussleClient';

export interface MovieDto {
    title: string
    name: string
}

/**
* Add two numbers.
*/
export class Movie {
  /**
* Add two numbers.
*/
  constructor(private readonly options: ClientOptions) {
  }
  /**
* Add two numbers.
*/
  async GetMovies(): Promise<MovieDto[]> {
    const url = this.options.baseUrl;
    const response = await axios.get<MovieDto[]>(url);
    return response.data;
  }
}

