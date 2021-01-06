import React from "react";
import { FormControl, Input, InputLabel, Box, Paper } from "@material-ui/core";
import { DoubleBtn } from "../../../Buttons";
import { Link, useHistory } from "react-router-dom";
import { useStyles } from "../style.js";
import { useSelector } from "react-redux";
import MyButton from "../../../Buttons/Button";

const Login = () => {
    const classes = useStyles();
    const history = useHistory();

    const scSize = useSelector((state) => state?.ScSizeReducer);

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
                        {scSize.width < 960 && (
                            <MyButton
                                width="80%"
                                noBoxShadow
                                variant="outlined"
                                mt={5}
                            >
                                <Link to="/signup">Sign up</Link>
                            </MyButton>
                        )}
                    </Paper>
                </form>
            </div>
        </>
    );
};

export default Login;
