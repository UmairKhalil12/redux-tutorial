import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <div>
        <div>
          <h1>Increase Counter</h1>
          <div>
            <button
              onClick={()=>setCounter(counter + 1)}
            > Add
            </button> &nbsp; 
            {counter} &nbsp; 
            <button
              onClick={()=>setCounter(counter - 1)}>Subtract</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
