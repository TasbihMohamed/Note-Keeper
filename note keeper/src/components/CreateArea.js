import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import { Stack ,Button} from '@mui/material';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [isExpanded, setIsExpanded] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function showAlert() {
    const div = document.createElement("div");
    div.className = "alert error";
    div.appendChild(document.createTextNode("Please add all fields."));
    const createArea = document.querySelector(".create-area");
    const form = document.querySelector(".create-note");
    createArea.insertBefore(div, form);

    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);
  }

  function submitNote(event) {
    if (note.title === "" || note.content === "") {
      showAlert();
    } else {
      props.onAdd(note);

      setNote({
        title: "",
        content: ""
      });
    }

    event.preventDefault();
  }

  function expand() {

    setIsExpanded(true);

  }

  return (
    <Stack className="create-area" align="center" sx={{flexDirection: 'column',
      maxWidth:800 ,p:3,m:2,backgroundColor:"white"}}>
      <Stack className="create-note" sx={{borderRadius:2,boxShadow:2}}>
        {isExpanded && (
          <input
            className="title"
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
            style={{border:"none" ,padding:"10px"}}
          />
        )}

        <textarea 
          className="textarea"
          name="content"
          onChange={handleChange}
          onClick={expand}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          style={{border:"none" ,padding:"10px"}}
        />
        <Zoom in={isExpanded} sx={{backgroundColor:"rgb(245, 186, 19)",alignSelf: 'flex-end' ,m:1}}>
          <Fab onClick={submitNote}>
            <AddIcon/>
          </Fab>
        </Zoom>
      </Stack>
    </Stack>
  );
}

export default CreateArea;
