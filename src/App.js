import React, { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DropContainer from './Component/DropContainer';
import MobileLayout from './Component/MobileLayout';
import './App.css';

function App() {
  const [items, setItems] = useState([
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
    { id: 4, text: 'Item 4' },
    { id: 5, text: 'Item 5' },
  ]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <h1>Squarespace Clone - Fluid Engine</h1>
        {isMobile ? (
          <MobileLayout items={items} setItems={setItems} />
        ) : (
          <DropContainer items={items} setItems={setItems} isMobile={isMobile} />
        )}
      </div>
    </DndProvider>
  );
}

export default App;
