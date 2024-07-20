import React, { useState, useMemo } from "react";
import ExpensiveComponent from "./ExpensiveComponent";

function App() {
  const [count, setCount] = useState(0);
  const computeExpensiveValue = useMemo(() => {
    return () => {
      let sum = 0;
      for (let i = 0; i < 1000000000; i++) {
        sum += i;
      }
      return sum;
    };
  }, []);
  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Count: {count}</p>
      <ExpensiveComponent compute={computeExpensiveValue} />
    </div>
  );
}

export default App;
