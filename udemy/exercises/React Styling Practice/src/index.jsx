import React from "react";
import ReactDOM from "react-dom";

const hours = new Date(2019,1,1,19).getHours();
const customStyle = {
    color: ""
};


var greeting;
if (hours>0 && hours<12){
    greeting = "Good Morning!";
    customStyle.color = "red"
} else if(hours>12 && hours<18){
    greeting = "Good Afternoon!";
    customStyle.color = "green"
} else {
    greeting = "Good Evening!";
    customStyle.color = "blue"
}

ReactDOM.render(
    <div>
        <h1 className="heading" style={customStyle}>{greeting}</h1>
    </div>
    
    
    ,document.getElementById("root"));