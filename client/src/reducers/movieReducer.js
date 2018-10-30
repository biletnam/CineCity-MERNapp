import { GET_ALAFFICHE_MOVIES, GET_MOVIE, UPDATE_MOVIE, UPDATE_MOVIE_SEANCE } from '../actions/types';

const initialState = {
  alafficheMovies:[],
  movie: {}
};

export default function(state = initialState, action) {

  switch(action.type) {
    case GET_ALAFFICHE_MOVIES:
      return {
        ...state,
        alafficheMovies: action.payload
    };

    case GET_MOVIE:
      return {
        ...state,
        movie: action.payload
    };

    case UPDATE_MOVIE:
      return {
        ...state
    };

    case UPDATE_MOVIE_SEANCE:
      return {
        ...state,
        movieId: action.payload.movieId,
        data: action.payload.data
    };

    default :
    return state;
  }
};
