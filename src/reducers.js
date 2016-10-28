import { combineReducers } from 'redux';
import * as reducers from './reducers/index';

const movieApp = combineReducers(reducers);

export default movieApp;
