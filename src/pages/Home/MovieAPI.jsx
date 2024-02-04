// MovieAPI.jsx
import axios from 'axios';

const API_KEY = '168771c12a88fe70aa8092a83d7f6abf'; // Replace with your TMDb API key
const API_URL = 'https://api.themoviedb.org/3';

export const fetchUpcomingMovies = (page) => {
  return axios.get(`${API_URL}/movie/upcoming`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      page: page, // Use the provided page parameter
    }
  });
};

export const fetchPopularMovies = (page) => {
  return axios.get(`${API_URL}/movie/popular`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      page: page, // Use the provided page parameter
    }
  });
};

export const fetchLatestMovies = (page) => {
  return axios.get(`${API_URL}/trending/movie/day`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      page: page, // Use the provided page parameter
    }
  });
};

export const fetchBeingWatchedMovies = (page) => {
  return axios.get(`${API_URL}/movie/top_rated`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      page: page, // Use the provided page parameter
    }
  });
};
//