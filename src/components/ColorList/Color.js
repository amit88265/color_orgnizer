import React, { Component } from 'react';

import StarRating from '../StarRating/StarRating';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeColor, rateColor } from '../../actions';

class Color extends Component {

    shouldComponentUpdate(nextProps) {
        return this.props.rating !== nextProps.rating;
    }
    render() {
        const { id, title, color, rating } = this.props;
        return (
            <section>
                <h1>{title}</h1>
                <button onClick={() => this.props.removeColor(id)}>X</button>
                <div style={{ background: color, width: 100, height: 100 }}></div>
                <StarRating starSelected={rating} onRate={(rating) => this.props.rateColor(id,rating)} />
            </section>
        )
    }


}
Color.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string,
    rating: PropTypes.number,
    onRemove: PropTypes.func,
    onRate: PropTypes.func
}
Color.defaultProps = {
    title: "temp",
    color: "#000000",
    rating: 0,
    onRemove: f => f,
    onRate: f => f
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeColor: (id) => dispatch(removeColor(id)),
        rateColor: (id,rating) => dispatch(rateColor(id,rating))
    }
}
export default connect(null,mapDispatchToProps)(Color);