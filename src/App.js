import logo from './logo.svg';
import './App.css';
import { useState,useMemo, useRef } from 'react';
import Ref from './Ref';
import User from './User';

function App() {
  const [count,setCount] = useState(0);
  const [item,setItem] = useState(10);

 const multiCountMemo =useMemo(function multicount()
  {
    console.warn("multicount")
    return count*5
  },[count])   //only count is called then only multicount run

let inputRef = useRef(null);
function updateInput()
{
  inputRef.current.value="1000"
  inputRef.current.style.color="red"
  inputRef.current.focus()
}
let [val,setVal] = useState("000");

let ref = useRef(null)
let ref2 = useRef(null)

function submitform(e){
e.preventDefault()
console.warn("inputed data 1",ref.current.value)
console.warn("inputed data 2",ref2.current.value)
let input3=document.getElementById("input3").value
console.warn("inputed data 3",input3)
}


  return (
    <div className="App">
      <h1>useMemo Hooks</h1>
      <h2>Count:{count}</h2>
      <h2>Item:{item}</h2>
      <h2>{multiCountMemo}</h2>
      <button onClick={()=>setCount(count+1)}>Update Count</button>
      <button onClick={()=>setItem(item*10)}>Update Item</button>
      <hr></hr>
      <h1>Ref</h1>
      <Ref/>
      <hr></hr>
      <User ref={inputRef}/>
      <button onClick={updateInput}>Update Input box of child comp.</button>
      <hr></hr>
      <h1>Controlled Component</h1>
      <input type="text" value={val} onChange={(e)=>setVal(e.target.value)}/>
      <hr></hr>
      <h1>Uncontrolled Component</h1>
      <form onSubmit={submitform}>
      <input type="text" ref={ref}/><br/><br/>
      <input type="text" ref={ref2}/><br/><br/>
      <input type="text" id="input3" /><br/><br/>
      <button>Submit</button>
      </form>
      <hr></hr>
      <h1>HOC</h1>
      {/* <HOCCounter />
      <HOCCounter /> */}
      <HOCred cmp={HOCCounter}/>
      <HOCgreen cmp={HOCCounter}/>
      <HOCBlue cmp={HOCCounter}/>
    </div>
  );
}

function HOCred(props){
  return <h2 style={{backgroundColor:'red',width:100}}><props.cmp/></h2>
}

function HOCgreen(props){
  return <h2 style={{backgroundColor:'green',width:100}}><props.cmp/></h2>
}

function HOCBlue(props){
  return <h2 style={{backgroundColor:'blue',width:100}}><props.cmp/></h2>
}



function HOCCounter()
{
  const[count,setCount]=useState(0)
  return<div>
    <h3>{count}</h3>
    <button onClick={()=>setCount(count+1)}>Update</button>
  </div>
}
 
export default App;
