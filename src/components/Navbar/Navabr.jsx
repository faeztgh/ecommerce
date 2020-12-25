import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";

import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStyles, StyledBadge } from "./style";
import { MobileMenuDialog } from "../Dialogs";
import { Link } from "react-router-dom";

export default function MenuAppBar(props) {
    const {
        auth,
        cart,
        handleMenu,
        anchorEl,
        handleClose,
        open,
        isMobile,
        openMobileMenu,
        handleClickOpenMobileMenu,
        handleCloseMobileMenu,
    } = props;
    const classes = useStyles();
    return (
        <>
            {isMobile ? (
                <div className={classes.root}>
                    <AppBar position="fixed" className={classes.appBar}>
                        <Toolbar>
                            <Typography variant="h5" className={classes.title}>
                                <Link to="/">
                                    <img
                                        src={
                                            process.env.PUBLIC_URL + "/logo.png"
                                        }
                                        alt=""
                                        className="logo"
                                    />
                                </Link>
                            </Typography>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                                href="/cart"
                            >
                                <StyledBadge
                                    badgeContent={cart}
                                    color="secondary"
                                >
                                    <ShoppingCartIcon />
                                </StyledBadge>
                            </IconButton>

                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="menu"
                                onClick={handleClickOpenMobileMenu}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <MobileMenuDialog
                        openMobileMenu={openMobileMenu}
                        handleClickOpenMobileMenu={handleClickOpenMobileMenu}
                        handleCloseMobileMenu={handleCloseMobileMenu}
                    />
                </div>
            ) : (
                <div className={classes.root}>
                    <AppBar position="fixed" className={classes.appBar}>
                        <Toolbar>
                            <Typography variant="h6" className={classes.title}>
                                <Link to="/">
                                    <img
                                        src={
                                            process.env.PUBLIC_URL + "/logo.png"
                                        }
                                        alt=""
                                        className="logo"
                                    />
                                </Link>
                            </Typography>

                            <ul className="nav-links">
                                <li>
                                    <Link to="/">home</Link>
                                </li>
                                <li>
                                    <Link to="/shop">shop</Link>
                                </li>
                                <li>
                                    <Link to="/about">about</Link>
                                </li>
                            </ul>
                            {auth && (
                                <div>
                                    <IconButton
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={handleMenu}
                                        color="inherit"
                                        href="/cart"
                                    >
                                        <StyledBadge
                                            badgeContent={cart}
                                            color="secondary"
                                        >
                                            <ShoppingCartIcon />
                                        </StyledBadge>
                                    </IconButton>
                                    <IconButton
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={handleMenu}
                                        color="inherit"
                                    >
                                        <AccountCircle />
                                    </IconButton>
                                    <Menu
                                        id="menu-appbar"
                                        anchorEl={anchorEl}
                                        anchorOrigin={{
                                            vertical: "top",
                                            horizontal: "right",
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: "top",
                                            horizontal: "right",
                                        }}
                                        open={open}
                                        onClose={handleClose}
                                    >
                                        <MenuItem onClick={handleClose}>
                                            Profile
                                        </MenuItem>
                                        <MenuItem onClick={handleClose}>
                                            My account
                                        </MenuItem>
                                    </Menu>
                                </div>
                            )}
                        </Toolbar>
                    </AppBar>
                </div>
            )}
        </>
    );
}

export const MobileMenu = (classes) => {
    return (
        <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
        >
            <MenuIcon />
        </IconButton>
    );
};
