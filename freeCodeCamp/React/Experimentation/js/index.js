"use strict";

var goatBeard = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Fear the Beard!"
  ),
  React.createElement(
    "p",
    null,
    " the p man"
  )
);

var beardTarget = document.getElementById("chin");

ReactDOM.render(goatBeard, beardTarget);

var JSX = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Hello World"
  ),
  React.createElement(
    "p",
    null,
    "Lets render this to the DOM"
  )
);
// change code below this line
var wootTime = document.getElementById("challenge-node");
ReactDOM.render(JSX, wootTime);