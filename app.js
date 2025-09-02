import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => OBJECT => HTML Element(render)

// const heading = React.createElement("h1", {id: "heading"}, "Vivek Mehto");

// console.log(heading);

// JSX is not HTML but its HTML like syntax

// JSX (transpiled before it reaches the JS ) -> Parcel uses  Babel and
// Babel transpiles the JSX into React.createElement and then into JS Object and then into HTML ELement

// JSX -> React.createElement -> JS Object -> HTML Element

const jsxHeading = <h1 id="heading">Namaste React using JSX </h1>;

console.log(jsxHeading);

// Functional Comoponent

const elem = <span>React ELement</span>;

const Title = () => (
  <h1 className="title">
    {elem}
    This is our title
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 className="heading">Namaste React using Functional Comoponent </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
