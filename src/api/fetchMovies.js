const axios = require('axios');

let IMAGE_URL;

const getMovies = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'c7488cc8d311162ba5f5071cc3afab34',
  },
});

export async function fetchMovies(type = 'trending', query = '') {
  let url = `/${type}/movie`;
  let params;
  if (type === 'trending') url += `/day`;
  if (type === 'search') params = { query };
  try {
    const { data } = await getMovies(url, { params });
    return data;
  } catch (e) {
    console.error(e);
  }
}

export async function fetchMovieById(id, type = '') {
  let url = `/configuration`;
  try {
    if (!IMAGE_URL) {
      const { data } = await getMovies(url);
      IMAGE_URL = data.images.base_url;
    }
  } catch (e) {
    console.error(e);
  }

  url = `/movie/${id}`;
  if (type) url += `/${type}`;
  try {
    const { data } = await getMovies(url);
    if (!type) data.poster_path = IMAGE_URL + '/w300' + data.poster_path;
    if (type === 'credits') {
      return data.cast.map(actor => ({
        ...actor,
        profile_path: IMAGE_URL + 'w200' + actor.profile_path,
      }));
    }
    return data;
  } catch (e) {
    console.error(e);
  }
}
