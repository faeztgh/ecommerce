import React, { useEffect, useState } from "react";
import Navbar from "./Navabr";
import { useSelector } from "react-redux";
import "./navbar.css";
const NavbarContainer = () => {
    const [auth, setAuth] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    let screenWidth;
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

    // redux
    const cartArray = useSelector((state) => state.cartReducer);
    const handleIsMobile = () => {
        if (window.innerWidth <= 600) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    // mobile menu implementation
    const [openMobileMenu, setOpenMobileMenu] = useState(false);

    const handleClickOpenMobileMenu = () => {
        setOpenMobileMenu(true);
    };

    const handleCloseMobileMenu = () => {
        setOpenMobileMenu(false);
    };

    useEffect(() => {
        window.addEventListener("load", handleIsMobile);
        window.addEventListener("resize", handleIsMobile);
        return () => {
            window.removeEventListener("resize", handleIsMobile);
            window.removeEventListener("load", handleIsMobile);
        };
    }, [cartArray, isMobile]);

    return (
        <>
            <Navbar
                cart={cartArray.length}
                auth={auth}
                handleChange={handleChange}
                handleMenu={handleMenu}
                anchorEl={anchorEl}
                handleClose={handleClose}
                open={open}
                isMobile={isMobile}
                openMobileMenu={openMobileMenu}
                handleClickOpenMobileMenu={handleClickOpenMobileMenu}
                handleCloseMobileMenu={handleCloseMobileMenu}
            />
        </>
    );
};

export default NavbarContainer;
