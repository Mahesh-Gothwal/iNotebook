import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) =>{
    const notesInitial = [
        {
          "_id": "649d1a3cf2b689bec4d5c132",
          "user": "649bc5ce70ddb8a80095202b",
          "title": "My Title",
          "description": "Please wake up early",
          "tags": "General",
          "date": "2023-06-29T05:44:28.905Z",
          "__v": 0
        },
        {
          "_id": "649d1a8e66dcb41cec1b128c",
          "user": "649bc5ce70ddb8a80095202b",
          "title": "My Title",
          "description": "Please wake up early",
          "tags": "General",
          "date": "2023-06-29T05:45:50.043Z",
          "__v": 0
        },
        {
          "_id": "649d1a8e66dcb41cec1b128d",
          "user": "649bc5ce70ddb8a80095202b",
          "title": "My Title",
          "description": "Please wake up early",
          "tags": "General",
          "date": "2023-06-29T05:45:50.043Z",
          "__v": 0
        },
        {
          "_id": "649d1a8e66dcb41cec1b128q",
          "user": "649bc5ce70ddb8a80095202b",
          "title": "My Title",
          "description": "Please wake up early",
          "tags": "General",
          "date": "2023-06-29T05:45:50.043Z",
          "__v": 0
        },
        {
          "_id": "649d1a8e66dcb41cec1b128g",
          "user": "649bc5ce70ddb8a80095202b",
          "title": "My Title",
          "description": "Please wake up early",
          "tags": "General",
          "date": "2023-06-29T05:45:50.043Z",
          "__v": 0
        },
        {
          "_id": "649d1a8e66dcb41cec1b1285",
          "user": "649bc5ce70ddb8a80095202b",
          "title": "My Title",
          "description": "Please wake up early",
          "tags": "General",
          "date": "2023-06-29T05:45:50.043Z",
          "__v": 0
        },
        {
          "_id": "649d1a8e66dcb41cec1b128j",
          "user": "649bc5ce70ddb8a80095202b",
          "title": "My Title",
          "description": "Please wake up early",
          "tags": "General",
          "date": "2023-06-29T05:45:50.043Z",
          "__v": 0
        }
      ]

      const[notes, setNotes] = useState(notesInitial)

      // Add a Note
      const addNote = (title, description, tag) =>{
        // TODO: API call
        const note = {
          "_id": "649d1a8e66dcb41cec1b128j",
          "user": "649bc5ce70ddb8a80095202b",
          "title": title,
          "description": description,
          "tags": tag,
          "date": "2023-06-29T05:45:50.043Z",
          "__v": 0
        }
        setNotes(notes.concat(note))
      }
      // Delete a Note
      const deleteNote = (id)=>{
        // TODO: API call
        console.log("Deleting a note " + id)
        const newNotes = notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes)
      }
      // Edit a Note
      const editNote = (id, title, description, tag)=>{

      }

    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;