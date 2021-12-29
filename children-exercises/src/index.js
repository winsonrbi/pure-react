import React from "react";
import ReactDOM from "react-dom";

function Head({ number, children }) {
  let items = React.Children.toArray(children);
  let return_items = []
  
  for(let i = 0; i < number && i < items.length; i++) {
    return_items.push(items[i]);
  }
  return (
    <div>
      {return_items}
    </div>
  );
}

function Tail({number, children}) {
 let items = React.Children.toArray(children);
 let return_items = []

 for(let i = items.length - number; i < items.length; i++) {
   return_items.push(items[i]);
 }

 return (
   <div>
     {return_items}
   </div>
 )
}

ReactDOM.render(
  <Tail number={2}>
    <p>First</p>
    <p>Second</p>
    <p>Third</p>
    <p>Fourth</p>
    <p>Fifth</p>
  </Tail>,
  document.querySelector('#root')
);