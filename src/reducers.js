import { combineReducers } from 'redux';
import * as reducers from './reducers';

const movieApp = combineReducers(reducers);

export default movieApp;
