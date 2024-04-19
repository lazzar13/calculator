import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [operator, setOperator] = useState("");

  function handleNumber(num) {
    if (input === "0" && num === 0) return;
    setInput((inputPre) => inputPre === "0" ? String(num) : inputPre + num);
  }

  function handleOperator(op) {
    if (input === "") return;
    if (operator !== "") {
      handleEqual();
    }
    setOperator(op);
    setResult(input);
    setInput("");
  }

  function handleEqual() {
    if (input === "") return;
    let res;
    switch (operator) {
      case "+":
        res = parseFloat(result) + parseFloat(input);
        break;
      case "-":
        res = parseFloat(result) - parseFloat(input);
        break;
      case "×":
        res = parseFloat(result) * parseFloat(input);
        break;
      case "÷":
        res = parseFloat(result) / parseFloat(input);
        break;
      default:
        res = input;
    }
    setInput(res.toString());
    setResult("");
    setOperator("");
  }

  function handleClear() {
    setInput("");
    setResult("");
    setOperator("");
  }

  return (
    <div className="calculator">
      <div className="display">
        {result} {operator} {input}
      </div>
      <div className="buttons">
        <button className="number" onClick={() => handleNumber(7)}>7</button>
        <button className="number" onClick={() => handleNumber(8)}>8</button>
        <button className="number" onClick={() => handleNumber(9)}>9</button>
        <button className="operation" onClick={() => handleOperator("+")}>+</button>
        <button className="number" onClick={() => handleNumber(4)}>4</button>
        <button className="number" onClick={() => handleNumber(5)}>5</button>
        <button className="number" onClick={() => handleNumber(6)}>6</button>
        <button className="operation" onClick={() => handleOperator("-")}>-</button>
        <button className="number" onClick={() => handleNumber(1)}>1</button>
        <button className="number" onClick={() => handleNumber(2)}>2</button>
        <button className="number" onClick={() => handleNumber(3)}>3</button>
        <button className="operation" onClick={() => handleOperator("×")}>×</button>
        <button className="clear" onClick={handleClear}>C</button>
        <button className="number" onClick={() => handleNumber(0)}>0</button>
        <button className="equal" onClick={handleEqual}>=</button>
        <button className="operation" onClick={() => handleOperator("÷")}>÷</button>
      </div>
    </div>
  );
}

export default App;
