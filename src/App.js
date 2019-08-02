import React, { Component } from 'react';
import './App.css';
import AddColorForm from './components/AddColorForm';
import ColorList from './components/ColorList/ColorList.js';
import constants from './constants';


class App extends Component {
  constructor(props) {
    super(props);
    this.addColor = this.addColor.bind(this);
    this.rateColor = this.rateColor.bind(this);
    this.removeColor = this.removeColor.bind(this);
  }


  addColor(title, color) {
    this.props.store.dispatch({
      type:constants.ADD_COLOR,
      title,
      color,
    })
  }

  rateColor(id, rating) {
   this.props.store.dispatch({
    type:constants.RATE_COLOR, 
    id,rating});
  }

  removeColor(id) {
   this.props.store.dispatch({type:constants.REMOVE_COLOR,id});
  
  }
  componentWillUpdate(){
    console.log("update");
  }

  render() {
    const {store}=this.props;
    return (
      <div>
        <AddColorForm onNewColor={this.addColor} />
        <ColorList onRate={this.rateColor} onRemove={this.removeColor}
         colors={store.getState().colorsReducer} />
      </div>

    )
  }
}

export default App;
