import React from "react";
import ReactDOM  from "react-dom";

function Greetings() {
  return<div>
    <h1>hello world</h1>
  </div>
}

ReactDOM.render(<Greetings/>,document.getElementById("root"))