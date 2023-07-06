import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
    children?: React.ReactNode;
    className?: string;
    svgColor?: string;
    loading?: boolean;
    loadingClass?: string;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    className,
    children,
    loading,
    loadingClass,
    disabled = false,
    svgColor
}) => {
    const disabledStyle = disabled && "bg-gray-300 cursor-not-allowed"
    return (
        <button
            className={twMerge(`py-1 px-5 bg-blue-400 text-white rounded-lg flex items-center`, disabledStyle, className)}
            disabled={disabled}
        >
            {loading && (
                <div className="mr-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="26px"
                        height="26px"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="xMidYMid"
                        className={twMerge(`mr-1`, loadingClass)}
                    >
                        <path
                            d="M21 50A29 29 0 0 0 79 50A29 33.6 0 0 1 21 50"
                            fill={svgColor || "white"}
                            stroke="none"
                        >
                            <animateTransform
                                attributeName="transform"
                                type="rotate"
                                dur="1s"
                                repeatCount="indefinite"
                                keyTimes="0;1"
                                values="0 50 50.55;360 50 50.55"
                            />
                        </path>
                    </svg>
                </div>
            )}
            {children}
        </button>
    );
};

export default Button;
