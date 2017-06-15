import React, { Component } from 'react'

import './NoteForm.css'


class NoteForm extends Component {
    constructor(props) {
        super(props)
       this.state = {
           note: this.blankNote()
       }
    }

    blankNote = () => {
        return {
            id: null,
            title: '',
            body:'',

        }
    }
    handleChanges = (ev) => {
        const note = {...this.state.note}
        note[ev.target.name] = ev.target.value
        this.setState({ note }, ()=> this.props.saveNote(this.state.note)
        )
        //console.log(ev.target.name)
        
    }//write methods with arrow function much more future


    render() {
        return (
        <div className="NoteForm">
            <form>
                <p>
                    <input 
                    type="text" 
                    name="title" 
                    placeholder="Title your note" 
                    onChange={this.handleChanges}
                    value={this.state.note.title} />
                </p>
                <p>
                    <textarea 
                    name="body" 
                    cols="30" rows="10" 
                    placeholder="Just start typing..."
                    onChange={this.handleChanges}
                    value={this.state.note.body}></textarea>
                </p>
            </form>
        </div>
        )
    }
}

export default NoteForm
