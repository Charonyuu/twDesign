import React, { Dispatch, SetStateAction } from "react";
interface NumberInputProps {
    number: number;
    setNumber: Dispatch<SetStateAction<number>>;
    max: number;
}
declare const NumberInput: React.FC<NumberInputProps>;
export default NumberInput;
