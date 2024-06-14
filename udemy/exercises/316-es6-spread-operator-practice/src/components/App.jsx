import React, {useState} from "react";

function App() {

  const [text,setText] = useState("");
  const def = "An Item";
  const [list,setList] = useState([]);

  
  function handleChange(event) {
    setText(event.target.value);
  };
  
  function handleClick() {
    text != ""  && setList( 
      currValue => [...currValue,text]);
    setText("")
  }

  console.log(list);

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange}type="text" value={text} placeholder="Enter text"/>
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map( (listItem, index) => <li key={index}>{listItem}</li> )}
        </ul>
      </div>
    </div>
  );
}

export default App;
