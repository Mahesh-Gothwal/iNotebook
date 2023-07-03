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
          "_id": "649d1a8e66dcb41cec1b128c",
          "user": "649bc5ce70ddb8a80095202b",
          "title": "My Title",
          "description": "Please wake up early",
          "tags": "General",
          "date": "2023-06-29T05:45:50.043Z",
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
          "_id": "649d1a8e66dcb41cec1b128c",
          "user": "649bc5ce70ddb8a80095202b",
          "title": "My Title",
          "description": "Please wake up early",
          "tags": "General",
          "date": "2023-06-29T05:45:50.043Z",
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
          "_id": "649d1a8e66dcb41cec1b128c",
          "user": "649bc5ce70ddb8a80095202b",
          "title": "My Title",
          "description": "Please wake up early",
          "tags": "General",
          "date": "2023-06-29T05:45:50.043Z",
          "__v": 0
        }
      ]

      const[notes, setNotes] = useState(notesInitial)
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;