import React, { Component } from 'react';
import './App.css';
import Main from './Main'


class App extends Component {
  constructor () {
    super()

    this.state = {
      notes: {
        'note-1': {
          id: 'note-1',
          title: 'Thoughts on React',
          body: 'Reach is pretty niffty. Declarative FTW!',
        },
        'note-2':{
          id: 'note-2',
          title: 'Thoughts on Reactddddd',
          body: 'ReacdddddddddddDeclarative FTW!',
        },
      },
    }
  }

  render() {
    return (
      <div className="App">

        <Main notes={this.state.notes} />
        
      </div>
    );
  }
}

export default App;
