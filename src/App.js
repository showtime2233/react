import React, { useState,useEffect,useReducer,useMemo,useCallback ,memo} from 'react';

function App() {
  const [count, dispathCount] = useReducer( (state,action)=>{
    switch (action.type) {
      case 'add':return count+1;
      case 'minus':return count-1;
      default: return state
    }
  } , 0 )
  const [name, setName] = useState('jokcy')

  const config = useMemo(() => {
    return {
      text:`count is ${count}`,
      color:count>3?'red':'blue'
    }
  }, [count])

  const handleButtonClick = useCallback(
    () => {
      dispathCount({type:'add'})
    },
    [],
  )

  return (
    <div className="App">
      <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
      <Child config={config} onButtonClick={handleButtonClick} />
    </div>
  );
}

const Child = memo(function Child({onButtonClick,config}){
  console.log('child render');
  return (
    <button onClick={onButtonClick} style={ {color:config.color} } >
      {config.text}
    </button>
  )
})

export default App;
