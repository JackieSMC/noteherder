import React, { Component } from 'react'

import './NoteForm.css'


class NoteForm extends Component {
    componentWillReceiveProps(nextProps) {
        const newId = nextProps.match.params.id 

        if (newId !== this.props.currentNote.id) {
            const note = nextProps.notes[newId] 
            if (note) {
                this.props.setCurrentNote(note)
            }
        }
    }
    handleChanges = (ev) => {
        const note = {...this.props.currentNote}
        note[ev.target.name] = ev.target.value
        this.props.saveNote(note)
        
        //console.log(ev.target.name)
        
    }//write methods with arrow function much more future

    handleRemove = (ev) => {
        this.props.removeNote(this.props.currentNote)
    }

    render() {
        return (
        <div className="NoteForm">
            <form >
                <p>
                    <input 
                    type="text" 
                    name="title" 
                    placeholder="Title your note" 
                    onChange={this.handleChanges}
                    value={this.props.currentNote.title} />
                </p>
                <p>
                    <textarea 
                    name="body" 
                    cols="30" rows="10" 
                    placeholder="Just start typing..."
                    onChange={this.handleChanges}
                    value={this.props.currentNote.body}></textarea>
                </p>
                <button type="button" onClick = {this.handleRemove}>
                    <i className="fa fa-trash-o"></i>
                </button>
            </form>
        </div>
        )
    }
}

export default NoteForm
