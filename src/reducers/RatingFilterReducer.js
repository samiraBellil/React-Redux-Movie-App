import {SET_RATING_FILTER} from '../actions/types';


const initialstate = -1;


const ratingFilterReducer = (state = initialstate, action) => {
    switch (action.type) {
        case SET_RATING_FILTER:
            return action.payload;

        default:
            return state;
    }
}

export default ratingFilterReducer;