import React, { useState, useMemo } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([1, 2, 3, 4, 5]);

  const expensiveCalculation = (items) => {
    console.log('Calculating...');
    return items.reduce((acc, item) => acc + item, 0);
  };

  const total = useMemo(() => expensiveCalculation(items), [items]);

  return (
    <div>
      <h1>useMemo Example</h1>
      <p>Total: {total}</p>
      <button onClick={() => setCount(count + 1)}>Re-render</button>
    </div>
  );
};

export default App;