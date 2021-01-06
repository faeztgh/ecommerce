import React from "react";
import { FormControl, Input, InputLabel, Box, Paper } from "@material-ui/core";
import { DoubleBtn } from "../../../Buttons";
import { Link, useHistory } from "react-router-dom";
import { useStyles } from "../style.js";
import MyButton from "../../../Buttons/Button";
import { useSelector } from "react-redux";
const Signup = () => {
    const classes = useStyles();
    const history = useHistory();

    const scSize = useSelector((state) => state.ScSizeReducer);
    return (
        <>
            <div className={classes.container}>
                <form className={classes.form}>
                    <Paper elevation={3} className={classes.paper}>
                        <Box>
                            <h1>Reset Password</h1>
                        </Box>
                        <Box className={classes.box}>
                            <FormControl fullWidth>
                                <InputLabel htmlFor="email">Email</InputLabel>
                                <Input
                                    required={true}
                                    id="email"
                                    color="primary"
                                    type="Email"
                                />
                            </FormControl>
                        </Box>

                        <DoubleBtn
                            width="80%"
                            mainText="Choose"
                            onText="Reset Password"
                            offText="Login"
                            offAction={() => history.push("/login")}
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
