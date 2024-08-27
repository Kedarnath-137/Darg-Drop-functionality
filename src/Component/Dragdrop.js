
// import React from 'react';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// const items = [
//   { id: 'item-1', content: 'Item 1' },
//   { id: 'item-2', content: 'Item 2' },
//   { id: 'item-3', content: 'Item 3' },
// ];

// const MyDnDLayout = () => {
//   const onDragEnd = (result) => {
//     // Logic for rearranging items goes here
//   };

//   return (
//     <DragDropContext onDragEnd={onDragEnd}>
//       <Droppable droppableId="droppable">
//         {(provided) => (
//           <div {...provided.droppableProps} ref={provided.innerRef}>
//             {items.map((item, index) => (
//               <Draggable key={item.id} draggableId={item.id} index={index}>
//                 {(provided) => (
//                   <div
//                     ref={provided.innerRef}
//                     {...provided.draggableProps}
//                     {...provided.dragHandleProps}
//                   >
//                     {item.content}
//                   </div>
//                 )}
//               </Draggable>
//             ))}
//             {provided.placeholder}
//           </div>
//         )}
//       </Droppable>
//     </DragDropContext>
//   );
// };

// export default MyDnDLayout;
