// import React, {useContext, useState} from 'react';
// import noteContext from '../context/notes/noteContext';

// const UpdateNoteModal = (props) => {
  
//   const context = useContext(noteContext);
//   const { notes, getNotes, editNote } = context;
//   const [note, setnote] = useState({ id: "", etitle: "", edescription: "", etag: "" })

//   const updateNote = (currentNote) => {
//     // Where the ref is pointing it will be applied there
//     setnote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
//   }

//   // handleClick arrow function for the edit button
//   const handleClick = (e) => {
//     // console.log("Updating the note", note)
//     editNote(note.id, note.etitle, note.edescription, note.etag);
//     props.showAlert("Note Updated Successfully!", "success ");
//   }

//   // onChange arrow function is must to use so I can type text and update it.
//   const onChange = (e) => {
//     setnote({ ...note, [e.target.name]: e.target.value })
//   }

//   return (
//     <>
//     <div className='updateModalBackground'>
//         <div className="updateModalContainer">
//             <button>X</button>

//             <form className="my-3">
//                 <div className="mb-3">
//                   <label htmlFor="etitle" className="form-label">
//                     Title
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="etitle"
//                     name="etitle"
//                     value={note.etitle}
//                     aria-describedby="emailHelp"
//                     onChange={onChange}
//                     minLength={3} required
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="edescription" className="form-label">
//                     Description
//                   </label>
//                   <textarea
//                     type="text"
//                     className="form-control"
//                     onChange={onChange}
//                     value={note.edescription}
//                     id="edescription"
//                     name="edescription"
//                     rows={5}
//                     minLength={3} required
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="etag" className="form-label">
//                     Tag
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     onChange={onChange}
//                     value={note.etag}
//                     id="etag"
//                     name="etag"
//                     minLength={3} required
//                   />
//                 </div>
//               </form>
//         </div>
//     </div>
//     </>
//   )
// }

// export default UpdateNoteModal