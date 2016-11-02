import { IS_FETCHING } from '../actions';

export default function (state = false, action) {
  switch (action.type) {
    case IS_FETCHING:
      return action.isFetching;
      break;
    default:
      return state;
  }
}
