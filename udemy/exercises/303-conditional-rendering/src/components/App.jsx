import React from "react";
import Form from "./Form";


var isLoggedIn = true;
const currentTime = new Date(2024,11,1,14).getHours();

function App() {
  return <div className="container">{
        // isLoggedIn ? <h1>Hello</h1> : <Form />
        currentTime>12 && <h1> Why are you still working</h1> // sshorthand for rendering something only when LHS is true, if false, render nothing (null)
        // full version -> currentTime>12 ? <h1> Why are you still working</h1> : null;
        }
    </div>
}

export default App;
