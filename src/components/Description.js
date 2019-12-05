import React, { Component } from 'react';
import { connect } from 'react-redux';
import StarRatingComponent from 'react-star-rating-component';
import {Link} from 'react-router-dom';




class Description extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        this.setState(
            this.props.movieList.filter(el => el.id == this.props.match.params.id)[0]
        )
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                <div className="col-md-4 card card-body">
                <img src={this.state.image} className="thumbnail" alt="Iron Man" width="300px" height="445px"/>
                </div>
                
                <div className="col-md-8">
                <ul className="list-group">
                <li className="list-group-item">
                <strong>Title :</strong> {this.state.title}
                </li>
                <li className="list-group-item">
                <strong>Year:</strong> {this.state.year}
                </li>
                <li className="list-group-item">
                <strong>Description:</strong> <p>Action, Adventure, thriller</p>
                </li>
                <li className="list-group-item">
                <strong>Rating:</strong> <StarRatingComponent className="d-flex justify-content-start"
                name="rate"
                starCount={5}
                value={this.state.rating}
                />
                </li>

                </ul>
                </div>
                </div>
                <div className="row">
                <div className="card card-body bg-dark my-5 text-light">
                <div className="col-md-12">
                <Link to='/'> Go Back To Search </Link>
                </div>
                </div>
                </div>


            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        movieList: state.moviesReducer,
    }
}


export default connect(mapStateToProps)(Description);