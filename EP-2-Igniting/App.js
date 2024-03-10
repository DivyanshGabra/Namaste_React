import React from 'react'
import ReactDOM from "react-dom/client"
const child = React.createElement("div",{id:"child"},[
    React.createElement("h1",{},"This is Namaste react!"),
    React.createElement("h2",{},"Hello World!")
]);

const parent = React.createElement("div",{id:"parent"},child);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);