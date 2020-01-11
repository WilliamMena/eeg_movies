import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';
import Movie from './components/movie';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'https://homework.eegapis.com';


const responseBody = res => res.body;

const token = process.env.REACT_APP_API_KEY

// Token would be probably placed here since it's passed into the end of URL. Not part of the request.

const requests = {
  del: url =>
    superagent.del(`${API_ROOT}${url}?api_key=${token}`).then(responseBody),
  get: url =>
    superagent.get(`${API_ROOT}${url}?api_key=${token}`).then(responseBody),
  put: (url, body) =>
    superagent.put(`${API_ROOT}${url}?api_key=${token}`, body).then(responseBody),
  post: (url, body) =>
    superagent.post(`${API_ROOT}${url}?api_key=${token}`, body).then(responseBody)
};


const Movies = {
    all: () =>
        requests.get(`/movies`),
    oneMovie: (movie_id) =>
        requests.get(`/movies${movie_id}`),
    create: (movie) =>
        requests.post(`/movies`, { movie }),
    edit: (movie_id, movie) =>
        requests.put(`/movies${movie_id}`, {movie} ),
    del: (movie_id) =>
        requests.del(`/movies/${movie_id}`)
};


export default Movie;