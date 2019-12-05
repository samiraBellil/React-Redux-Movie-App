import {SET_RATING_FILTER} from './types';



export const RatingFilterAction = newRating=>({
    type: SET_RATING_FILTER,
    payload:newRating,
})