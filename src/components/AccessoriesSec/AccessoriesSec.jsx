import React from "react";
import MyButton from "../Button";
import "./accessories.css";
const AccessoriesSec = () => {
    return (
        <>
            <div className="accessories-container">
                <img
                    src={process.env.PUBLIC_URL + "/assets/accessories.jpg"}
                    alt="accessories section"
                />

                <div className="accessories-btn">
                    <MyButton
                        background="var(--khaki-gradient)"
                        href="/shop/accessories"
                    >
                        go to accessories
                    </MyButton>
                </div>
            </div>
        </>
    );
};

export default AccessoriesSec;
