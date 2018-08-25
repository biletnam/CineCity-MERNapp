import axios from 'axios';
import { GET_ALAFFICHE_MOVIES } from './types';


export const getAlafficheMovies = () => dispatch => {
  axios.get('/api/movies').then(res =>
    dispatch({
      type: GET_ALAFFICHE_MOVIES,
      payload: res.data
    })
  );
};
