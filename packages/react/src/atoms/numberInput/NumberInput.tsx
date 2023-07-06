import React, { Dispatch, SetStateAction } from "react";
import { twMerge } from "tailwind-merge";

interface NumberInputProps {
  min?: number;
  number: number;
  setNumber: Dispatch<SetStateAction<number>>;
  max: number;
  limitHint?: boolean;
  mode?: string;
  className?: string
}

const NumberInput: React.FC<NumberInputProps> = ({
  number,
  setNumber,
  max,
  min = 1,
  limitHint = true,
  mode = "dark",
  className,
}) => {
  //增加
  function handleIncrement() {
    setNumber((prev: number) => prev + 1);
  }

  // 減少
  function handleDecrement() {
    setNumber((prev: number) => prev - 1);
  }
  const textStyle = mode === 'light' ? "text-black" : "text-white"
  const enableStyle = "cursor-pointer";
  const disableStyle = "cursor-not-allowed text-gray-400";


  return (
    <div className="text-center w-150">
      <div className={twMerge("flex justify-between items-center border border-solid border-gray-[#767676] rounded-xl h-30 px-10 text-lg", textStyle, className)}>
        <p
          onClick={number > min ? handleDecrement : undefined}
          className={number > min ? enableStyle : disableStyle}
        >
          -
        </p>
        <input
          className="text-center bg-transparent border-0 w-40 font-medium"
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
          className={number < max ? enableStyle : disableStyle}
        >
          +
        </p>
      </div>
      {limitHint && <p className="mt-2 mx-auto">數量限制: {max}</p>}
    </div>
  );
};

export default NumberInput;
