import { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [result, setResult] = useState();

  const handleNumber1Change = (e) => {
    setNumber1(Number(e.target.value));
  };
  const handleNumber2Change = (e) => {
    setNumber2(Number(e.target.value));
  };

  const handleAddition = () => {
    setResult(number1 + number2);
  };

  return (
    <div className="calculator-container">
      <h1>useState</h1>
      <div className="form-container">
        <div className="form-group">
          <label className="form-label" htmlFor="number1">
            Number1
          </label>
          <input
            className="form-input"
            type="number"
            id="number1"
            onChange={handleNumber1Change}
            value={number1}
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="number2">
            Number2
          </label>
          <input
            className="form-input"
            type="number"
            id="number2"
            onChange={handleNumber2Change}
            value={number2}
          />
        </div>
        <button className="form-button" onClick={handleAddition}>
          Add
        </button>
        <div className="form-group">
          <label className="form-label" htmlFor="result">
            Result
          </label>
          <input
            className="form-input"
            type="number"
            id="result"
            value={result}
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
