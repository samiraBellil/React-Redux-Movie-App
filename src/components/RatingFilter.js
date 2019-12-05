import React from "react";
import { connect } from "react-redux";
import Rating from './Rating';
import {RatingFilterAction} from '../actions/RatingFilterAction';


const RatingFilter = ({ onClickRating, indexChecked }) => {
  return (
    <div className="rating-filter">
      <span className="rating-filter-text">Minimum rating</span>
      <Rating
        onClickRating={i => onClickRating(i)}
        indexChecked={indexChecked}
      />
    </div>
  );
};

function mapDispatchToProps(dispatch){
  return{
    onClickRating:(newRating) => dispatch(RatingFilterAction(newRating))
  }
}



const mapStateToProp = state => {
  return {
    indexChecked: state.ratingFilterReducer
  };
};

const RatingFilterContainer = connect(mapStateToProp, mapDispatchToProps)(
  RatingFilter
);

export default RatingFilterContainer;