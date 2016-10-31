import React from 'react';
import { connect } from 'react-redux';
import { forgetMovie } from '../actions';
import { MovieList } from '../components/index';

const mapStateToProps = (state) => {
  return {
    movies: state.savedMovies
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMovieClick: (movie) => {
      dispatch(forgetMovie(movie));
    }
  }
};

const Reminders = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);

export default Reminders;
