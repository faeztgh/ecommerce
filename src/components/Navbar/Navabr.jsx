import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStyles, StyledBadge } from "./style";
import { MobileMenuDialog } from "../Dialogs";

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
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h5" className={classes.title}>
                                Logo
                            </Typography>
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
                    <AppBar position="fixed">
                        <Toolbar>
                            <Typography variant="h6" className={classes.title}>
                                Logo
                            </Typography>
                            <ul className="nav-links">
                                <li>
                                    <a href="/">home</a>
                                </li>
                                <li>
                                    <a href="/shop">shop</a>
                                </li>
                                <li>
                                    <a href="/about">about</a>
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
