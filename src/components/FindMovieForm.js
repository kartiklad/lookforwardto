import React, { Component } from 'react';

class FindMovieForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="searchForm">
        <input
          type="text"
          value=""
        />
        <input type="submit" value="Search" />
      </form>
    )
  }
}

export default FindMovieForm;
