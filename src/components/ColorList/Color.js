import React, { Component } from 'react';

import StarRating from '../StarRating/StarRating';

import PropTypes from 'prop-types';
import constants from '../../constants';

class Color extends Component {

    shouldComponentUpdate(nextProps) {
        return this.props.rating !== nextProps.rating;
    }
    render() {
        const { id, title, color, rating } = this.props;
        const { store } = this.context;
        return (
            <section>
                <h1>{title}</h1>
                <button onClick={() => store.dispatch({ type: constants.REMOVE_COLOR, id })}>X</button>
                <div style={{ background: color, width: 100, height: 100 }}></div>
                <StarRating starSelected={rating} onRate={(rating) => store.dispatch({
                    type: constants.RATE_COLOR,
                    id, 
                    rating
                })} />
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

Color.contextTypes = {
    store: PropTypes.object
}
export default Color;