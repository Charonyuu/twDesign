import React from "react";

interface ButtonProps{
    label: string
}

const Button : React.FC<ButtonProps> = ({label}) =>{
    return <button >123213{label}</button>
}

export default Button