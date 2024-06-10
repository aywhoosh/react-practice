import React from "react";



function Form(props) {
  return(
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
       {props.show === false && (
        <input type="password" placeholder="Confirm Password"/>
       )}
      <button type="submit">{props.show === true ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;
