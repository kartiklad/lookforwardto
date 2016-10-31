import React from 'react';
import {
  SearchMovie,
  SearchResults,
  Reminders,
  Counter
} from '../containers/index';

const App = () => (
  <div>
    <SearchMovie />
    <Counter />
    <SearchResults />
    <h2>
      Reminders
    </h2>
    <Reminders />
  </div>
)

export default App;
