import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

const DraggableItem = ({ id, text, index, moveItem }) => {
  const ref = React.useRef(null);

  const [, drag] = useDrag({
    type: 'ITEM',
    item: { id, index },
  });

  const [, drop] = useDrop({
    accept: 'ITEM',
    hover: (draggedItem, monitor) => {
      if (draggedItem.index === index) return;

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (draggedItem.index < index && hoverClientY < hoverMiddleY) return;
      if (draggedItem.index > index && hoverClientY > hoverMiddleY) return;

      moveItem(draggedItem.index, index);
      draggedItem.index = index;
    },
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      className="item"
    >
      {text}
    </div>
  );
};

export default DraggableItem;
