import React, { Dispatch, SetStateAction } from "react";
interface NumberInputProps {
    min?: number;
    number: number;
    setNumber: Dispatch<SetStateAction<number>>;
    max: number;
    limitHint?: boolean;
    mode?: string;
    className?: string;
}
declare const NumberInput: React.FC<NumberInputProps>;
export default NumberInput;
