import React, { useState } from "react";
import { stringCalculator } from "./stringCalculator";

const StringCalculatorComponent: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string>("");

  const handleCalculate = () => {
    try {
      const sum = stringCalculator(input);
      setResult(sum);
      setError("");
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError("An unknown error occurred");
      }
      setResult(null);
    }
  };

  return (
    <div>
      <h1>String Calculator</h1>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter numbers separated by commas or new lines"
      />
      <button onClick={handleCalculate}>Calculate</button>
      {result !== null && <p>Result: {result}</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
    </div>
  );
};

export default StringCalculatorComponent;
