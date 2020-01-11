import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'https://homework.eegapis.com';

// const encode = encodeURIComponent;
const responseBody = res => res.body;

let token = process.env.REACT_APP_API_KEY

// const tokenPlugin = req => {
//   if (token) {
//     req.set('authorization', `Token ${token}`);
//   }
// }

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


const omitSlug = movie => Object.assign({}, movie, { slug: undefined })
const Movies = {
    all: () =>
        requests.get(`/movies`),
    oneMovie: (movie_id) =>
        requests.get(`/movies${movie_id}`),
    create: (movie) =>
        requests.post(`/movies`, { movie }),
    edit: (movie_id, movie) =>
        requests.put(`/movies${movie_id}`, { movie: omitSlug(movie) }),
    del: (movie_id) =>
        requests.del(`/movies/${movie_id}`)
};


export default {
  Movies,
  setToken: _token => { token = _token; }
};