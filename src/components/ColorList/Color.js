import React, { Component } from 'react';

import StarRating from '../StarRating/StarRating';

import PropsTypes from 'prop-types';

class Color extends Component {

    constructor(props) {
        super(props);
        console.log("color constructor");
    }

    componentWillMount() {
        console.log("willMount");
        this.style = { background: "#CCC" };
    }

    componentWillUpdate() {
        console.log("willUpdate");
        this.style = null;
    }

    shouldComponentUpdate(nextProps) {
        return this.props.rating !== nextProps.rating;
    }
    render() {
        const { title, color, rating, onRate, onRemove } = this.props;
        return (
            <section>
                <h1>{title}</h1>
                <button onClick={onRemove}>X</button>
                <div style={{ background: color, width: 100, height: 100 }}></div>
                <StarRating starSelected={rating} onRate={(i) => onRate(i)} />
            </section>
        )
    }


}
Color.propsTypes = {
    title: PropsTypes.string,
    color: PropsTypes.string,
    rating: PropsTypes.number,
    onRemove: PropsTypes.func,
    onRate: PropsTypes.func
}
Color.defaultProps = {
    title: "temp",
    color: "#000000",
    rating: 0,
    onRemove: f => f,
    onRate: f => f
}
export default Color;