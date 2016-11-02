import React, { PropTypes } from 'react';
import Movie from './Movie';
import Loading from './Loading';

const styles = {
  listStyle: 'none',
  padding: 0,
  margin: 0
}

const MovieList = ({ movies, isFetching = false, onMovieClick }) => (
  <div>
    <Loading visible={isFetching}/>
    <ul style={ (movies.length) ? styles : { display: 'none' }}>
      {movies.map(movie =>
        <Movie
          key={movie.imdbID}
          movie={movie}
          onClick={() => onMovieClick(movie)}
        />
      )}
    </ul>
  </div>
)

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  isFetching: PropTypes.bool,
  onMovieClick: PropTypes.func.isRequired
};

export default MovieList;
