// import React, { useState, useContext } from "react";
// import noteContext from "../context/notes/noteContext";
// import "../component/AddNote"


// function Modal({closeModal}, props) {
//     const context = useContext(noteContext);
//     const { addNote } = context;

//     const [note, setnote] = useState({ title: "", description: "", tag: "" })
//     const handleClick = (e) => {
//         e.preventDefault();
//         addNote(note.title, note.description, note.tag);
//         setnote({ title: "", description: "", tag: "" })
//         props.showAlert("Note Added Successfully!", "success ");
//     }

//     const onChange = (e) => {
//         setnote({ ...note, [e.target.name]: e.target.value })
//     }

//     return (
//         <div className='modalBackground'>
//             <div className="modalContainer">
//                 {/* <button onClick={() => closeModal(false)}> X </button> */}
//                 <h1>Add a Note</h1>
//                 <form className="my-3">
//                     <div className="mb-3">
//                         <label htmlFor="title" className="form-label">
//                             Title
//                         </label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="title"
//                             name="title"
//                             aria-describedby="emailHelp"
//                             // value={note.title} is set so whenever the user adds the notes it will automatically reset the form
//                             value={note.title}
//                             onChange={onChange}
//                             minLength={3} required
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="description" className="form-label">
//                             Description
//                         </label>
//                         <textarea
//                             type="text"
//                             className="form-control addNoteDesc textbox-input"
//                             // value={note.description} is set so whenever the user adds the notes it will automatically reset the form
//                             value={note.description}
//                             onChange={onChange}
//                             id="description"
//                             name="description"
//                             rows={4}
//                             minLength={3} required
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="tag" className="form-label">
//                             Tag
//                         </label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             // value={note.tag} is set so whenever the user adds the notes it will automatically reset the form
//                             value={note.tag}
//                             onChange={onChange}
//                             id="tag"
//                             name="tag"
//                             minLength={3} required
//                         />
//                     </div>
//                     <button onClick={() => closeModal(false)} className="btn btn-primary addNoteBtn">Cancel</button>
//                     <button disabled={note.title.length < 3 || note.description.length < 3} type="submit" onClick={handleClick} className="btn btn-primary addNoteBtn">
//                         Add Note
//                     </button>
//                 </form>
//                 {/* <div className="footer">
//                     <button onClick={() => closeModal(false)}>Cancel</button>
//                     <button>Continue</button>
//                 </div> */}
//             </div>
//         </div>
//     )
// }

// export default Modal