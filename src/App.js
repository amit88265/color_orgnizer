import React, { Component } from 'react';
import './App.css';
import AddColorForm from './components/AddColorForm';
import ColorList from './components/ColorList/ColorList.js';


class App extends Component {

  render() {
    console.log("app");
    return (
      <div>
        <AddColorForm />
        <ColorList />
      </div>

    )
  }
}

export default App;
