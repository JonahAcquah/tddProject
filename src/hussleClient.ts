import {Movie} from './apis/get.movies';

export interface ClientOptions {
    baseUrl: string
}

/**
* Add two numbers.
*/
export class HussleClient {
  /**
 * Add two numbers.
 */
  constructor(private readonly options: ClientOptions) {}
  /**
 * Add two numbers.
 * @return {Promise<MovieDto[]>} The sum of the two numbers.
 */
  // eslint-disable-next-line no-invalid-this
  getAllMovies = new Movie(this.options).GetMovies
}
