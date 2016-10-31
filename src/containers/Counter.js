import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

let Counter = ({ movies }) => {
  const count = movies.length;
  let msg = `You have ${count} movie reminder`;
  if (count > 1 || count === 0) {
    msg += 's';
  } else {
    msg += '.';
  }

  return (
    <div>
      <span>
        {msg}
      </span>
    </div>
  )
}

Counter.propTypes = {
  movies: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  return {
    movies: state.savedMovies
  }
}

Counter = connect(mapStateToProps)(Counter);

export default Counter;
