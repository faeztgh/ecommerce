import { makeStyles } from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({
    paperRow: {
        display: "flex",
        flexDirection: "row",
        background: "white",
        width: "90%",
        padding: "20px",
        marginBottom: theme.spacing(2),
        
    },
    paperCol: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        background: "white",
        width: "80%",
        padding: "20px",
        marginBottom: theme.spacing(2),
    },

    imgWrapper: {
        position: "relative",
        padding: theme.spacing(2),
    },

    img: {
        width: "100px",
    },

    descWrapper: {
        padding: theme.spacing(2),

        "& > *": {
            marginTop: theme.spacing(1),
        },
    },

    title: {
        textTransform: "capitalize",
    },

    category: {
        textTransform: "capitalize",
        color: "gray",
    },

    price: {
        color: "red",
    },

    btnWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",

        "& > *": {
            margin: theme.spacing(1),
        },
    },

    line: {
        margin: theme.spacing(2),
    },
}));
