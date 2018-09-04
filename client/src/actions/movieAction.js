import axios from 'axios';
import { GET_ALAFFICHE_MOVIES, GET_MOVIE } from './types';


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
