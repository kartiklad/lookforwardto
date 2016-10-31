import React, { PropTypes } from 'react';

let styles = {
  row: {
    cursor: 'pointer',
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
  if (movie.Poster && movie.Poster !== 'N/A') {
    poster = <img
      style={styles.poster}
      src={movie.Poster}
    />;
  } else {
    poster = <div style={styles.poster}>&nbsp;</div>;
  }

  return (
    <li
      onClick={onClick}
      style={styles.row}
    >
      {poster}
      <div style={styles.info}>
        <span style={styles.heading}>Title: </span>{movie.Title} <br />
        <span style={styles.heading}>Released: </span>{movie.Released} <br />
        <span style={styles.heading}>Plot: </span>{movie.Plot}
      </div>
    </li>
  )
};

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Movie;
