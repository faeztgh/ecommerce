import React, { useEffect, useState } from "react";
import Navbar from "./Navabr";
import { useSelector } from "react-redux";
const NavbarContainer = () => {
    const [auth, setAuth] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const tmp = useSelector((state) => state.cartReducer);

    useEffect(() => {}, [tmp]);
    return (
        <>
            <Navbar
                cart={tmp.length}
                auth={auth}
                handleChange={handleChange}
                handleMenu={handleMenu}
                anchorEl={anchorEl}
                handleClose={handleClose}
                open={open}
            />
        </>
    );
};

export default NavbarContainer;
