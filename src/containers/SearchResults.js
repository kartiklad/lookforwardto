import React from 'react';
import { connect } from 'react-redux';
import { remindMovie } from '../actions';
import { MovieList } from '../components/index'

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMovieClick: (movie) => {
      dispatch(remindMovie(movie));
    }
  }
};

const SearchResults = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);

export default SearchResults;
