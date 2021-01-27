import React from "react";
import Paper from "@material-ui/core/Paper";
import { Box, Button, ButtonGroup } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "./style";

const ProductCard = (props) => {
    const {
        data,
        handleRemoveProduct,
        handleDecreaseProductCount,
        handleIncreaseProductCount,
    } = props;

    const { image, title, category, description, price, count } = data;
    const classes = useStyles();

    const scSize = useSelector((state) => state.ScSizeReducer);

    return (
        <>
            <Paper
                elevation={5}
                className={
                    scSize.width < 600 ? classes.paperCol : classes.paperRow
                }
            >
                <Box className={classes.imgWrapper}>
                    <img className={classes.img} src={image} alt={title} />
                </Box>
                <Box className={classes.descWrapper}>
                    <h3>
                        <span className={classes.title}>{title}</span>
                    </h3>
                    <h4>
                        Category:
                        <span> </span>
                        <span className={classes.category}>{category}</span>
                    </h4>
                    <h5>
                        <span className={classes.desc}>{description}</span>
                    </h5>
                    <h2>
                        Price:
                        <span className={classes.price}> {price}$</span>
                    </h2>
                </Box>
                <hr className={classes.line} />

                <Box className={classes.btnWrapper}>
                    <Box>
                        <ButtonGroup
                            color="primary"
                            aria-label="outlined primary button group "
                        >
                            <Button
                                size="small"
                                onClick={() => handleIncreaseProductCount(data)}
                            >
                                +
                            </Button>
                            <Button size="small">{count}</Button>
                            <Button
                                onClick={() => handleDecreaseProductCount(data)}
                                size="small"
                            >
                                -
                            </Button>
                        </ButtonGroup>
                    </Box>
                    <Box>
                        <Button
                            onClick={() => handleRemoveProduct(data)}
                            variant="contained"
                            size="small"
                        >
                            Remove
                        </Button>
                    </Box>
                </Box>
            </Paper>
            
        </>
    );
};

export default ProductCard;
