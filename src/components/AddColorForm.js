import React from 'react';
import {connect} from 'react-redux';
import { addColor } from '../actions';

const AddColorform = (props) => {

    let _title, _color;

    function submit(e) {
        props.addColor(_title.value,_color.value);
        _title.value = "";
        _color.value = "#111111";
        _title.focus();
    }

    return (
        <form >
            <input ref={input => _title = input} type="text" placeholder="title" required/>
            <input ref={input => _color = input} type="color" required></input>
            <button onClick={submit}>ADD</button>
        </form>
    )
}

const mapDispatchToProps=(dispatch)=>{
    return {
        addColor:(title,color)=>dispatch(addColor(title,color))
    }
}

export default connect(null,mapDispatchToProps)(AddColorform);