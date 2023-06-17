import React, { useState } from 'react';
import Box from './Box';

const BoxGenerator = () => {
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [boxes, setBoxes] = useState([]);

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (color.trim() === '' || size.trim() === '') {
      return;
    }

    const newBox = {
      color: color.trim(),
      size: size.trim(),
    };

    setBoxes((prevBoxes) => [...prevBoxes, newBox]);
    setColor('');
    setSize('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Color:
          <input type="text" value={color} onChange={handleColorChange} />
        </label>
        <label>
          Size:
          <input type="text" value={size} onChange={handleSizeChange} />
        </label>
        <button type="submit">Add Box</button>
      </form>

      <div>
        {boxes.map((box, index) => (
          <Box index={index} box={box}/>
        ))}
      </div>
    </div>
  );
};

export default BoxGenerator;
