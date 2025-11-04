import React, { useState } from 'react';
import './App.css';

function App() {
  // State for height, weight, and result
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');

  // Function to calculate BMI
  const calculateBMI = () => {
    if (!height || !weight) {
      alert("Please enter both height and weight!");
      return;
    } 

    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (isNaN(h) || isNaN(w)) {
      alert("Please enter valid numbers!");
      return;
    }

    // BMI formula: weight / (height in meters)^2
    const bmiValue = w / ((h / 100) ** 2);
    const roundedBmi = parseFloat(bmiValue.toFixed(2));

    // Determine status
    let bmiStatus = '';
    if (roundedBmi < 18.5) {
      bmiStatus = 'Underweight';
    } else if (roundedBmi >= 18.5 && roundedBmi < 25) {
      bmiStatus = 'Normal weight';
    } else if (roundedBmi >= 25 && roundedBmi < 30) {
      bmiStatus = 'Overweight';
    } else {
      bmiStatus = 'Obese';
    }

    setBmi(roundedBmi);
    setStatus(bmiStatus);
  };

  return (
    <div className="App">
      <div className="calculator-container">
        <h2>BMI Calculator</h2>

        <div className="input-group">
          <label>Height (cm):</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="e.g., 183"
          />
        </div>

        <div className="input-group">
          <label>Weight (kg):</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="e.g., 75"
          />
        </div>

        <button onClick={calculateBMI}>Calculate BMI</button>

        {bmi !== null && (
          <div className="result-box">
            <p>Your BMI: <strong>{bmi}</strong></p>
            <p>Status: <span className={`status ${status.toLowerCase().replace(' ', '-')}`}>{status}</span></p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;