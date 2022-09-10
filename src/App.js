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
    </div>
  );
}
 
export default App;
