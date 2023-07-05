import React, { Dispatch, SetStateAction } from "react";
import "./index.css";
interface SwitchProps {
    isChecked: boolean;
    setIsChecked: Dispatch<SetStateAction<boolean>>;
}
declare const Switch: React.FC<SwitchProps>;
export default Switch;
