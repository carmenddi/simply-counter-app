import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <button onClick={()=> setCount(count +1)}>Increase</button>
      <button onClick={()=> setCount(count -1)}>Decrease</button>
      <button onClick={()=> setCount(0)}>Reset</button>
    </div>
  );
}

export default App;
