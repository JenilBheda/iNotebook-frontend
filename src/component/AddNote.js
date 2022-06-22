import React, { useState, useContext, useRef } from "react";
import noteContext from "../context/notes/noteContext";
import "../component/Modal"
// import Modal from "../component/Modal";
import createIcon from "../Add Note test 5.png";

const AddNote = (props) => {
    const context = useContext(noteContext);
    const { addNote } = context;
    // const {closeModal, setCloseModal} = useState(false);
    const ref = useRef(null)
    // const refClose = useRef(null)

    // const [openModal, setOpenModal] = useState(false);

    const [note, setnote] = useState({ title: "", description: "", tag: "" })

    const handleClick = (e) => {
        // ref.current.click();
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setnote({ title: "", description: "", tag: "" })
        props.showAlert("Note Added Successfully!", "success ");
    }

    const onChange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <>
            {/* <!-- Button trigger modal --> */}
            <div ref={ref} className="createNoteIconBody">
                <div className="createNoteIconBox">
                    <button type="button" className="createBtn" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                        <img className="createNoteImage" src={createIcon} alt="" />
                    </button>
                </div>
            </div>

            {/* <!-- Modal --> */}
            <div className="modal fade " id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content  mainModal">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel1 addNote-Heading">Add Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <div className="addNote-form-div container my-3">
                                    <form className="my-3">
                                        <div className="mb-3">
                                            <label htmlFor="title" className="form-label">
                                                Title :
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="title"
                                                name="title"
                                                aria-describedby="emailHelp"
                                                // value={note.title} is set so whenever the user adds the notes it will automatically reset the form
                                                value={note.title}
                                                onChange={onChange}
                                                minLength={3} required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="description" className="form-label">
                                                Description :
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={note.description} is set so whenever the user adds the notes it will automatically reset the form
                                                value={note.description}
                                                onChange={onChange}
                                                id="description"
                                                name="description"
                                                minLength={3} required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="tag" className="form-label">
                                                Tag :
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={note.tag} is set so whenever the user adds the notes it will automatically reset the form
                                                value={note.tag}
                                                onChange={onChange}
                                                id="tag"
                                                name="tag"
                                                minLength={3} required
                                            />
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button disabled={note.title.length < 3 || note.description.length < 3} type="submit" data-bs-dismiss="modal" onClick={handleClick} className="addNoteBtn">
                                Add Note
                            </button>
                            <button type="button" className="addNoteBtn" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddNote;
