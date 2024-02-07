// const heading = React.createElement("h1",{},"Hello World From React!!");
const root =  ReactDOM.createRoot(document.querySelector(".root"));
// root.render(heading);
// console.log(heading)


const parent = React.createElement("div",{id : "parent"},React.createElement("div",{id : "child"},React.createElement("h1",{},"I am h1 from React")))
root.render(parent);
console.log(parent);