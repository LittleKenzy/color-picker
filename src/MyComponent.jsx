import React, { useState } from 'react'


const MyComponent = () => {
  const [car, setCar] = useState({
    year: 2020,
    make: 'Toyota',
    model: 'Camry',
  })

  function handleYearChange(event) {
    setCar(c => ({ ...c, year: event.target.value }))
  }

  function handleMakeChange(event) {
    setCar({ ...car, make: event.target.value })
  }

  function handleModelChange(event) {
    setCar({ ...car, model: event.target.value })
  }

  return (
    <div>
      <p>Your car is a {car.year} {car.make} {car.model}</p>

      <input type="number" name="year" value={car.year} onChange={handleYearChange} /><br />
      <input type="text" name="make" value={car.make} onChange={handleMakeChange} /><br />
      <input type="text" name="model" value={car.model} onChange={handleModelChange} /><br />
    </div>
  )
}

export default MyComponent