import { combineReducers } from 'redux';
import {
  SEARCH_MOVIES, RECEIVE_MOVIES,
  REMIND_MOVIE, FORGET_MOVIE
} from './actions';


const movie = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_MOVIES:
      return [
        {
        	"Title": "Test",
        	"Year": "2013",
        	"Rated": "N/A",
        	"Released": "04 Apr 2014",
        	"Runtime": "89 min",
        	"Genre": "Drama",
        	"Director": "Chris Mason Johnson",
        	"Writer": "Chris Mason Johnson (screenplay)",
        	"Actors": "Scott Marlowe, Matthew Risch, Evan Boomer, Kevin Clarke",
        	"Plot": "In 1985, a gay dance understudy hopes for his on-stage chance while fearing the growing AIDS epidemic.",
        	"Language": "English, Portuguese, French",
        	"Country": "USA",
        	"Awards": "3 wins & 3 nominations.",
        	"Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwMDU5NDkxNF5BMl5BanBnXkFtZTcwMjk5OTk4OQ@@._V1_SX300.jpg",
        	"Metascore": "70",
        	"imdbRating": "6.3",
        	"imdbVotes": "1,114",
        	"imdbID": "tt2407380",
        	"Type": "movie",
        	"Response": "True"
        },
        {
        	"Title": "Star Wars: Episode IV - A New Hope",
        	"Year": "1977",
        	"Rated": "PG",
        	"Released": "25 May 1977",
        	"Runtime": "121 min",
        	"Genre": "Action, Adventure, Fantasy",
        	"Director": "George Lucas",
        	"Writer": "George Lucas",
        	"Actors": "Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing",
        	"Plot": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a wookiee and two droids to save the galaxy from the Empire's world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader.",
        	"Language": "English",
        	"Country": "USA",
        	"Awards": "Won 6 Oscars. Another 48 wins & 28 nominations.",
        	"Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BOTIyMDY2NGQtOGJjNi00OTk4LWFhMDgtYmE3M2NiYzM0YTVmXkEyXkFqcGdeQXVyNTU1NTcwOTk@._V1_SX300.jpg",
        	"Metascore": "92",
        	"imdbRating": "8.7",
        	"imdbVotes": "921,980",
        	"imdbID": "tt0076759",
        	"Type": "movie",
        	"Response": "True"
        }
      ]
      break;
    case
    default:

  }
}

const movies = (state = [], action) => {
  switch (action.type) {
    case SEARCH_MOVIES:
      return [
        ...state,
        movie(undefined, action)
      ]
  }
}

const movieApp = combineReducers({
  movies
});

export default movieApp;
