import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) =>{
  const host = "http://localhost:5000"
    const notesInitial = {}

      const[notes, setNotes] = useState(notesInitial)

      // Get all Notes
      const getNotes = async() =>{
        // API Call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5YmM1Y2U3MGRkYjhhODAwOTUyMDJiIn0sImlhdCI6MTY4Nzk3Mzc1Nn0.aiHBy5p_ZAAo4ez5OG76WjX1N4ywT5n4ZiKPQVBLtmY"
          }
        });
        const json = await response.json()
        console.log(json)
        setNotes(json)
      }

      // Add a Note
      const addNote = async(title, description, tag) =>{
        // API Call
        const response = await fetch(`${host}/api/notes/addnote`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5YmM1Y2U3MGRkYjhhODAwOTUyMDJiIn0sImlhdCI6MTY4Nzk3Mzc1Nn0.aiHBy5p_ZAAo4ez5OG76WjX1N4ywT5n4ZiKPQVBLtmY"
          },
          body: JSON.stringify({title, description ,tag}),
        });
        const json = response.json();

        // Client
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
      const deleteNote = async(id)=>{
        // API call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5YmM1Y2U3MGRkYjhhODAwOTUyMDJiIn0sImlhdCI6MTY4Nzk3Mzc1Nn0.aiHBy5p_ZAAo4ez5OG76WjX1N4ywT5n4ZiKPQVBLtmY"
          },
        });
        const json = response.json();
        console.log(json)

        console.log("Deleting a note " + id)
        const newNotes = notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes)
      }
      // Edit a Note
      const editNote = async(id, title, description, tag)=>{
        // API Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5YmM1Y2U3MGRkYjhhODAwOTUyMDJiIn0sImlhdCI6MTY4Nzk3Mzc1Nn0.aiHBy5p_ZAAo4ez5OG76WjX1N4ywT5n4ZiKPQVBLtmY"
          },
          body: JSON.stringify({title, description ,tag}),
        });
        const json = response.json();
        
        // Login to edit in client
        for (let index = 0; index < notes.length; index++) {
          const element = notes[index];
          if(element._id === id){
            element.title = title;
            element.description = description;
            element.tag = tag;
          }
        }
      }

    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote, getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;