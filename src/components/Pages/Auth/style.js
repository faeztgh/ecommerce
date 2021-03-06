import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
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

    errorWrapper: {
        width: "80%",
        margin: "15px 0",
        justifyContent: "center",
        /*custome style for alert error */

        // color: "white",
        // padding: "15px 10px",
        // background: "#FF416C",
        // borderRadius: "5px",
        // display: "flex",
        // alignItems: "center",
        // fontWeight: "bold",
        // fontSize: "1.2rem",

        "& > *": {
            filter: "drop-shadow(0px 3px 2px  black)",
        },
    },

    successWrapper: {
        width: "80%",
        margin: "15px 0",
        justifyContent: "center",
        /*custome style for alert success */
        
        // padding: "15px 10px",
        // background: "#4BB543",
        // borderRadius: "5px",
        // display: "flex",
        // alignItems: "center",
        // fontWeight: "bold",
        // fontSize: "1.2rem",
        // color: "white",

        "& > *": {
            filter: "drop-shadow(0px 3px 2px  black)",
        },
    },

    link: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
}));
