import React, { PropTypes } from 'react';
import Movie from './Movie';

const styles = {
  listStyle: 'none',
  padding: 0,
  margin: 0
}

const MovieList = ({ movies, onMovieClick }) => (
  <ul style={ (movies.length) ? styles : { display: 'none' }}>
    {movies.map(movie =>
      <Movie
        key={movie.imdbID}
        movie={movie}
        onClick={() => onMovieClick(movie)}
      />
    )}
  </ul>
)

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  onMovieClick: PropTypes.func.isRequired
};

export default MovieList;
