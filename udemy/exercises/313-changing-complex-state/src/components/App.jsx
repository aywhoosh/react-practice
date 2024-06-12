import React, {useState} from "react";

function App() {

  const [text, setText] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event){
    // const newValue = event.target.value;
    // const inputName = event.target.name;
    // both of the above can be replaced by
    
    const {value,name} = event.target;
    setText( prevValue => {
      if(name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        }
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        }          
        }
      });
    }

  

  // function handleClick1(event){
  //   setHeading1(text1);
  //   event.preventDefault();
  // };
  // function handleClick2(event){
  //   setHeading2(text2)
  //   event.preventDefault();
  // };
    return <div className="container">
      <h1>Hello, {text.fName} {text.lName}</h1>
      <form>
        <input onChange={handleChange} name="fName" placeholder="First Name" 
        value={text.fName}
        />
        <input onChange={handleChange} name="lName" placeholder="Last Name" 
        value={text.lName}
        />
        <button>Submit</button>
      </form>
    </div>;
}

export default App;
