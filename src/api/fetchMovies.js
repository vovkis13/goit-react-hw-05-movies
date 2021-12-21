const axios = require('axios');
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'c7488cc8d311162ba5f5071cc3afab34';
const MEDIA_TYPE = 'movie';
const TIME_WINDOW = 'day';

let IMAGE_URL;
const axiosConfig = {
  params: {
    api_key: API_KEY,
  },
};

export async function fetchMovies(type = '', query = '') {
  let url = `${BASE_URL}/${type}/${MEDIA_TYPE}`;
  let config = axiosConfig;
  if (type === 'trending') url += `/${TIME_WINDOW}`;
  if (type === 'search') config = { params: { ...config.params, query } };
  try {
    const { data } = await axios.get(url, config);
    return data;
  } catch (e) {
    console.error(e);
  }
}

export async function fetchMovieById(id, type = '') {
  let url = `${BASE_URL}/configuration`;
  try {
    if (!IMAGE_URL) {
      const { data } = await axios.get(url, axiosConfig);
      IMAGE_URL = data.images.base_url;
    }
  } catch (e) {
    console.error(e);
  }

  url = `${BASE_URL}/${MEDIA_TYPE}/${id}`;
  if (type) url += `/${type}`;
  try {
    const { data } = await axios.get(url, axiosConfig);
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
