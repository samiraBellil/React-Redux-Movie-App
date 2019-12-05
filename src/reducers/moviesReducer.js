import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE} from '../actions/types';

const initialstate = [
  {
    image: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
    title: "Iron Man",
    year: 2008,
    rate: 5,
    id: 0
  },
  {
    image:
      "https://media.senscritique.com/media/000005676799/source_big/Avengers.jpg",
    title: "Avengers",
    year: 2012,
    rate: 3,
    id: 1
  },
  {
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51NbVEuw1HL._SX355_.jpg",
    title: "Inception",
    year: 2010,
    rate: 4,
    id: 2
  },
];


const moviesReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return state.concat(action.payload);
      
    case EDIT_MOVIE:
      return state.map(el => el.id === action.payload.id ? action.payload : el);

    case DELETE_MOVIE:
      return state.filter(el => el.id === action.payload ? false : true);

    default:
      return state;
  }
}
export default moviesReducer;