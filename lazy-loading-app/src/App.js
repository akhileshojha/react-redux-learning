import React, { Suspense, lazy } from "react";

const LazyComponent = lazy(() => import("./LazyComponent"));
function App() {
  return (
    <div className="App">
      <h1>Lazy Loading App </h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default App;
