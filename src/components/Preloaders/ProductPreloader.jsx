import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    ppLoadingWrapper: {
        display: "flex",
        flexDirection: "column",
    },

    ppButtonWrapper: {
        display: "flex",

        "& *:nth-child(1)": {
            marginRight: "14%",
            float: "left",
        },
    },
}));

const PrePosts = () => {
    const size = window.innerWidth;
    const classes = useStyles();

    return (
        <>
            <div className={classes.ppLoadingWrapper}>
                <div>
                    <Skeleton
                        animation="wave"
                        variant="text"
                        width={size / 6}
                        height={size / 19}
                    />
                    <Skeleton
                        animation="wave"
                        variant="rect"
                        width={size / 6}
                        height={size / 9}
                    />
                    <Skeleton
                        animation="wave"
                        variant="text"
                        width={size / 6}
                        height={size / 34}
                    />
                </div>

                <div className={classes.ppButtonWrapper}>
                    <Skeleton
                        animation="wave"
                        variant="rect"
                        width={size / 15}
                        height={size / 35}
                    />
                    <Skeleton
                        animation="wave"
                        variant="rect"
                        width={size / 11}
                        height={size / 35}
                    />
                </div>
            </div>
        </>
    );
};

export default PrePosts;
