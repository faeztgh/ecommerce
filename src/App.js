import React from "react";
import "./App.css";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import Typography from "@material-ui/core/Typography";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import {
    increment,
    decrement,
    isLoggedAction,
    resetCounter,
} from "./redux/actions";

function App() {
    const useStyles = makeStyles((theme) => ({
        paper: {
            height: "100%",
            padding: theme.spacing(0),
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            background: "#2b2b2b",
            flexDirection: "column",
            borderRadius: "10px",
            boxShadow: "0 10px 20px 3px black",
        },

        root: {
            height: 350,
            padding: theme.spacing(2),
            marginTop: "30vh",
        },

        typography: {
            color: "#fff",
        },

        signUpBtn: {
            marginTop: "1rem",
        },
        resetBtn: {
            marginTop: "1rem",
        },

        count: {
            padding: "1rem 0",
            textTransform: "capitalize",
            color: "lightblue",
        },
        red: {
            color: "red",
        },

        title: {
            width: "100%",
            textAlign: "center",
            padding: "2rem 0",
            filter: "drop-shadow( 0px 5px 5px  black)",
            fontSize: "3rem",
        },
    }));

    const classes = useStyles();
    const counter = useSelector((state) => state.counterReducer);
    const isLogged = useSelector((state) => state.isLoggedReducer);

    const dispatch = useDispatch();
    // console.log(isLogged);
    return (
        <>
            <Container>
                <Grid
                    container
                    spacing={1}
                    justify="space-around"
                    alignItems="center"
                >
                    <Grid item xs={12} lg={6} className={classes.root}>
                        <h1 className={classes.title}>Redux Counter Example</h1>
                        <Paper square className={classes.paper}>
                            <Typography className={classes.typography}>
                                {isLogged
                                    ? "You Signed Up!"
                                    : "logged in successfuly!"}
                            </Typography>
                            <h1 className={classes.count}>
                                counter:
                                <span className={classes.red}>
                                  
                                    {counter}
                                </span>
                            </h1>
                            <ButtonGroup disableElevation variant="contained">
                                <Button
                                    onClick={() => dispatch(increment())}
                                    color={"primary"}
                                >
                                    Increment
                                </Button>

                                <Button
                                    onClick={() => dispatch(decrement())}
                                    color={
                                        counter >= 0 ? "secondary" : "default"
                                    }
                                >
                                    Decrement
                                </Button>
                            </ButtonGroup>
                            <Button
                                className={classes.resetBtn}
                                variant="contained"
                                onClick={() => dispatch(resetCounter())}
                                color="inherit"
                            >
                                Reset
                            </Button>
                            <Button
                                variant="outlined"
                                onClick={() => dispatch(isLoggedAction())}
                                color={"secondary"}
                                className={classes.signUpBtn}
                            >
                                {isLogged ? "signIn" : "signUp"}
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default App;
