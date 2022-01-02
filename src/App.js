import React, { useState,useEffect,useReducer } from 'react';

function App() {
  const [count, setcount] = useState(0)

  const countReducer = (state,action)=>{
    switch (action.type) {
      case 'add':return state+1;
      case 'minus':return state-1;
      default:return state
    }
  }

  const [num, numDispatch] = useReducer(countReducer, 0)
  
  useEffect(() => {
    // const interval = setInterval( ()=>{
    //   setcount(count+1)
    // },1000 )
    return () => {
      
    };
  }, [])

  let add = ()=>{
    numDispatch({type:'add'})
  }

  return (
    <div className="App">
      {num}
      <button onClick={add}>add</button>
    </div>
  );
}

export default App;
