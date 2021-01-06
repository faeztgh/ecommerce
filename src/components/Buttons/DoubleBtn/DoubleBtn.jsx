import React from "react";
import { useState } from "react";
import "./double-btn.scss";
import Hidden from "@material-ui/core/Hidden";
import { useSelector } from "react-redux";
const DoubleBtn = (props) => {
    const {
        mainText,
        onText,
        offText,
        width,
        onAction,
        offAction,
        type,
        disabled,
    } = props;

    const scSize = useSelector((state) => state.ScSizeReducer);
    const isMobile = scSize?.width < 960 ? true : false;

    return (
        <>
            <div className="db-link" style={{ width: width }}>
                <Hidden smDown>
                    <button
                        disabled={disabled}
                        type={type}
                        onClick={offAction}
                        onMouseEnter={(e) => {
                            e.currentTarget.innerText = offText;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.innerText = isMobile
                                ? offText
                                : mainText;
                        }}
                    >
                        {isMobile ? onText : mainText}
                    </button>
                </Hidden>
                <button
                    disabled={disabled}
                    type={type}
                    onClick={onAction}
                    onMouseEnter={(e) => {
                        e.currentTarget.innerText = onText;
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.innerText = isMobile
                            ? onText
                            : mainText;
                    }}
                >
                    {isMobile ? onText : mainText}
                </button>
            </div>
        </>
    );
};

export default DoubleBtn;
