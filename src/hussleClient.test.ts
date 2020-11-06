import {ClientOptions, HussleClient} from './hussleClient';
import axios from 'axios';

jest.mock('axios');

const opt: ClientOptions = {
  baseUrl: 'test-base-url',
};

describe('hussleClient', () => {
  test('should get all movies', async () => {
    // @ts-ignore
    axios.get.mockImplementation(() => ({
      data: [
        {},
      ],
    }));

    const client = new HussleClient(opt);
    const movies = await client.getAllMovies();

    expect(movies.length).toBe(1);
  });

  test('should get movie name', async () => {
    // @ts-ignore
    axios.get.mockImplementation(() => ({
      data: [
        {
          name: 'test-movie-name',
        },
      ],
    }));

    const client = new HussleClient(opt);
    const movies = await client.getAllMovies();

    expect(movies[0].name).toBe('test-movie-name');
  });

  test('should get movie title', async () => {
    // @ts-ignore
    axios.get.mockImplementation(() => ({
      data: [
        {
          title: 'test-movie-name',
        },
      ],
    }));

    const client = new HussleClient(opt);
    const movies = await client.getAllMovies();

    expect(movies[0].title).toBe('test-movie-name');
  });

  test('should get movie from url', async () => {
    const client = new HussleClient(opt);
    await client.getAllMovies();
    expect(axios.get).toHaveBeenCalledWith('test-base-url');
  });
});
