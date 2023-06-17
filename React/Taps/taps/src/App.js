import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import Tabs from './components/Tabs';

const App = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const items = [
    {
      label: 'Tab 1',
      content: 'This is the content for Tab 1.',
      callback: () => {
        console.log('Tab 1 clicked!');
      }
    },
    {
      label: 'Tab 2',
      content: 'This is the content for Tab 2.',
      callback: () => {
        console.log('Tab 2 clicked!');
      }
    },
    {
      label: 'Tab 3',
      content: 'This is the content for Tab 3.',
      callback: () => {
        console.log('Tab 3 clicked!');
      }
    }
  ];

  return (
    <div>
      <h1>React Tabs Example</h1>
      <Tabs items={items} activeTab={activeTab} onTabClick={handleTabClick} />
      {/* <Tabs items={items} /> */}
      <div>
        
      </div>
    </div>
  );
};

export default App;
