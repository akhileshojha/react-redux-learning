import React, { useState } from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import './App.css';

function App() {
  const [items, setItems] = useState([1, 2, 3, 4, 5]);
  const addItem = () => {
    setItems([...items, items.length + 1]);
  }
  const removeItem = (item) => {
    setItems(items.filter((i) => i !== item ));
  }
  return (
    <div className="App">
      <h1>React Transition Group Example</h1>
      <button onClick={addItem}>Add Item</button>
      <TransitionGroup>
        {items.map((item) => (
          <CSSTransition key={item} timeout={500} classNames="item">
            <div onClick={() => removeItem(item)}>{item}</div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}

export default App;
