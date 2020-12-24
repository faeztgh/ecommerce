import React from "react";
import "./button.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
const TYPE = ["outline", "contained"];
const SIZE = ["medium", "large", "small"];
const COLOR = ["dark", "light", "red", "blue", "green"];

const useStyles = makeStyles(() => ({
    button: {
        background: "white",
        color: "black",
        fontFamily: "var(--montserrat-font)",
        fontSize: "1.2em",
        borderRadius: 0,
        transition: "0.5s",

        "&:hover": {
            background: "#1f1f1f",
            // border: "1px solid red",
            color: "white",
            transition: "0.5s",
        },
    },
}));
const MyButton = (props) => {
    const { variant, href, children, endIcon, startIcon } = props;
    // const { onClick, children, icon, type, size, color } = props;
    // const checkBtnType = TYPE.includes(type) ? type : TYPE[0];
    // const checkBtnSize = SIZE.includes(size) ? size : SIZE[0];
    // const checkBtnColor = COLOR.includes(color) ? color : COLOR[0];
    const classes = useStyles();

    return (
        <>
            <Button
                endIcon={endIcon}
                startIcon={startIcon}
                href={href}
                variant={variant}
                className={classes.button}
                style={{ background: props.background, color: props.color }}
            >
                {children}
            </Button>
        </>
    );
};

export default MyButton;
