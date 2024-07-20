// ExpensiveComponent.js
import React from "react";

const ExpensiveComponent = ({compute}) => {
  const result = compute();
  return <div>Result: {result}</div>;
};

export default React.memo(ExpensiveComponent);
