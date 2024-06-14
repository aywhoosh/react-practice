import React, { useState } from "react";

function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleChangeTitle(event) {
    setTitle(event.target.value);
  }

  function handleChangeContent(event) {
    setContent(event.target.value);
  }

  function handleSubmit(event) {
    setTitle("");
    setContent("");
    event.preventDefault();
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={handleChangeTitle} name="title" placeholder="Title" />
        <textarea value={content} onChange={handleChangeContent} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={() => {
          
          (title!="" && content!="") && props.onAdd(title, content);
        }} type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
