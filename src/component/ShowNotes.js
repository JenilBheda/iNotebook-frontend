import React from 'react'
import Notes from "./Notes";

const ShowNotes = (props) => {
    const {showAlert} = props
  return (
    <div>
      <Notes showAlert={showAlert}/>
    </div>
  );
}

export default ShowNotes