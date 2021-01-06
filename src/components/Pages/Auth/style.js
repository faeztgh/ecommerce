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
}));
