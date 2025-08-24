import { useState } from 'react'

function ColorPicker() {

  const [color, setColor] = useState('#ffffff'); // Default color is white

  function handleColorChange(event) {
    setColor(event.target.value);
  }

  return (
    <div className='color-picker-container'>
      <h1>Color Picker</h1>
      {/* Add your color picker implementation here */}
      <div className='color-display' style={{ backgroundColor: color }}>
        <p>Selected Color: {color}</p>
      </div>
      <label htmlFor="color-input">Select a color:</label>
      <input
        type="color"
        id="color-input"
        value={color}
        onChange={handleColorChange}
      />
    </div>
  )
}

export default ColorPicker