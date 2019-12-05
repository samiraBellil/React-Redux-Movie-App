import React from 'react';
import { connect } from "react-redux";
import MovieCard from '../components/MovieCard';
import ModalComp from '../components/ModalComp';

const MovieList = ({ movieList, rateSearched, textSearched}) => {
    return (
        <main className="movie-app-main">
            <div className="movie-list">
                {movieList
                    .filter(
                        el =>
                            el.rate >= rateSearched + 1 &&
                            el.title.toLocaleLowerCase().includes(textSearched.toLocaleLowerCase().trim())
                    ).map((el, i) => {
                        return <MovieCard key={el.id} movie={el} />;
                    })}

                <ModalComp editMode={false}/>

                {/* <div className="new-movie-card" onClick={addMovie}>
                    +
          </div> */}
            </div>
        </main>
    );
};

const mapStateToProps = state => {
    return {
        movieList: state.moviesReducer,
        rateSearched: state.ratingFilterReducer,
        textSearched: state.TitleFilterReducer
    };
};

// function mapDispatchToProps(dispatch) {
//     return {
//         addMovie: (movie) => dispatch(addMovie(movie))
//     }

// }

const MovieListContainer = connect(mapStateToProps, null)(
    MovieList
);

export default MovieListContainer;

