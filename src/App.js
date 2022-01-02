import React, { useState,useEffect,useReducer } from 'react';

function App() {
  const countReducer = (state,action)=>{
    switch (action.type) {
      case 'add':return state+1;
      case 'minus':return state-1;
      default:return state
    }
  }

  const [num, numDispatch] = useReducer(countReducer, 0)

  let add = ()=>{
    numDispatch({type:'add'})
  }

  return (
    <div className="App">
      <div>{num}</div>
      <button onClick={add}>add</button>
    </div>
  );
}

export default App;
