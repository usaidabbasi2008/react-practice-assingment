import { useState } from 'react';

function App() {

let [count, setCount] = useState(0)

let counter = ()=>{
  setCount( count + 1)
}

let decrement = ()=>{
  setCount( count - 1)
}
 let reset = ()=>{
  setCount(0)
}



  return (

<>
<h1>{count}</h1>

<button onClick={counter} > increament </button>
<button onClick={decrement} > decrement </button>
<button onClick={reset} > reset </button>

</>

  );
}

export default App