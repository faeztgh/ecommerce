import React from "react";
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
        boxShadow: "0 5px 15px black",
        transition: "0.5s",
        minWidth: "160px",

        "&:hover": {
            background: "#1f1f1f",
            // border: "1px solid red",
            color: "white",
            transition: "0.5s",
        },
    },
}));
const MyButton = (props) => {
    const {
        width,
        noBoxShadow,
        variant,
        href,
        children,
        endIcon,
        startIcon,
        size,
        mt,
        mb,
    } = props;

    const classes = useStyles();

    return (
        <>
            <Button
                endIcon={endIcon}
                startIcon={startIcon}
                href={href}
                variant={variant}
                className={classes.button}
                style={{
                    width: width,
                    background: props.background,
                    color: props.color,
                    fontSize: `${props.mySize}em`,
                    paddingLeft: `${props.paddingSide}px`,
                    paddingRight: `${props.paddingSide}px`,
                    boxShadow: `${noBoxShadow && "none"}`,
                    marginTop: `${mt}px`,
                    marginBottom: `${mb}px`,
                }}
                size={size}
            >
                {children}
            </Button>
        </>
    );
};

export default MyButton;
