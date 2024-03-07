import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("0");
  //  console.log(">>>>>>>>",input)

  // const handleButtonChange = (e) => {
  //   setInput(input + e.target.value);
  // };

  const handleButtonChange = (e) => {
    const inputValue = e.target.value;
    if (input === "0" && !isNaN(inputValue)) {
      setInput(inputValue);
    } else {
      setInput((prevInput) =>
        isNaN(inputValue)
          ? prevInput.replace(/^0+/, "")
          : prevInput + inputValue
      );
    }
  };

  const handleClearButton = () => {
    setInput("0");
  };

  const handleDeleteOperation = () => {
    setInput(input.slice(0, -1));
  };

  const handleOperation = (operator) => {
    if (input === "") {
      return;
    }
    const lastChar = input.slice(-1);
    if (/[\+\-\*\/\.]/.test(lastChar)) {
      const newInput = input.slice(0, -1) + operator;
      setInput(newInput);
    } else {
      setInput(input + operator);
    }
  };

  const handleTotalValue = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value.replace(/\D/g, ""));
    // console.log(e.target.value)
  };

  return (
    <div className="container ">
      <h2 className="text-center">Calculator</h2>
      <table style={{ margin: "0 auto", maxWidth: "700px", height: "450px" }}>
        <tbody>
          <tr>
            <td colSpan="3">
              <input
                type="text"
                value={input}
                className="form-control"
                onChange={handleInputChange}
              />
            </td>
            <td>
              <input
                type="button"
                value="C"
                className="btn btn-secondary btn-block"
                onClick={handleClearButton}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="button"
                value="1"
                className="btn btn-secondary btn-block"
                onClick={handleButtonChange}
              />
            </td>
            <td>
              <input
                type="button"
                value="2"
                className="btn btn-secondary btn-block"
                onClick={handleButtonChange}
              />
            </td>
            <td>
              <input
                type="button"
                value="3"
                className="btn btn-secondary btn-block"
                onClick={handleButtonChange}
              />
            </td>
            <td>
              <input
                type="button"
                value="/"
                className="btn btn-secondary btn-block"
                onClick={() => handleOperation("/")}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="button"
                value="4"
                className="btn btn-secondary btn-block"
                onClick={handleButtonChange}
              />
            </td>
            <td>
              <input
                type="button"
                value="5"
                className="btn btn-secondary btn-block"
                onClick={handleButtonChange}
              />
            </td>
            <td>
              <input
                type="button"
                value="6"
                className="btn btn-secondary btn-block"
                onClick={handleButtonChange}
              />
            </td>
            <td>
              <input
                type="button"
                value="*"
                className="btn btn-secondary btn-block"
                onClick={() => handleOperation("*")}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="button"
                value="7"
                className="btn btn-secondary btn-block"
                onClick={handleButtonChange}
              />
            </td>
            <td>
              <input
                type="button"
                value="8"
                className="btn btn-secondary btn-block"
                onClick={handleButtonChange}
              />
            </td>
            <td>
              <input
                type="button"
                value="9"
                className="btn btn-secondary btn-block"
                onClick={handleButtonChange}
              />
            </td>
            <td>
              <input
                type="button"
                value="-"
                className="btn btn-secondary btn-block"
                onClick={() => handleOperation("-")}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="button"
                value="0"
                className="btn btn-secondary btn-block"
                onClick={handleButtonChange}
              />
            </td>
            <td>
              <input
                type="button"
                value="."
                className="btn btn-secondary btn-block"
                onClick={() => handleOperation(".")}
              />
            </td>
            <td>
              <input
                type="button"
                value="+"
                className="btn btn-secondary btn-block"
                onClick={() => handleOperation("+")}
              />
            </td>
            <td>
              <input
                type="button"
                value="="
                className="btn btn-secondary btn-block"
                onClick={handleTotalValue}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="button"
                value="X"
                className="btn btn-secondary btn-block"
                onClick={handleDeleteOperation}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calculator;
