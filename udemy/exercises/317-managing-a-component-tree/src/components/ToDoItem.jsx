import React from "react";

function ToDoItem(props) { // stateless
    function handleClick() {}


    // triggering onchecked from App.jsx (parent) inside ToDoItem.jsx (child)
    return <div onClick={() => {
        props.onChecked(props.id);
    }}>  
        <li>{props.value}</li>
    </div>

}

export default ToDoItem;