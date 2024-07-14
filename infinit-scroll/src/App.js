import React, { useState, useEffect, useRef } from "react";

function App() {
  const [items, setItems] = useState(Array.from({ length: 20 }));
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();
  const loadMore = () => {
    if (items.length >= 100) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setItems((prevItems) => [...prevItems, ...Array.from({ length: 20 })]);
    }, 2000);
  };

  const lastItemRef = (node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        loadMore();
      }
    });
    if (node) observer.current.observe(node);
  };
  return (
    <div>
      <h1>Infinite Scroll</h1>
      <div>
        {items.map((_, index) => (
          <div
            key={index}
            ref={index === items.length - 1 ? lastItemRef : null}
            style={{
              height: "100px",
              border: "1px solid black",
              margin: "8px 0",
              padding: "8px",
              backgroundColor: '#f5f5f5',
            }}
          >
            Item {index + 1}
          </div>
        ))}
      </div>
      {!hasMore && <p>No more items to load</p>}
    </div>
  );
}

export default App;
