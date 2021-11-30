import axios from 'axios';

const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = 'api_key=29f6570f2c4242fab2679765257fc6e3'

export const getPopularMovies = async () => {
    const resp = await axios.get(
      `${apiUrl}/movie/popular?${apiKey}`
    );
    return resp.data.results;
  };


export const getUpcomingMovies = async () => {
const resp = await axios.get(
    `${apiUrl}/movie/upcoming?${apiKey}`
);
return resp.data.results;
};


export const getPopularTv = async () => {
const resp = await axios.get(
    `${apiUrl}/tv/popular?${apiKey}`
);
return resp.data.results;
};