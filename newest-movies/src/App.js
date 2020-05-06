import React, { useState } from 'react';



function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click Me 😜</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <p>You have clicked {count} times</p>
      <button onClick={() => setCount(count * 2)}> x2 clicks</button>
      
    </div>
  );
}

export default App;
