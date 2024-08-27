// // src/App.js
// import React, { useState } from 'react';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import styled from 'styled-components';
// import './dnd.css';

// const initialItems = [
//   { id: 'item-1', content: 'Item 1' },
//   { id: 'item-2', content: 'Item 2' },
//   { id: 'item-3', content: 'Item 3' },
//   { id: 'item-4', content: 'Item 4' },
// ];

// const Container = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-around;
//   @media (max-width: 768px) {
//     flex-direction: column;
//   }
// `;

// const Item = styled.div`
//   padding: 16px;
//   margin: 8px;
//   background-color: #e0e0e0;
//   border-radius: 4px;
//   text-align: center;
//   @media (max-width: 768px) {
//     font-size: 14px;
//   }
// `;

// const Column = styled.div`
//   background-color: #f4f4f4;
//   padding: 16px;
//   border-radius: 4px;
//   width: 45%;
//   @media (max-width: 768px) {
//     width: 100%;
//     margin-bottom: 16px;
//   }
// `;

// function Kedar() {
//   const [columns, setColumns] = useState({
//     left: {
//       name: 'Left Column',
//       items: initialItems,
//     },
//     right: {
//       name: 'Right Column',
//       items: [],
//     },
//   });

//   const onDragEnd = (result) => {
//     if (!result.destination) return;

//     const { source, destination } = result;

//     const sourceColumn = columns[source.droppableId];
//     const destColumn = columns[destination.droppableId];

//     const sourceItems = [...sourceColumn.items];
//     const destItems = [...destColumn.items];

//     const [removed] = sourceItems.splice(source.index, 1);
//     destItems.splice(destination.index, 0, removed);

//     setColumns({
//       ...columns,
//       [source.droppableId]: {
//         ...sourceColumn,
//         items: sourceItems,
//       },
//       [destination.droppableId]: {
//         ...destColumn,
//         items: destItems,
//       },
//     });
//   };

//   return (
//     <div className="App">
//       <h1>Fluid Engine Clone</h1>
//       <DragDropContext onDragEnd={onDragEnd}>
//         <Container>
//           {Object.entries(columns).map(([columnId, column], index) => (
//             <Droppable key={columnId} droppableId={columnId}>
//               {(provided) => (
//                 <Column
//                   ref={provided.innerRef}
//                   {...provided.droppableProps}
//                 >
//                   <h2>{column.name}</h2>
//                   {column.items.map((item, index) => (
//                     <Draggable
//                       key={item.id}
//                       draggableId={item.id}
//                       index={index}
//                     >
//                       {(provided) => (
//                         <Item
//                           ref={provided.innerRef}
//                           {...provided.draggableProps}
//                           {...provided.dragHandleProps}
//                         >
//                           {item.content}
//                         </Item>
//                       )}
//                     </Draggable>
//                   ))}
//                   {provided.placeholder}
//                 </Column>
//               )}
//             </Droppable>
//           ))}
//         </Container>
//       </DragDropContext>
//     </div>
//   );
// }

// export default Kedar;
