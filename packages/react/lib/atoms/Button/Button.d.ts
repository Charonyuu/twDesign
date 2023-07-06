import React from "react";
interface ButtonProps {
    children?: React.ReactNode;
    className?: string;
    svgColor?: string;
    loading?: boolean;
    loadingClass?: string;
    disabled?: boolean;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
