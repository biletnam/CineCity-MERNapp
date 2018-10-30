import axios from 'axios';
import { GET_ALAFFICHE_MOVIES, GET_MOVIE, UPDATE_MOVIE, UPDATE_MOVIE_SEANCE } from './types';


export const getAlafficheMovies = () => dispatch => {
  axios.get('/api/movies').then(res =>
    dispatch({
      type: GET_ALAFFICHE_MOVIES,
      payload: res.data
    })
  );
};
export const getMovie = id => dispatch => {
  axios.get(`/api/movies/${id}`).then(res =>
    dispatch({
      type: GET_MOVIE,
      payload: res.data
    })
  );
};

export const updateMovie = (movieId, updateOps) => dispatch => {
  axios.post(`/api/movies/${movieId}`, updateOps)
  .then(res =>
    dispatch({
      type: UPDATE_MOVIE,
      payload: res.data
    })
  );
};

export const updateMovieSeance = (movieId, data) => dispatch => {

  axios.patch(`/api/movies/seance/${movieId}`, data)
  .then(res =>
    dispatch({
      type: UPDATE_MOVIE_SEANCE,
      payload: res.data
    })
  );
};
