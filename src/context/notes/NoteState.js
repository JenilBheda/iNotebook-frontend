import React from "react";
// I imported NoteConext from ./noteContext so I can use it here.
import NoteContext from "./noteContext";
import { useState } from "react";

// I created a arrow function so I can create my app state and also added props because it uses {props.children}.
const NoteState = (props) => {
  const host = "https://inotebookreal.herokuapp.com"
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)

  // Add all Notes
  const getNotes = async () => {
    // TODO: API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }
    });
    const json = await response.json()
    // console.log(json)
    setNotes(json)
  }

  //   console.log("Adding a new note")
  //   const note = {
  //     "_id": "624b2c785f3b0b639abcc60761",
  //     "user": "624979ebfed2121ecf0f2433",
  //     "title": title,
  //     "description": description,
  //     "tag": tag,
  //     "date": "2022-04-04T17:35:52.552Z",
  //     "__v": 0
  //   };
  //   setNotes(notes.concat(note))
  // }

  // Add Note
  const addNote = async (title, description, tag) => {
    // TODO: API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ title, description, tag }) // body data type must match "Content-Type" header
    });

    const note = await response.json();
    setNotes(notes.concat(note));
    // console.log(json);

    // console.log("Adding a new note");
    // const note = json;
  }

  // Edit Note
  const editNote = async (id, title, description, tag) => {
    // API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ title, description, tag }) // body data type must match "Content-Type" header
    });

    const json = await response.json()
    console.log(json)

    // newNotes variable is to create a hard copy of the data so it can store and reflect to the front-end
    let newNotes = JSON.parse(JSON.stringify(notes))
    // Logic to edit in client
    // creating a forloop so the user can edit its notes
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      // if (title/description/tag) is === (id) then save it & update it on server.
      if (element._id === id) {
        // newNotes[index] is 
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    // console.log(id, notes)
    setNotes(newNotes);
  }

  // Delete Note
  const deleteNote = async (id) => {
    //API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }
    });
    const json = await response.json()
    console.log(json)

    // console.log("Deleting the note with id" + id)
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }

  // Sharwil's deletenote code
  // const deleteNote = async (id) => {
  //   const response = await fetch(`${host}/api/notes/deleteNote/${id}`, {
  //     method: "DELETE", // *GET, POST, PUT, DELETE, etc.
  //     headers: {
  //       "Content-Type": "application/json",
  //       "auth-token":
  //         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI0OTc5ZWJmZWQyMTIxZWNmMGYyNDMzIn0sImlhdCI6MTY0ODk4NDQzOH0.3QJSQWqsWcwoWy5p51yaoy8aVElUsAi7vi-Aju8lT0w",
  //     },
  //     mode: "cors", // no-cors, *cors, same-origin
  //     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  //     credentials: "same-origin", // include, *same-origin, omit
  //     redirect: "follow", // manual, *follow, error
  //     referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  //   });

  //   const json = await response.text();
  //   console.log(json);

  //   console.log("Deleting the note with id " + id);
  //   const newNotes = notes.filter((note) => {
  //     return note._id !== id;
  //   });
  //   setNotes(newNotes);
  // };


  //   I created [state, setState] so I can set the state of my component.
  // const [state, setState] = useState(s1);
  //   Used update arrow function so I can update my state under it.
  // const update = () => {
  //   Used setTimeout function so I can update my state after 1sec.
  // setTimeout(() => {
  //         setState({
  //             name: "Henil",
  //             class: "10b",
  //         });
  //     }, 1000);
  // };
  return (
    <>
      {/* <NoteContext.Provider> is a function thats provides the state to access in another component. */}
      <NoteContext.Provider value={{ notes, addNote, editNote, deleteNote, getNotes }}>{props.children}</NoteContext.Provider>
    </>
  );
};

export default NoteState;
