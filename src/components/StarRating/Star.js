import React from 'react';

import PropsTypes from 'prop-types';

import './Star.css';
const Star =({selected=false,onClick=f=>f})=>{
 
    return (
        <div className={(selected)?"star selected":"star"} onClick={onClick}>
        </div>
    )
}

Star.propsTypes={
    selected:PropsTypes.bool,
    onClick:PropsTypes.func
}

export default Star;