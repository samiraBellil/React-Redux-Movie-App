import React from 'react';
import { connect } from 'react-redux';
import {titleFilter} from '../actions/TitleFilterAction';


const TitleFilter = ({value, onChangeText}) => {
    return (
        <div className="name-filter">
            <input className="name-filter-text"
                type="text"
                onChange={event => onChangeText(event.target.value)}
            />

        </div>

    );
};

const mapStateToProp = (state) => {
    return {
        value: state.TitleFilterReducer
    };
};

function mapDispatchToProps (dispatch){
    return{
        onChangeText:  (newText) => dispatch(titleFilter(newText))
    }

}



const TitleFilterContainer = connect(mapStateToProp, mapDispatchToProps)(
    TitleFilter
);

export default TitleFilterContainer;