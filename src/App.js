import logo from './logo.svg';
import './App.css';
import { useState,useMemo } from 'react';

function App() {
  const [count,setCount] = useState(0);
  const [item,setItem] = useState(10);

 const multiCountMemo =useMemo(function multicount()
  {
    console.warn("multicount")
    return count*5
  },[count])   //only count is called then only multicount run

  return (
    <div className="App">
      <h1>useMemo Hooks</h1>
      <h2>Count:{count}</h2>
      <h2>Item:{item}</h2>
      <h2>{multiCountMemo}</h2>
      <button onClick={()=>setCount(count+1)}>Update Count</button>
      <button onClick={()=>setItem(item*10)}>Update Item</button>
    </div>
  );
}

export default App;
