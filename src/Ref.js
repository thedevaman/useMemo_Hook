import logo from './logo.svg';
import './App.css';
import { useState,useMemo } from 'react';
import React,{createRef} from 'react';

class Ref extends React.Component {
  constructor()
  {
     super();
     this.inputRef = createRef();
  }
 componentDidMount(){
  // console.warn(this.inputRef.current.value="1000")
 }
getVal()
{
console.warn(this.inputRef.current.value)
this.inputRef.current.style.color="White"
this.inputRef.current.style.backgroundColor="black"
}

render(){
  return (
    <div>
 <h3>Ref in React</h3>
 <input type="text" ref={this.inputRef}/>
 <button onClick={()=>this.getVal()}>Check ref</button>
 </div>
  );
}
}

export default Ref