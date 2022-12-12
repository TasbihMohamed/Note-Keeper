import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { Stack ,Button} from '@mui/material';
function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <Stack className="note" 
     align="center" sx={{backgroundColor:"white",flexDirection: 'column',
     borderRadius:2,boxShadow:2 ,m:4, maxWidth:400}}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Button align="end" sx={{alignSelf: 'flex-end' ,m:1
      }} onClick={handleClick}>
        <DeleteIcon sx={{color:"#f5ba13"}}/>
      </Button>
      </Stack>
  );
}

export default Note;
