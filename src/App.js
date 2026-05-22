import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div className="App">
        <h1>Click Counter</h1>
      <main>
        <p className='info'>Click the button to increase the count:</p>
        <button onClick={handleClick} className='btn'>Click me!</button>
        <p className='count'>Count: {count}</p>
      </main>
    </div>
  );
}

export default App;
