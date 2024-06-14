import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

const test = {
    name: "ayush",
    surname: "jain"
};

const test2 = {...test};
test2.name = "blank";
console.log(test2);
