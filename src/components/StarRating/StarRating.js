import React from 'react';

import PropsTypes from 'prop-types';

import Star from './Star.js';

const  StarRating=({starSelected=0,onRate=f=>f})=> {
        return (
            <div>
                {[...Array(5)].map((item, index) => 
                    <Star key={index} selected={index < starSelected} onClick={()=>onRate(index+1)}/>
                )}
                <p>{starSelected} out of 5 stars</p>
            </div>
        )
    }

StarRating.propsTypes = {
    starSelected:PropsTypes.number,
    onRate:PropsTypes.func
}

export default StarRating;