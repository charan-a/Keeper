import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [isexp, setExp] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "" 
    });
    event.preventDefault();
  }

  function changeExp(){
    setExp(true)
  }

  return (
    <div>
      <form className="create-note">
        <input
          onClick = {changeExp}
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        {isexp && (<textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />)}
        
        <Zoom in ={isexp}>
          <Fab onClick={submitNote}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
