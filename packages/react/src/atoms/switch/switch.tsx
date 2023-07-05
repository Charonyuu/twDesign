import React, { Dispatch, SetStateAction } from "react";
import "./index.css"
interface SwitchProps {
    isChecked: boolean;
    setIsChecked: Dispatch<SetStateAction<boolean>>;
}

const Switch: React.FC<SwitchProps> = ({ isChecked, setIsChecked }) => {
    return (
        <label htmlFor="toggle" className="flex items-center cursor-pointer">
            <input
                id="toggle"
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                className="hidden"
            />
            <span
                className={`relative w-14 h-6 ${isChecked ? "bg-blue-600" : "bg-gray-400"
                    } rounded-full transition-all duration-200 ease-linear`}
            >
                <span
                    className={`absolute left-0 top-1/2 w-8 h-8 ${isChecked ? "bg-blue-400" : "bg-white"
                        } rounded-full transform ${isChecked ? "translate-x-6" : "translate-x-0"
                        } -translate-y-1/2 transition-all duration-200 ease-linear `}
                />
            </span>
        </label>
    );
};
export default Switch