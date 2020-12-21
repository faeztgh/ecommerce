import { makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: "inherit",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));


export const StyledBadge = withStyles((theme) => ({
    badge: {
        "& > *": {
            margin: theme.spacing(1),
        },
    },
}))(Badge);