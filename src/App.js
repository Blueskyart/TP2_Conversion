import React, { useState } from "react";

function App() {
  const [decimalNumber, setDecimalNumber] = useState("");
  const [binaryNumber, setBinaryNumber] = useState("");

  const handleChange = (number, base) => {
    if (base === 10) {
      setDecimalNumber(number);
      setBinaryNumber(decimalToBinary(number));
    } else if (base === 2) {
      setBinaryNumber(number);
      setDecimalNumber(binaryToDecimal(number));
    }
  };

  const decimalToBinary = (decimal) => {
    return (decimal >>> 0).toString(2);
  };

  const binaryToDecimal = (binary) => {
    return parseInt(binary, 2).toString(10);
  };

  return (
    <div>
      <label>
        Nombre décimal :
        <BaseNumberInput onChangeBase={(value) => handleChange(value, 10)} />
      </label>
      <br />
      <label>
        Nombre binaire :
        <BaseNumberInput onChangeBase={(value) => handleChange(value, 2)} />
      </label>
      <br />
      <div>Résultat en binaire : {binaryNumber}</div>
      <div>Résultat en décimal : {decimalNumber}</div>
    </div>
  );
}

function BaseNumberInput(props) {
  const handleChange = (e) => {
    props.onChangeBase(e.target.value);
  };

  return <input type="text" onChange={handleChange} />;
}

export default App;
