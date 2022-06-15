import React, { useState, useContext, useEffect, useRef } from 'react';
import noteContext from '../context/notes/noteContext';
import AddNote from './AddNote';
import NoteItem from './NoteItem';
import { useNavigate } from 'react-router-dom';

const Notes = (props) => {
  const context = useContext(noteContext);
  let navigate = useNavigate();
  const { notes, getNotes, editNote } = context;
  useEffect(() => {
    if (localStorage.getItem('token')) {
      getNotes();
    }
    else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, [])
  // The (ref) value is compulsory to use modal view
  const ref = useRef(null)
  const refClose = useRef(null)
  const [note, setnote] = useState({ id: "", etitle: "", edescription: "", etag: "" })

  const updateNote = (currentNote) => {
    // Where the ref is pointing it will be applied there
    ref.current.click();
    setnote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
  }

  // handleClick arrow function for the edit button
  const handleClick = (e) => {
    // console.log("Updating the note", note)
    editNote(note.id, note.etitle, note.edescription, note.etag);
    refClose.current.click();
    props.showAlert("Note Updated Successfully!", "success ");
  }

  // onChange arrow function is must to use so I can type text and update it.
  const onChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value })
  }

  return (
    <>
      <AddNote showAlert={props.showAlert} />

      {/* Custom Update Modal */}
      {/* <div className='updateModalBackground'>
         <div className="updateModalContainer">
             <button onClick={() => closeUpModal(false)}>X</button>
             <form className="my-3">
                 <div className="mb-3">
                   <label htmlFor="etitle" className="form-label">
                     Title
                   </label>
                   <input
                     type="text"
                     className="form-control"
                     id="etitle"
                     name="etitle"
                     value={note.etitle}
                     aria-describedby="emailHelp"
                     onChange={onChange}
                     minLength={3} required
                   />
                 </div>
                 <div className="mb-3">
                   <label htmlFor="edescription" className="form-label">
                     Description
                   </label>
                   <textarea
                     type="text"
                     className="form-control"
                     onChange={onChange}
                     value={note.edescription}
                     id="edescription"
                     name="edescription"
                     rows={5}
                     minLength={3} required
                   />
                 </div>
                 <div className="mb-3">
                   <label htmlFor="etag" className="form-label">
                     Tag
                   </label>
                   <input
                     type="text"
                     className="form-control"
                     onChange={onChange}
                     value={note.etag}
                     id="etag"
                     name="etag"
                     minLength={3} required
                   />
                 </div>
                 <div className="modal-footer">
              <button onClick={() => closeUpModal(false)} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button disabled={note.etitle.length < 3 || note.edescription.length < 3} onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
            </div>
               </form>
         </div>
     </div> */}

      {/* Button of the modal */}
      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal2">
      </button>
      <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content updateMainBody" >
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel2">Update Note</h5>
              {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
            </div>
            {/* It will open in Modal view for the updating notes. It is a form of (etitle, edescription, etag) */}
            <div className="modal-body updateNote-form-div">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">
                    Title :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    value={note.etitle}
                    aria-describedby="emailHelp"
                    onChange={onChange}
                    minLength={3} required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">
                    Description :
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    onChange={onChange}
                    value={note.edescription}
                    id="edescription"
                    name="edescription"
                    rows={5}
                    minLength={3} required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="etag" className="form-label">
                    Tag :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={onChange}
                    value={note.etag}
                    id="etag"
                    name="etag"
                    minLength={3} required
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="updateNoteBtn" data-bs-dismiss="modal">Close</button>
              <button disabled={note.etitle.length < 3 || note.edescription.length < 3} onClick={handleClick} type="button" className="updateNoteBtn">Update Note</button>
            </div>
          </div>
        </div>
      </div>

      <div className="yourNoteItems">
        <div className="row yournoteH">
          <h2  className='notesHeading'>Your Notes</h2>
          <div className="notescontainer">
            {notes.length === 0 && 'No notes to display'}
          </div>
          {/* The props is called here that are used in another component so i can access it here */}
          {notes.map((note) => {
            return <NoteItem key={note._id} updateNote={updateNote} showAlert={props.showAlert} note={note} />;
          })}
        </div>
      </div>
    </>
  )
}

export default Notes