import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from 'react-redux';
import { addMovie, editMovie } from '../actions/MovieListAction';
import StarRatingComponent from 'react-star-rating-component';



class ModalComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            title: this.props.editMode ? this.props.infos.title : '',
            image: this.props.editMode ? this.props.infos.image : "https://i.ytimg.com/vi/848q7WLmwbk/maxresdefault.jpg",
            year: this.props.editMode ? this.props.infos.year : "",
            rate: this.props.editMode ? this.props.infos.rate : 1,
        };
    }
    handleShow = () => {
        this.setState({ show: !this.state.show });
    };
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    modalAction = () => {
        if (this.props.editMode) {
            this.props.updateMovie({ ...this.state, id: this.props.infos.id })
            this.setState({ show: false });
        } else {
            this.props.add(this.state)
            this.setState({ show: false });
        }
    }
    onStarClick(nextValue, prevValue, name) {
        this.setState({ rate: nextValue });
    }

    render() {
        const { rate } = this.state;
        console.log(this.props)
        return (
            <div>
                <Button variant="primary" onClick={this.handleShow}>
                    {this.props.editMode ? 'EditMovie' : 'ADDMovie'}
                </Button>
                <Modal show={this.state.show} onHide={this.handleShow}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.editMode ? 'Edit Movie' : 'Add Movie'}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div>
                                <label>title:</label>
                                <input type="text" onChange={this.handleChange} name="title" value={this.state.title} />
                            </div>
                            <div>
                                <label>image:</label>
                                <input type="text" onChange={this.handleChange} name="image" value={this.state.image} />
                            </div>
                            <div>
                                <label>year:</label>
                                <input type="text" onChange={this.handleChange} name="year" value={this.state.year} />
                            </div>

                            <StarRatingComponent
                                name="rate"
                                value={this.state.rate}
                                starCount={5}
                                onStarClick={this.onStarClick.bind(this)}
                            />

                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleShow}>
                            Close
            </Button>
                        <Button onClick={this.modalAction} variant="primary">
                            {this.props.editMode ? 'Edit Movie' : '+ ADD Movie'}
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
const mapDispatchStateToProps = (dispatch) => {
    return {
        add: (newMovie) => dispatch(addMovie(newMovie)),
        updateMovie: x => dispatch(editMovie(x))
    }
}

export default connect(null, mapDispatchStateToProps)(ModalComp);