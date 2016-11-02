import fetch from 'isomorphic-fetch';

export const REMIND_MOVIE = 'REMIND_MOVIE';
export function remindMovie(movie) {
  return {
    type: REMIND_MOVIE,
    movie
  };
}

export const FORGET_MOVIE = 'FORGET_MOVIE';
export function forgetMovie(id) {
  return {
    type: FORGET_MOVIE,
    id
  };
}

export const SEARCH_MOVIES = 'SEARCH_MOVIES';
export function searchMovies(text) {
  return {
    type: SEARCH_MOVIES,
    searchTerm: text
  };
}

export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';
export function receiveMovies(movies) {
  return {
    type: RECEIVE_MOVIES,
    movies
  }
}

export const IS_FETCHING = 'IS_FETCHING';
export function isFetching(status) {
  return {
    type: IS_FETCHING,
    isFetching: status
  }
}

export const FETCH_MOVIES = 'FETCH_MOVIES';
export function fetchMovies(text) {
  return function(dispatch) {
    dispatch(isFetching(true));

    const fetchUrl = `http://www.omdbapi.com/?t=${text}&y=&plot=short&r=json`;

    return fetch(fetchUrl)
      .then(response => response.json())
      .then((movies) => {
        dispatch(receiveMovies([movies]));
        dispatch(isFetching(false));
      })
  }
}
