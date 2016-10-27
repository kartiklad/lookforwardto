import movieList from '../assets/movies';
import { RECEIVE_MOVIES } from '../actions';

export default function (state = [], action) {
  switch (action.type) {
    case RECEIVE_MOVIES:
      return movieList;
      break;
    default:
      return state;
  }
}
