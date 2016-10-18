import React, { Component } from 'react';
import MovieRow from './MovieRow';

class MovieList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const rows = [];
    this.props.movies
      .forEach((movie) => rows.push(<MovieRow key={movie.imdbID} movie={movie}></MovieRow>));

    return (
      <div>
        {rows}
      </div>
    )
  }
}

MovieList.propTypes = {
  movies: React.PropTypes.array.isRequired
}

export default MovieList;
