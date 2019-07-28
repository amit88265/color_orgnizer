import React, { Component } from 'react';
import './App.css';
import AddColorForm from './components/AddColorForm';
import ColorList from './components/ColorList/ColorList.js';
import { v4 } from 'uuid';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { colors: [] };

    this.addColor = this.addColor.bind(this);
    this.rateColor = this.rateColor.bind(this);
    this.removeColor = this.removeColor.bind(this);
  }


  addColor(title, color) {
    const colors = [
      ...this.state.colors,
      {
        id:v4(),
        title,
        color,
        rating: 0
      }
    ];
    console.log(colors);
    this.setState({ colors });
  }

  rateColor(id, rating) {
    const colors = this.state.colors.map((item, i) => 
    ( item.id!==id?item:
       {
         ...item,
         rating
       })
     
    )
    this.setState({ colors });
  }

  removeColor(id) {
    const colors = this.state.colors.filter((item) => item.id !== id)
    this.setState({ colors});
  }

  render() {
    const { colors } = this.state;
    return (
      <div>
        <AddColorForm onNewColor={this.addColor} />
        <ColorList onRate={this.rateColor} onRemove={this.removeColor} colors={colors} />
      </div>

    )
  }
}

export default App;
