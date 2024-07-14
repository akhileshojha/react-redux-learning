import React, { useState, useEffect } from "react";
import withLoading from "./withLoading";

const DataDisplay = ({ data }) => {
  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};
const DataDisplayWidthLoading = withLoading(DataDisplay);
function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setData(["Item 1", "Item 2", "Item 3"]);
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="App">
      <h1>HOC App</h1>
      <DataDisplayWidthLoading isLoading={isLoading} data={data} />
    </div>
  );
}

export default App;
