import React from "react";
import { FormControl, Input, InputLabel, Box, Paper } from "@material-ui/core";
import { DoubleBtn } from "../../../Buttons";
import { Link, useHistory } from "react-router-dom";
import { useStyles } from "../style.js";
import MyButton from "../../../Buttons/Button";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { useState } from "react";
import { signup } from "../AuthFuncs";

const Signup = () => {
    const classes = useStyles();
    const history = useHistory();
    // grab screen size from redux store
    const scSize = useSelector((state) => state.ScSizeReducer);

    // inputs refs
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    // loading signup operation
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match!");
        }

        try {
            setError("");
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            emailRef.current.value = "";
            passwordRef.current.value = "";
            passwordConfirmRef.current.value = "";
        } catch (err) {
            setError("Faild to create account!");
        }
        setLoading(false);
    };

    return (
        <>
            <div className={classes.container}>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Paper elevation={3} className={classes.paper}>
                        <Box>
                            <h1>Signup</h1>
                        </Box>
                        {error && (
                            <Box className={classes.errorWrapper}>
                                <span>{error}</span>
                            </Box>
                        )}
                        <Box className={classes.box}>
                            <FormControl fullWidth>
                                <InputLabel htmlFor="email">Email</InputLabel>
                                <Input
                                    inputRef={emailRef}
                                    required={true}
                                    id="email"
                                    color="primary"
                                    type="Email"
                                />
                            </FormControl>
                        </Box>
                        <Box className={classes.box}>
                            <FormControl fullWidth>
                                <InputLabel htmlFor="password">
                                    Password
                                </InputLabel>
                                <Input
                                    inputRef={passwordRef}
                                    id="password"
                                    type="password"
                                    required={true}
                                />
                            </FormControl>
                        </Box>
                        <Box className={classes.box}>
                            <FormControl fullWidth>
                                <InputLabel htmlFor="repPassword">
                                    Repeat Password
                                </InputLabel>
                                <Input
                                    inputRef={passwordConfirmRef}
                                    id="repPassword"
                                    type="password"
                                    required={true}
                                />
                            </FormControl>
                        </Box>
                        <DoubleBtn
                            type={"submit"}
                            width="80%"
                            mainText="Choose"
                            onText="Register"
                            offText="Login"
                            offAction={() => history.push("/login")}
                            disabled={loading}
                        />

                        {scSize.width < 960 && (
                            <MyButton
                                width="80%"
                                noBoxShadow
                                variant="outlined"
                                mt={5}
                            >
                                <Link to="/login">Login</Link>
                            </MyButton>
                        )}
                    </Paper>
                </form>
            </div>
        </>
    );
};

export default Signup;
