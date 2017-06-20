import React, { Component } from 'react'
import './App.css'
import Main from './Main'
import SignIn from './SignIn'
import SignOut from './SignOut'
import base, { auth } from './base'


class App extends Component {
  constructor () {
    super()

    this.state = {
      notes: {},
      uid: null,
  }
}

componentWillMount() {
  auth.onAuthStateChanged(
    (user) => {
      if (user) {
        this.authHandler(user)
      } else {
        this.setState({ uid: null })
      }
    }
  )
}

syncNotes = () => {
  base.syncState(
    `${this.state.uid}/notes`,
    {
      context: this, 
      state: 'notes',
    }
  )
}

  signedIn = () => {
    return this.state.uid
  }

  authHandler = (user) => {
    this.setState(
      { uid: user.uid },
      this.syncNotes

    )
  }
  signOut = () => {
    auth.signOut()
  }

  saveNote = (note) => {
    if (!note.id) {
      note.id = `note-${Date.now()}`
    }
    const notes = {...this.state.notes} //not part of JS standard
    notes[note.id] = note

      this.setState({ notes })
  }
  renderMain = () => {
    return (
    <div>
      <SignOut signOut={this.signOut} />
      <Main notes={this.state.notes} saveNote={this.saveNote} />
    </div>
    )
  }

  render() {
    return (
      <div className="App">
        {this.signedIn() ? this.renderMain(): <SignIn /> }
        
      </div>
    );
  }
}


export default App;
