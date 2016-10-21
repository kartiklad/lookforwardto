export const SEARCH_MOVIES = 'SEARCH_MOVIES';
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';
export const REMIND_MOVIE = 'REMIND_MOVIE';
export const FORGET_MOVIE = 'FORGET_MOVIE';

export function remindMovie(movie) {
  return {
    type: REMIND_MOVIE,
    movie
  };
}

export function forgetMovie(id) {
  return {
    type: FORGET_MOVIE,
    id
  };
}

export function searchMovies(text) {
  return {
    type: SEARCH_MOVIES,
    searchTerm: text
  };
}
