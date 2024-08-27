import React from 'react';
import DraggableItem from './draggableItem';

const DropContainer = ({ items, setItems, isMobile}) => {
  const moveItem = (dragIndex, hoverIndex) => {
    const updatedItems = [...items];
    const [movedItem] = updatedItems.splice(dragIndex, 1);
    updatedItems.splice(hoverIndex, 0, movedItem);
    setItems(updatedItems);
  };

  return (
    <div className="container">
        {!isMobile && <h2>Desktop Layout</h2>}
      {/* <h2>Desktop Layout</h2> */}
      <div
        style={{
          padding: '16px',
          minHeight: '200px',
          border: '2px dashed #ccc',
          borderRadius: '4px',
        }}
      >
        {items.map((item, index) => (
          <DraggableItem
            key={item.id}
            id={item.id}
            index={index}
            text={item.text}
            moveItem={moveItem}
          />
        ))}
      </div>
    </div>
  );
};

export default DropContainer;
