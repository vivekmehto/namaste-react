import React from "react";
import ReactDOM from "react-dom/client"

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", { id: "head" }, "Hello World from react"),
  React.createElement("h2", { id: "head2" }, "Hello World h2 from react"),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
 