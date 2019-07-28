import React, { Component } from 'react';

import PropTypes from 'prop-types';


class AddColorform extends Component {

    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }


    submit(e) {
        const { _title, _color } = this.refs;
        this.props.onNewColor(_title.value, _color.value)
        _title.value = "";
        _color.value = "#111111";
        _title.focus();

    }
    render() {
        return (
            <form >
                <input ref="_title" type="text" placeholder="title" required></input>
                <input ref="_color" type="color" required></input>
                <button onClick={this.submit}>ADD</button>
            </form>
        )
    }

}


AddColorform.propTypes = {
    onNewColor: PropTypes.func
}

AddColorform.defaultProps = {
    onNewColor: (_title, _color) => { console.log(_title, _color); }
}
export default AddColorform;