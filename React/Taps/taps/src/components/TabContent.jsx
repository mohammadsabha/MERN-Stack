import React, { useState } from 'react';

const TabContent = ({ items, activeTab }) => {
    const activeItem = items[activeTab];
  
    return (
      <div className="tab-content">
        {activeItem && <div className="tab-item">{activeItem.content}</div>}
      </div>
    );
  };
  

export default TabContent;  