import React from "react";
import NoteIcon from '@mui/icons-material/Note';
function Header() {
  return (
    <header style={{
    backgroundColor: "#f5ba13",
    margin: "auto -16px",
    padding: "16px 32px",
    boxShadow: "0 0 10px 0 rgb(0 0 0 / 30%)"}}>
      <h1 style={{color:"white"}}>
        <NoteIcon sx={{color:"white"}}/> Note Keeper
      </h1>
    </header>
  );
}

export default Header;
