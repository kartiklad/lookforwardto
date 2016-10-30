import React, { PropTypes } from 'react';

let styles = {
  row: {
    borderBottom: '1px solid #000',
    marginTop: 20,
    width: 500,
    minHeight: 120,
    clear: 'both'
  },
  poster: {
    float: 'left',
    width: 100,
    height: 100,
    marginRight: 10,
    border: '1px solid #000'
  },
  info: {
    minHeight: 120
  },
  heading: {
    fontWeight: 600
  },
  show: {
    display: 'block'
  },
  hide: {
    display: 'none'
  }
};

const Movie = ({ movie, onClick }) => {
  let poster;
  if (this.props.movie.Poster && this.props.movie.Poster !== 'N/A') {
    poster = <img
      style={this.styles.poster}
      src={this.props.movie.Poster}
    />;
  } else {
    poster = <div style={this.styles.poster}>&nbsp;</div>;
  }

  return (
    <li
      onClick={onClick}
      style={styles.row}
    >
      {poster}
      <div style={this.styles.info}>
        <span style={this.styles.heading}>Title: </span>{this.props.movie.Title} <br />
        <span style={this.styles.heading}>Released: </span>{this.props.movie.Released} <br />
        <span style={this.styles.heading}>Plot: </span>{this.props.movie.Plot}
      </div>
      <input type="hidden" ref="movie" value={JSON.stringify(this.props.movie)} />
    </li>
  )
};

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Movie;
