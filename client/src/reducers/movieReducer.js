import { GET_ALAFFICHE_MOVIES } from '../actions/types';

const initialState = {
  alafficheMovies:[]
};

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_ALAFFICHE_MOVIES:
      return {
        ...state,
        alafficheMovies: action.payload
      };
    default :
      return state;
  }
};
