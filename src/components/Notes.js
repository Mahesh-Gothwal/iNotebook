import React, { useContext, useEffect, useRef, useState } from 'react'
import NoteContext from '../context/notes/NoteContext';
import Noteitem from './Noteitem';
import AddNote from './AddNote';

const Notes = () => {
  const context = useContext(NoteContext);
  const {notes, getNotes} = context;
  const[note, setNote] = useState({etitle:"", edescription:"", etag:""})
  
  useEffect(()=>{
    getNotes();
  },[]);
  
  const updateNote = (currentNote)=>{
    ref.current.click();
    setNote({etitle: currentNote.title, edescription:currentNote.description, etag:currentNote.tag})
  }

  const ref = useRef(null)

  const handleClick = (e)=>{
    e.preventDefault();
}

const onChange = (e)=>{
    setNote({...note, [e.target.name]: e.target.value});
}
  return (
    <>
    <AddNote/>
        <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">Launch demo modal</button>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                      <div className="mb-3">
                        <label htmlFor="title" className="form-label" value={note.etitle}>Title</label>
                        <input onChange={onChange} type="text" className="form-control" id="etitle" name='etitle' aria-describedby="emailHelp"/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="description" className="form-label" value={note.edescription}>Description</label>
                        <input onChange={onChange} type="text" id="edescription" name='edescription' className="form-control"/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="tag" className="form-label" value={note.etag}>Tag</label>
                        <input onChange={onChange} type="text" id="etag" name='etag' className="form-control"/>
                      </div>
              </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
              </div>
            </div>
          </div>
        </div>
    <div className="row my-3">
      <h2>Your Notes</h2>
        {notes.map((note)=>{
          return <Noteitem key={note._id} updateNote={updateNote} note={note}/>
        })} 
      </div>
    </>
  )
}

export default Notes
