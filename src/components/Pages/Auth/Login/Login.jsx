import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, Input, InputLabel, Box, Paper } from "@material-ui/core";
import { DoubleBtn } from "../../../Buttons";
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    container: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "150px",
    },

    form: {
        width: "100%",
        height: "100%",
        maxWidth: "500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    paper: {
        padding: " 70px 20px",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: theme.spacing(2),
    },

    box: {
        width: "80%",
        marginBottom: theme.spacing(3),
    },

    forgotPasswordWrapper: {
        color: "#0089FF",
        padding: "5px 0",
    },
}));
const Login = () => {
    const classes = useStyles();
    const history = useHistory();
    return (
        <>
            <div className={classes.container}>
                <form className={classes.form}>
                    <Paper elevation={3} className={classes.paper}>
                        <Box>
                            <h1>Login</h1>
                        </Box>
                        <Box className={classes.box}>
                            <FormControl fullWidth>
                                <InputLabel htmlFor="username">
                                    Username
                                </InputLabel>
                                <Input
                                    id="username"
                                    color="primary"
                                    required={true}
                                />
                            </FormControl>
                        </Box>
                        <Box className={classes.box}>
                            <FormControl fullWidth>
                                <InputLabel htmlFor="password">
                                    Password
                                </InputLabel>
                                <Input
                                    id="password"
                                    type="password"
                                    required={true}
                                />
                            </FormControl>
                            <Box className={classes.forgotPasswordWrapper}>
                                <Link to="/forgot-password">
                                    Forgot Password ?
                                </Link>
                            </Box>
                        </Box>

                        <DoubleBtn
                            width="80%"
                            mainText="Choose"
                            onText="Login"
                            offText="Signup"
                            offAction={() => history.push("/signup")}
                        />
                    </Paper>
                </form>
            </div>
        </>
    );
};

export default Login;
