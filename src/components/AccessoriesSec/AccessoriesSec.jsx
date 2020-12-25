import React from "react";
import { Link } from "react-router-dom";
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
                    <Link to="/shop/accessories">
                        <MyButton
                            background="var(--khaki-gradient)"
                            size="large"
                            paddingSide="15"
                        >
                            go to accessories
                        </MyButton>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default AccessoriesSec;
