/**
 * <div id="parent">
 *     <div id="child">
 *         <h1>I'm h1 tag</h1>
 *         <h2>I'm h2 tag</h2>
 *     </div>
 *      <div id="child2">
 *         <h1>I'm h1 tag</h1>
 *         <h2>I'm h2 tag</h2>
 *      </div>
 * </div>
 * 
 * 
 * ReactElement(Object) => HTL(Browser understands)
 */
const parent=React.createElement("div",
    {id:"parent"},[ 
    React.createElement("div",{id:"child"},[
    React.createElement("h1",{},"I'm h1 tag"),
    React.createElement("h2",{},"I'm h2 tag"),
]),
React.createElement("div",{id:"child"},[
    React.createElement("h1",{},"I'm h1 tag"),
    React.createElement("h2",{},"I'm h2 tag"),
])]
);
//now render parent
console.log(parent);//object

const root=ReactDOM.createRoot(document.getElementById("root"));
     
root.render(parent);//render will change it to h1 tag and will put in root

/*


const heading=React.createElement("h1",
    {id:"heading",xyz:"abc"},
    "Hello World from React!!"
);
console.log(heading);//object

const root=ReactDOM.createRoot(document.getElementById("root"));
     
root.render(heading);//render will change it to h1 tag and will put in root

*/