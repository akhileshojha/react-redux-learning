import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DraggableItem from "./DraggableItem";
import DropZone from "./DropZone";

const DragDropApp = () => {
  const [items, setItems] = useState([
    { id: 1, text: "Item 1" },
    { id: 2, text: "Item 2" },
    { id: 3, text: "Item 3" },
  ]);
  const [droppedItems, setDroppedItems] = useState([]);
  const handleDrop = (id) => {
    const item = items.find((i) => i.id === id);
    if (item) {
      setDroppedItems([...droppedItems, item]);
      setItems(items.filter((i) => i.id !== id));
    }
  };
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <h1>Drag and Drop</h1>
        <div>
          {items.map((item) => {
            <DraggableItem key={item.id} id={item.id} text={item.text} />;
          })}
        </div>
        <DropZone onDrop={handleDrop} />
        <div>
          <h2>Dropped Items</h2>
          {droppedItems.map((item) => (
            <div key={item.id}>{item.text}</div>
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default DragDropApp;
