import React from 'react';

import constants from '../constants';
import PropTypes from 'prop-types';

const AddColorform = (props, { store }) => {

    let _title, _color;

    function submit(e) {
        store.dispatch({
            type: constants.ADD_COLOR,
            title: _title.value,
            color: _color.value,
        })
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
AddColorform.contextTypes = {
store: PropTypes.object
}
export default AddColorform;