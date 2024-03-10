import React from "react";
import ReactDOM from "react-dom/client";

// ReactElement -> JSObject -> HTMLELement
const heading = React.createElement("h1", { id: "head" }, "Hello using React!");

// JSX -> ReactElement -> JS Object -> HTML Element
//Since Browser's JSEngine do not understand JSX
// Parcel has a JS compiler or transpiler know as Babel
// Babel converts JSX to JS

//JSX is a HTMl like language but not HTML
// It has it's own features and characteristics that distinguish it from HTML
// It just looks like HTML
// Unlike HTML JSX uses camelCasing for it's attributes
// If u need to write multiple lines of JSX then we need to use () parenthesis

const jsxHeading =
  ((<h1 className="heading">Namaste React using JSX!</h1>),
  (<h2>Hello World</h2>));
console.log(jsxHeading);

// Components in React -> Components always have their name starting with a Capital letter
// Class Component -> Old (Not used commonly now)
// Functional Component -> New (Used extensively)

//Functional component -> a JS function that returns JSX
// two ways to write
// name should always begin with capital letters


const HeadingComponent = () => {
  return (
    <div>
      <h1>This is a functional component</h1>
    </div>
  );

  // <HeadingComponent/> -> this is syntax for using components and
  // babel converts this to JSfor browsers to understand
};
// or
const HeadingComponent2 = () => (
  // <HeadingComponent/> here it will give error
  <div>
    <HeadingComponent /> {/* here it won't */}
    <h1>This is also a functional component</h1>
  </div>
);
// above code is also called Component Composition

// we can use JS inside components using 
// "  {}  " curly brackets

const varr = 1000;
const elem = <h1>Hellllloooooooo</h1>

const Headingcomponent3 = () => ( 
  <div>
    <HeadingComponent/>
    <HeadingComponent2/>
    {HeadingComponent2()}
    {elem}
    <h1>{elem}</h1>
    <h2>{100 + 20000}</h2>
    <h2>{varr}</h2>
    <h1>Hello</h1>
  </div>
);






console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

// This is how u render a component
root.render(<Headingcomponent3 />);
