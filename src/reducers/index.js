import { combineReducers } from 'redux';
import TitleFilterReducer from '../reducers/TitleFilterReducer';
import ratingFilterReducer from '../reducers/RatingFilterReducer';
import moviesReducer from '../reducers/moviesReducer';


const rootReducer = combineReducers({TitleFilterReducer, ratingFilterReducer, moviesReducer});

export default rootReducer;