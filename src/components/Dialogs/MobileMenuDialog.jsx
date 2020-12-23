import React, { useState, forwardRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: "relative",
    },
    title: {
        marginLeft: theme.spacing(2),
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
            background: "blue",
        },
    },

    navLink: {
        textDecoration: "none",
        color: "black",
        fontSize: "2em",
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
                            LOGO
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
                    <li className={classes.navLinksLi}>
                        <a className={classes.navLink} href="/">
                            Home
                        </a>
                    </li>
                    <li className={classes.navLinksLi}>
                        <a className={classes.navLink} href="/shop">
                            Shop
                        </a>
                    </li>
                    <li className={classes.navLinksLi}>
                        <a className={classes.navLink} href="/about">
                            About
                        </a>
                    </li>
                </ul>
            </Dialog>
        </div>
    );
}

export default MobileMenuDialog;
