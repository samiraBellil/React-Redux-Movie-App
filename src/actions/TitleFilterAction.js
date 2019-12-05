import {SET_TITLE_FILTER} from './types';


export const titleFilter = newText =>({
    type: SET_TITLE_FILTER,
    payload: newText,
});

