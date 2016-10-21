import React, { PropTypes, Component } from 'react';
import MovieRow from './MovieRow';

class MovieList extends Component {
  constructor(props) {
    super(props);
  }

  saveMovieHandler(movie) {
    this.props.savedMovies.push(movie);
  }

  render() {
    const rows = [];
    this.props.movies
      .forEach((movie) => {
        if(this.props.movies.indexOf(movie)) {
          rows.push(
            <MovieRow
              key={movie.imdbID}
              isSaved={true}
              movie={movie}
            >
            </MovieRow>
          );
        } else {
          rows.push(
            <MovieRow
              key={movie.imdbID}
              isSaved={false}
              movie={movie}
              saveMovie={this.saveMovieHandler.bind(this)}
            >
            </MovieRow>
          );
        }
      });
    return (
      <div>
        {rows}
      </div>
    )
  }
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  savedMovies: PropTypes.array.isRequired
};

export default MovieList;
