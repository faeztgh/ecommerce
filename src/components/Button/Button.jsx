import React from "react";
import "./button.css";

const TYPE = ["outline", "contained"];
const SIZE = ["medium", "large", "small"];
const COLOR = ["dark", "light", "red", "blue", "green"];
const Button = (props) => {
    const { onClick, children, icon, type, size, color } = props;
    const checkBtnType = TYPE.includes(type) ? type : TYPE[0];
    const checkBtnSize = SIZE.includes(size) ? size : SIZE[0];
    const checkBtnColor = COLOR.includes(color) ? color : COLOR[0];

    return (
        <>
            <button
                className={`btn ${checkBtnType} ${checkBtnSize}`}
                onClick={onClick}
            >
                <span>{children}</span>
                {icon}
            </button>
        </>
    );
};

export default Button;
