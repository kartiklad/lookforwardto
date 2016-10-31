import { REMIND_MOVIE, FORGET_MOVIE } from '../actions';

export default function (state = [], action) {
  switch (action.type) {
    case REMIND_MOVIE:
      return [
        ...state,
        action.movie
      ];
      break;
    case FORGET_MOVIE:
      let movies = [].concat(state);

      movies.splice(action.index, 1);

      return movies;
      break;
    default:
      return state;
  }
}
