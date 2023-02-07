import React from "react";
// function Greet(){
//   return <h1>Hello lina kutak</h1>
// }
const Greet = (props) => {
  return (<div><h1>Hello {props.name} vs {props.heroName}</h1>{props.children}</div>)
}
export default Greet;