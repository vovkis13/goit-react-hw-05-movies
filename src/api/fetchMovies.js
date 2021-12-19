const axios = require('axios');
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'c7488cc8d311162ba5f5071cc3afab34';
const MEDIA_TYPE = 'movie';
const TIME_WINDOW = 'day';

export async function fetchConfig() {
  const url = `${BASE_URL}/configuration`;
  const config = {
    params: {
      api_key: API_KEY,
    },
  };

  try {
    const res = await axios.get(url, config);
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchTrending() {
  const url = `${BASE_URL}/trending/${MEDIA_TYPE}/${TIME_WINDOW}`;
  const config = {
    params: {
      api_key: API_KEY,
    },
  };

  try {
    const res = await axios.get(url, config);
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMovies(query) {
  const url = `${BASE_URL}/search/movie`;
  const config = {
    params: {
      api_key: API_KEY,
      query,
    },
  };

  try {
    const res = await axios.get(url, config);
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMovieById(id) {
  let conf = null;
  try {
    conf = await fetchConfig();
    console.log(conf);
  } catch (error) {
    console.error(error);
  }
  const url = `${BASE_URL}/movie/${id}`;
  const config = {
    params: {
      api_key: API_KEY,
    },
  };

  try {
    let res = await axios.get(url, config);
    res.data.poster_path =
      conf.images.base_url + '/w300' + res.data.poster_path;
    return res.data;
  } catch (error) {
    console.error(error);
  }
}
