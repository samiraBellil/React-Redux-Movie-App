import React from "react";
import { connect } from "react-redux";
import Rating from "../components/Rating";
import { deleteMovie } from '../actions/MovieListAction';
import { Link } from 'react-router-dom';
import ModalComp from "./ModalComp";

const Rate = ({ number }) => {
    let rate = "";
    for (let i = 0; i < number; i++) {
        rate += "★";
    }

    rate = rate.padEnd(5, "☆");

    return <span className="movie-rating">{rate}</span>;
};

const MovieCard = props => {
    const { movie = {}, deleteMovie = () => { }} = props;
    const {
        id,
        title = "",
        year = "",
        image = "https://www.mearto.com/assets/no-image-83a2b680abc7af87cfff7777d0756fadb9f9aecd5ebda5d34f8139668e0fc842.png",
        rate = -1
    } = movie;

    return (
         <div className="movie-card" >
        
            <div className="movie-delete-button" onClick={() => deleteMovie(id)}>
                X
      </div>
            <Rate number={rate} />
            <div
                className="movie-image"
                style={{
                    backgroundImage: `url(${image})`
                }}
            />
            <div className="movie-description">
                {title} - {year}
            </div>
            
            <ModalComp infos={props.movie} editMode={true}/>
            <Link to={`/Desc/${id}`}>description</Link>

            
        </div>
    );
};

function mapDispatchToProps(dispatch) {
    return {
        deleteMovie: (deletemovie) => dispatch(deleteMovie(deletemovie)),
        // editMovie: (movie) => dispatch(editMovie(movie))
    }
}

const SmartMovieCard = connect(null, mapDispatchToProps)(MovieCard);

export default SmartMovieCard;
