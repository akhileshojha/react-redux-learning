import React from "react";
import { useDrop } from "react-dnd";
const DropZone = ({ onDrop }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "ITEM",
    drop: (item) => onDrop(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  return (
    <div
      ref={drop}
      style={{
        minHeight: "200px",
        border: "1px solid black",
        backgroundColor: isOver ? "lightblue" : "white",
        padding: "8px",
      }}
    >
      Drop items here
    </div>
  );
};

export default DropZone;
