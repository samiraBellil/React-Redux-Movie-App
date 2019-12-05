import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE} from './types';


export const addMovie = newMovie => ({
  type: ADD_MOVIE,
  payload: newMovie
})


export const deleteMovie = id => ({
  type: DELETE_MOVIE,
  payload: id,
})

export const editMovie = updatedMovie => {
  return{
    type: EDIT_MOVIE,
    payload: updatedMovie
  }
}





