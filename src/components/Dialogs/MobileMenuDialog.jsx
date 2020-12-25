import React, { forwardRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: "relative",
        background: "#1f1f1f ",
    },
    title: {
        marginLeft: theme.spacing(0),
        flex: 1,
    },
    navLinks: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "column",
        listStyle: "none",
        height: "70%",
    },
    navLinksLi: {
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        "&:hover": {
            background: "#DAD4D4",
        },
    },

    navLink: {
        width: "100%",
        height: "100%",
        textDecoration: "none",
        color: "black",
        fontSize: "3em",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "0.5s",
        "&:hover": {
            fontSize: "3.2em",
            transition: "0.3s",
        },
    },
}));

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function MobileMenuDialog(props) {
    const { openMobileMenu, handleCloseMobileMenu } = props;
    const classes = useStyles();

    return (
        <div>
            <Dialog
                fullScreen
                open={openMobileMenu}
                onClose={handleCloseMobileMenu}
                TransitionComponent={Transition}
            >
                <AppBar className={classes.appBar}>
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
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleCloseMobileMenu}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <ul className={classes.navLinks}>
                    <li
                        className={classes.navLinksLi}
                        onClick={handleCloseMobileMenu}
                    >
                        <Link className={classes.navLink} to="/profile">
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <AccountCircle fontSize="large" />
                            </IconButton>
                            Profile
                        </Link>
                    </li>
                    <li
                        className={classes.navLinksLi}
                        onClick={handleCloseMobileMenu}
                    >
                        <Link className={classes.navLink} to="/">
                            Home
                        </Link>
                    </li>
                    <li
                        className={classes.navLinksLi}
                        onClick={handleCloseMobileMenu}
                    >
                        <Link className={classes.navLink} to="/shop">
                            Shop
                        </Link>
                    </li>
                    <li
                        className={classes.navLinksLi}
                        onClick={handleCloseMobileMenu}
                    >
                        <Link className={classes.navLink} to="/about">
                            About
                        </Link>
                    </li>
                </ul>
            </Dialog>
        </div>
    );
}

export default MobileMenuDialog;
