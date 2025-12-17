import type React from "react";

interface ButtonProps {
    textButton: string;
    classButton: string
}

const Button:React.FC<ButtonProps> = ({textButton, classButton}) => {
    return (
        <button className={classButton}>{textButton}</button>
    )
}

export default Button;