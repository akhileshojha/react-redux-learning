import React from 'react';
import ErrorBoundary from './ErrorBoundary';

const BuggyComponent = () => {
  throw new Error('I crashed!');
  return <div>Buggy Component</div>;
};

const App = () => {
  return (
    <div>
      <h1>Error Boundary Example</h1>
      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
    </div>
  );
};

export default App;