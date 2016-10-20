import React, { Component } from 'react';
import {
  FindMovieForm,
  MovieList,
  Loading
} from './components/';
import _ from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      movies: [],
      savedMovies: [],
      fetchStatus: false
    };
  }

  searchMovie(searchText) {
    const url = `http://www.omdbapi.com/?t=${searchText}&y=&plot=short&r=json`;

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.Response && data.Response === "False") {
        this.setState({
          fetchStatus: false
        });
        return null;
      }
      this.setState({
        movies: [data],
        fetchStatus: false
      });
    });
  }

  handleUserSubmit(searchText) {
    this.setState({
      searchText,
      fetchStatus: true
    });

    this.searchMovie(searchText);
  }

  render() {
    return (
      <div>
        <FindMovieForm
          searchText={this.state.searchText}
          onUserSubmit={this.handleUserSubmit.bind(this)}
        />
        <Loading show={this.state.fetchStatus} />
        <MovieList
          movies={this.state.movies}
        />
      </div>
    )
  }
}


export default App;
