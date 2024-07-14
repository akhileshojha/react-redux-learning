import React from "react";
import { useDrag } from "react-dnd";

const DraggableItem = ({ id, text }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "ITEM",
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div
      ref={drag}
      style={{
        border: "1px solid black",
        padding: "8px",
        marginBottom: "4px",
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      {text}
    </div>
  );
};

export default DraggableItem;
