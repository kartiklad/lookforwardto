import React from 'react';
import { connect } from 'react-redux';
import { searchMovies, receiveMovies } from '../actions';

let SearchMovie = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(searchMovies(input.value))
        dispatch(receiveMovies())
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Search
        </button>
      </form>
    </div>
  )
};

SearchMovie = connect()(SearchMovie);

export default SearchMovie
