import React from "react";
import ReactDOM from "react-dom";

// Advantage of Inline Styling: If our react component/s need too change styles on the fly
// ie if the user does something or some condition is triggered
// We dont need to touch/ edit any of our existing code;
// we just need to update the properties of our custom style objects.
// Eg:
const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};

// At some point, a certain condition is triggered; then:
customStyle.color = "orange";

ReactDOM.render(
  // <h1 style="color:red">Hello World!</h1>, Incorrect (as it is now a string --> it only wokrs in HTML) !!
  // (needs to be in the form of a JS object) --> required by the 'style' property
  // <h1 style={{ color: "red" }}>Hello World!</h1>, // Correct
  <h1 style={customStyle}>Hello World!</h1>,

  document.getElementById("root")
);
