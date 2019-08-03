import React, { Component } from 'react';
import './App.css';
import AddColorForm from './components/AddColorForm';
import ColorList from './components/ColorList/ColorList.js';
import PropTypes from 'prop-types';

class App extends Component {

  getChildContext() {
    return {
      store: this.props.store
    }
  }

  componentWillMount() {
    this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());

  }
  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { store } = this.props;
    return (
      <div>
        <AddColorForm />
        <ColorList colors={store.getState().colorsReducer} />
      </div>

    )
  }
}

App.propTypes={
store:PropTypes.object.isRequired
}

App.childContextTypes={
  store:PropTypes.object.isRequired
}
export default App;
