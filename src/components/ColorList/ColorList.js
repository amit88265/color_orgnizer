import React from 'react';

import Color from './Color.js';

import PropsTypes from 'prop-types';

import './ColorList.css';

const ColorList = ({ colors = [], onRate = f => f, onRemove = f => f }) => {
    return (
        <div className="colorList">
            {
                colors.length === 0 ? <p>No color available</p> :
                    colors.map((c, index) =>
                        <Color {...c} key={index} onRate={(rating) => onRate(c.id, rating)}
                            onRemove={() => onRemove(c.id)} />
                    )
            }
        </div>
    )
}

ColorList.propsTypes = {
    colors: PropsTypes.array,
    onRate: PropsTypes.func,
    onRemove: PropsTypes.func
}

ColorList.defaultTypes = {
    //can be set here rather than in arg
}

export default ColorList;