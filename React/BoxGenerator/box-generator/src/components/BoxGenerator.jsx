import React, { useState } from 'react';

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
          <div
            key={index}
            style={{
              backgroundColor: box.color,
              width: box.size,
              height: box.size,
              display: 'inline-block',
              margin: '5px',
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BoxGenerator;
