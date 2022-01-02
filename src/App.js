import React, { useState,useEffect,useReducer } from 'react';

function App() {
  const [count, setcount] = useState(0)

  
  useEffect(() => {
    const interval = setInterval( ()=>{
      setcount(count+1)
      // setcount(count=>count+1)
    },1000 )
    return () => {
      
    };
  }, [])

  let add = ()=>{
    setcount(10)
  }

  return (
    <div className="App">
      <div>{count}</div>
      <button onClick={add}>add</button>
    </div>
  );
}

export default App;
