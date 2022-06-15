import React, { useContext} from 'react';
import noteContext from '../context/notes/noteContext';

const NoteItem = (props) => {
    const context = useContext(noteContext);
    const { note, updateNote } = props;
    const { deleteNote } = context;
    return (
        <>
            {/* <div className='yourNotesBody' style={{}}> */}
            <div className="col-md-3 ynBody" >
                <div className="card" >
                    <div className="card-body" style={{ height: "190px", marginBottom: "1rem" }}>
                        <h5 className="card-title noteTitle">{note.title}</h5>
                        <p className="card-text noteDescription">{note.description}</p>
                    </div>
                    <div className="faIconBody">
                        <div className="faIconHover">
                            <i className="fa-solid fa-pen-to-square editNote position-absolute top-0 translate-middle" onClick={() => { updateNote(note); }} ></i>
                            <i className="fa-solid fa-trash position-absolute top-0 translate-middle deleteIcon" onClick={() => { deleteNote(note._id); props.showAlert("Note Deleted Successfully", "success ") }}></i>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}

        </>
    )
}

export default NoteItem