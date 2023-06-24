import React, { useState } from "react";
import "./App.css";
import Male from "./Male";
import Female from "./Female";
import GaugeChart from "./Gaugechart";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmicalulation, setBmicalulation] = useState("");
  const [isGenderSelected, setIsGenderSelected] = useState(false);
  const [showGenderError, setShowGenderError] = useState(false);
  const [inputError, setInputError] = useState("");
  const [gender, setGender] = useState("");
  const [bmiper, setbmiper] = useState("");

  function calculateBMI() {
    const weightInKg = parseFloat(weight);
    const heightInM = parseFloat(height) / 100; // Convert height from cm to m
    const bmi = weightInKg / (heightInM * heightInM);
    return bmi.toFixed(2); // Return BMI rounded to two decimal places
  }

  const handleCalculateClick = () => {
    const validHeight = parseFloat(height);
    const validWeight = parseFloat(weight);

    if (isNaN(validHeight) || isNaN(validWeight)) {
      setInputError("Please fill in all the required fields.");
      setShowGenderError(false);
      return;
    }

    if (validHeight <= 0 || validWeight <= 0) {
      setInputError("Height and weight must be greater than zero.");
      setShowGenderError(false);
      return;
    }

    if (!isGenderSelected) {
      setInputError("");
      setShowGenderError(true);
      return;
    }

    const bmi = calculateBMI();

    console.log("BMI is", bmi);

    if (gender === "male") {
      console.log("Gender", gender);
      if (bmi < 18.5) {
        setbmiper(0.05);

        setBmicalulation("Underweight(M)");
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        setbmiper(0.5);
        setBmicalulation("Normal weight(M)");
      } else if (bmi >= 25 && bmi <= 29.9) {
        setbmiper(0.7);
        setBmicalulation("Overweight(M)");
      } else {
        setbmiper(0.9);
        console.log("BMI is 30 or greater");
        setBmicalulation("BMI is 30 or greater(M)");
      }
    } else {
      console.log("Gender", gender);
      if (bmi < 20.5) {
        console.log("Underweight");
        setBmicalulation("Underweight(F)");
      } else if (bmi >= 20.3 && bmi <= 25.9) {
        console.log("Normal weight");
        setBmicalulation("Normal weight(F)");
      } else if (bmi >= 27 && bmi <= 31.9) {
        console.log("Overweight");
        setBmicalulation("Overweight(F)");
      } else {
        console.log("BMI is 30 or greater");
        setBmicalulation("BMI is 32 or greate(F)");
      }
    }
  };

  const handleGenderChange = (e) => {
    setIsGenderSelected(e.target.value !== "");
    setGender(e.target.value);
    setShowGenderError(false);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
    setInputError("");
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
    setInputError("");
  };

  return (
    <div className="container">
      <div className="box">
        <h3>Calculate BMI</h3>
        <input
          type="number"
          placeholder="Enter your height"
          className="input-field"
          value={height}
          onChange={handleHeightChange}
          required
        />
        <br />
        <input
          type="number"
          placeholder="Enter your weight"
          className="input-field"
          value={weight}
          onChange={handleWeightChange}
          required
        />
        <select id="gender" onChange={handleGenderChange} required>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <button id="btn" onClick={handleCalculateClick}>
          Calculate
        </button>
        {inputError && <p className="error">{inputError}</p>}
        {showGenderError && !isGenderSelected && (
          <p className="error">Please select the gender</p>
        )}
        {isGenderSelected === "male" && isGenderSelected ? (
          <>
            <Male bmicalulation={bmicalulation} />
            <GaugeChart bmiper={bmiper} />
          </>
        ) : (
          <>
            <Female bmicalulation={bmicalulation} />
            <GaugeChart bmiper={bmiper} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
