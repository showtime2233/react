import React, { useState,useEffect,useReducer } from 'react';

function App() {
  const [count, dispathCount] = useReducer( (state,dispath)=>{
    
  } ,0 )
  const [name, setName] = useState('jokcy')

  const handleButtonClick = useCallback(
    () => {
      dispathCount
    },
    [],
  )

  return (
    <div className="App">
      <input type="text" value={name} onChange={} />
    </div>
  );
}

export default App;
