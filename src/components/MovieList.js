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
        rows.push(<h3 key="0"> Search results: </h3>);
        if(this.props.movies.indexOf(movie)) {
          return rows.push(
            <MovieRow
              key={movie.imdbID}
              isSaved={true}
              movie={movie}
            >
            </MovieRow>
          );
        } else {
          return rows.push(
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
