import React from 'react';
import DropContainer from './DropContainer';

const MobileLayout = ({ items, setItems }) => {
  return (
    <div className="mobile-container">
      <h2>Mobile Layout</h2>
      <DropContainer items={items} setItems={setItems} />
    </div>
  );
};

export default MobileLayout;
