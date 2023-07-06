import React ,{useContext, useState} from 'react'
import NoteContext from '../context/notes/NoteContext';

const AddNote = (props) => {
    const context = useContext(NoteContext);
    const {addNote} = context;

    const[note, setNote] = useState({title:"", description:"", tag:""})
    
    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title:"", description:"", tag:""});
        props.showAlert("Added Successfully", "success");
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value});
    }
  return (
    <div className='container my-3'>
      <h2>Add a Note</h2>
      <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input onChange={onChange} type="text" className="form-control" value={note.title} id="title" name='title' aria-describedby="emailHelp" minLength={5} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input onChange={onChange} type="text" value={note.description} id="description" name='description' className="form-control" minLength={5} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">Tag</label>
            <input onChange={onChange} type="text" value={note.tag} id="tag" name='tag' className="form-control"/>
          </div>
         <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
        </form>
        </div>
  )
}

export default AddNote
