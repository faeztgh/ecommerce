import React from "react";
import { useState } from "react";
import "./double-btn.scss";
import Hidden from "@material-ui/core/Hidden";
const DoubleBtn = (props) => {
    const { mainText, onText, offText, width, onAction, offAction } = props;

    const isMobile = window.innerWidth < 960 ? true : false;
   
    return (
        <>
            <div className="db-link" style={{ width: width }}>
                <Hidden smDown>
                    <span
                        onClick={offAction}
                        onMouseEnter={(e) => {
                            e.currentTarget.innerText = offText;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.innerText = mainText;
                        }}
                    >
                        {isMobile ? onText : mainText}
                    </span>
                </Hidden>
                <span
                    onClick={onAction}
                    onMouseEnter={(e) => {
                        e.currentTarget.innerText = onText;
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.innerText = mainText;
                    }}
                >
                    {isMobile ? onText : mainText}
                </span>
   
            </div>
        </>
    );
};

export default DoubleBtn;
