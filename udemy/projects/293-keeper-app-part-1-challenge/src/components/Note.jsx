import React from "react";

function Note() {
    return (
      <div className="note">
        <h1 contentEditable="true"> This is the note title </h1>

        <p contentEditable="true">This is the note content</p>
      </div>
    );
  }

export default Note;