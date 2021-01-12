import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import PersonIcon from "@material-ui/icons/Person";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import { useStyles, StyledBadge } from "./style";
import { MobileMenuDialog } from "../Dialogs";
import { Link } from "react-router-dom";

export default function MenuAppBar(props) {
    const {
        auth,
        cart,
        handleMenu,
        isMobile,
        openMobileMenu,
        handleClickOpenMobileMenu,
        handleCloseMobileMenu,
    } = props;
    const classes = useStyles();
    return (
        <>
            {isMobile ? (
                <MobileNavabr
                    classes={classes}
                    handleMenu={handleMenu}
                    cart={cart}
                    handleClickOpenMobileMenu={handleClickOpenMobileMenu}
                    openMobileMenu={openMobileMenu}
                    handleCloseMobileMenu={handleCloseMobileMenu}
                />
            ) : (
                <DesktopNavbar
                    classes={classes}
                    handleMenu={handleMenu}
                    cart={cart}
                    auth={auth}
                />
            )}
        </>
    );
}

export const MobileNavabr = (props) => {
    const {
        classes,
        handleMenu,
        cart,
        handleClickOpenMobileMenu,
        openMobileMenu,
        handleCloseMobileMenu,
    } = props;
    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h5" className={classes.title}>
                        <Link to="/">
                            <img
                                src={process.env.PUBLIC_URL + "/logo.png"}
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
                    >
                        <Link to="/cart">
                            <StyledBadge badgeContent={cart} color="secondary">
                                <LocalMallIcon />
                            </StyledBadge>
                        </Link>
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
    );
};

export const DesktopNavbar = (props) => {
    const { classes, handleMenu, cart, auth } = props;
    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/">
                            <img
                                src={process.env.PUBLIC_URL + "/logo.png"}
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
                            >
                                <Link to="/cart">
                                    <StyledBadge
                                        badgeContent={cart}
                                        color="secondary"
                                    >
                                        <LocalMallIcon />
                                    </StyledBadge>
                                </Link>
                            </IconButton>
                            <Link to="/login">
                                <IconButton
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                >
                                    <PersonIcon />
                                </IconButton>
                            </Link>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
};
