import { REMIND_MOVIE, FORGET_MOVIE } from '../actions';

export default function (state = [], action) {
  switch (action.type) {
    case REMIND_MOVIE:
      return Object.assign({}, state, {
        savedMovies: [
          ...state,
          action.movie
        ]
      })
      break;
    case FORGET_MOVIE:
      return Object.assign({}, state, {
        savedMovies: [
          ...state.slice(0, action.index),
          ...state.slide(action.index + 1)
        ]
      });
      break;
    default:
      return state;
  }
}
