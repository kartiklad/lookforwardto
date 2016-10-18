import React, { Component } from 'react';
import { FindMovieForm, MovieList } from './components/';

class App extends Component {
  constructor(props) {
    super(props);

    this.MOVIES = [
      {
        "Title": "Back to the Future",
        "Year": "1985",
        "Rated": "PG",
        "Released": "03 Jul 1985",
        "Runtime": "116 min",
        "Genre": "Adventure, Comedy, Sci-Fi",
        "Director": "Robert Zemeckis",
        "Writer": "Robert Zemeckis, Bob Gale",
        "Actors": "Michael J. Fox, Christopher Lloyd, Lea Thompson, Crispin Glover",
        "Plot": "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.",
        "Language": "English",
        "Country": "USA",
        "Awards": "Won 1 Oscar. Another 18 wins & 26 nominations.",
        "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "Metascore": "86",
        "imdbRating": "8.5",
        "imdbVotes": "743,654",
        "imdbID": "tt0088763",
        "Type": "movie",
        "Response": "True"
      },
      {
      	"Title": "Interstellar",
      	"Year": "2014",
      	"Rated": "PG-13",
      	"Released": "07 Nov 2014",
      	"Runtime": "169 min",
      	"Genre": "Adventure, Drama, Sci-Fi",
      	"Director": "Christopher Nolan",
      	"Writer": "Jonathan Nolan, Christopher Nolan",
      	"Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      	"Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      	"Language": "English",
      	"Country": "USA, UK",
      	"Awards": "Won 1 Oscar. Another 39 wins & 134 nominations.",
      	"Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      	"Metascore": "74",
      	"imdbRating": "8.6",
      	"imdbVotes": "950,670",
      	"imdbID": "tt0816692",
      	"Type": "movie",
      	"Response": "True"
      }
    ]
  }

  render() {
    return (
      <div>
        <FindMovieForm />
        <MovieList
          movies={this.MOVIES}
        />
      </div>
    )
  }
}


export default App;
