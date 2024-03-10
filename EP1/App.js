// const heading  = React.createElement("h1",{},"Hello World! From React");
        const root = ReactDOM.createRoot(document.getElementById("root"));
//         root.render(heading);
// {} -> attributes like "id","class etc"
// heading -> JS Object not a html element
// render -> converts JS object to html tag
//  <div id = "Parent">
//         <div id = "child">
//         <h1></h1>
//         </div>
// </div> 

// to create above structure -
const child = React.createElement("div",{id : "child"},
        [
                React.createElement( "h1",{id : "head"},"I am a h1 tag"),
                React.createElement("h2",{id : "head2"},"I am h2")
        ]
);

const child2 = React.createElement("div",{id : "child"},
        [
                React.createElement( "h1",{id : "head"},"I am a h1 tag"),
                React.createElement("h2",{id : "head2"},"I am h2")
        ]
);
const child3 = React.createElement("div",{id : "child"},
        [
                React.createElement( "h1",{id : "head"},"I am a h1 tag"),
                React.createElement("h2",{id : "head2"},"I am h2"),
                React.createElement("p",{id : "para1"},"Hello World!!")
        ]
);

const parent = React.createElement("div",{id : "parent"},[child,child2,child3]);

// const root2 = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
