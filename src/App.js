import React, { Component } from 'react';
import Collapse from './components/Collapse';
import ToggleEdit from './components/ToggleEdit';


class App extends Component {
  
  render() {
    const list = [
    { id: 1, name: 'Eggs' },
    { id: 2, name: 'Bread' },
  ]
    return (
      <div>
        {/* <ToggleEdit  title='My first post'  /> */}
        <Collapse list={list} />
      </div>
    )
  }
}

export default App;
