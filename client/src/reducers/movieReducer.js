import { GET_ALAFFICHE_MOVIES, GET_MOVIE } from '../actions/types';

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

    default :
    return state;
  }
};
