import React, { Dispatch, SetStateAction } from "react";

interface NumberInputProps {
  number: number;
  setNumber: Dispatch<SetStateAction<number>>;
  max: number;
}

const NumberInput: React.FC<NumberInputProps> = ({
  number,
  setNumber,
  max,
}) => {
  //增加
  function handleIncrement() {
    setNumber((prev: number) => prev + 1);
  }

  // 減少
  function handleDecrement() {
    setNumber((prev: number) => prev - 1);
  }

  const enableStyle = { cursor: "pointer", color: "#fff" };
  const disableStyle = {
    cursor: "not-allowed",
    color: "#767676",
    fontSize: "20px",
  };

  return (
    <div style={{ textAlign: "center", width: "150px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          border: "1px solid #767676",
          borderRadius: "10px",
          height: "30px",
          padding: "0 10px",
        }}
      >
        <p
          onClick={number > 1 ? handleDecrement : undefined}
          style={number > 1 ? enableStyle : disableStyle}
        >
          -
        </p>
        <input
          style={{
            fontSize: "14px",
            fontWeight: "500",
            background: "transparent",
            border: 0,
            width: "40px",
            textAlign: "center",
            color: "#fff",
          }}
          value={number}
          onChange={(event) => {
            const inputNumber = parseInt(event.target.value);

            if (!isNaN(inputNumber) && inputNumber <= max && inputNumber > 0) {
              setNumber(inputNumber);
            }
          }}
        />
        <p
          onClick={number < max ? handleIncrement : undefined}
          style={number < max ? enableStyle : disableStyle}
        >
          +
        </p>
      </div>
      <p style={{ margin: "5px auto" }}>數量限制: {max}</p>
    </div>
  );
};

export default NumberInput;
