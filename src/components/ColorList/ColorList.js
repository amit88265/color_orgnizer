import React from 'react';

import Color from './Color.js';
import {connect} from 'react-redux';

import './ColorList.css';

const ColorList = (props) => {
    return (
        <div className="colorList">
            {
                props.colors===undefined ? <p>No color available</p> :
                    props.colors.map((c, index) =>
                        <Color {...c} key={index}/>
                    )
            }
        </div>
    )
}


const mapStateToProps=(state)=>{
    return {
        colors:state.colorsReducer
    }
}

export default connect(mapStateToProps,null) (ColorList);