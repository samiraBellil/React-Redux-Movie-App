import {SET_TITLE_FILTER} from '../actions/types';


const initialstate = "";

const TitleFilterReducer = (state = initialstate, action) => {
    switch (action.type) {
        case SET_TITLE_FILTER:
            return action.payload;

        default:
            return state;
    }
}

export default TitleFilterReducer;