import React, { Dispatch, SetStateAction } from "react";
import "./index.css";
interface SwitchProps {
    size?: string;
    customColorStyle?: any;
    disabled?: boolean;
    isChecked: boolean;
    setIsChecked: Dispatch<SetStateAction<boolean>>;
    backgroundClass?: string;
    thumbClass?: string;
}
declare const Switch: React.FC<SwitchProps>;
export default Switch;
