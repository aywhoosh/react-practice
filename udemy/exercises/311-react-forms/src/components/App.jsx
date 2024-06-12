import React, {useState} from "react";

function App() {

  const [text, setText] = useState("");
  const [heading, setHeading] = useState("");

  function handleChange(event) {
    setText(event.target.value);
    console.log(event.target.value);
  };
  
  function handleClick(){
    setHeading(text);

    event.preventDefault(); // NEW
  };
  return (
    <div className="container">
      <h1>Hello {heading}</h1>
      <form onSubmit={handleClick}>
      <input onChange={handleChange}
      type="text" 
      placeholder="What's your name?"
      value={text}
       />
      <button  type="submit" onClick={handleClick} >Submit</button>
      </form>
    </div>
  );
}

export default App;
