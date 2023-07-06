import React, { Dispatch, SetStateAction } from "react";
import "./index.css";
import { twMerge } from "tailwind-merge";

interface SwitchProps {
    size?: string;
    customColorStyle?: any;
    disabled?: boolean;
    isChecked: boolean;
    setIsChecked: Dispatch<SetStateAction<boolean>>;
    backgroundClass?: string;
    thumbClass?: string;
}

const Switch: React.FC<SwitchProps> = ({
    backgroundClass,
    thumbClass,
    customColorStyle,
    disabled,
    isChecked,
    setIsChecked,
}) => {
    const colorStyle = customColorStyle || {
        thumb: ["bg-blue-400", "bg-gray-300"],
        background: ["bg-blue-600", "bg-gray-400"],
    };

    return (
        <label htmlFor="toggle" className="flex items-center cursor-pointer w-fit">
            <input
                id="toggle"
                type="checkbox"
                checked={isChecked}
                onChange={() => (!disabled ? setIsChecked(!isChecked) : null)}
                className="hidden"
            />
            <span
                className={twMerge(`relative w-14 h-6 ${isChecked ? colorStyle.background[0] : colorStyle.background[1]
                    } rounded-full transition-all duration-200 ease-linear`, backgroundClass)}
            >
                <span
                    className={twMerge(`absolute left-0 top-1/2 w-8 h-8 ${isChecked ? colorStyle.thumb[0] : colorStyle.thumb[1]
                        } ${isChecked ? "translate-x-6" : "translate-x-0"
                        } rounded-full transform -translate-y-1/2 transition-all duration-200 ease-linear `, thumbClass)}
                />
            </span>
        </label>
    );
};
export default Switch;
