import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, Input, InputLabel, Box, Paper } from "@material-ui/core";
import { DoubleBtn } from "../../../Buttons";
import { useHistory } from "react-router-dom";

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
}));
const Signup = () => {
    const classes = useStyles();
    const history = useHistory();
    return (
        <>
            <div className={classes.container}>
                <form className={classes.form}>
                    <Paper elevation={3} className={classes.paper}>
                        <Box>
                            <h1>Signup</h1>
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
                        </Box>
                        <Box className={classes.box}>
                            <FormControl fullWidth>
                                <InputLabel htmlFor="repPassword">
                                    Repeat Password
                                </InputLabel>
                                <Input
                                    id="repPassword"
                                    type="password"
                                    required={true}
                                />
                            </FormControl>
                        </Box>
                        <DoubleBtn
                            width="80%"
                            mainText="Choose"
                            onText="Register"
                            offText="Login"
                            offAction={() => history.push("/login")}
                        />
                    </Paper>
                </form>
            </div>
        </>
    );
};

export default Signup;
