import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import Rating from "@material-ui/lab/Rating";
import { Link } from 'react-router-dom';
import { useHistory } from "react-router";
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../actions/actions2';


const GenerticCards = ({ product, image, name, price, rating}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  // const history = useHistory();
  const _id =  product._id;

  const sellerId = product.seller || '00000';
  const sellerName =  sellerId.seller || "none";

  const addToCartHandler = () => {
    dispatch(addToCart(_id, 1));
  };

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={image} title={name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
                <Link to= {{ pathname:`/description/${product.id||product._id}`}}> 
                  {name} 
                </Link>
            </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            ${price}
          </Typography>
        </div>
        <Typography gutterBottom variant="h5" component="legend">
          <Rating name="half-rating" defaultValue={1} value={rating} precision={0.5} readOnly/> {rating}
          </Typography>
      </CardContent>

      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart"  onClick={addToCartHandler} 
>
        <AddShoppingCart
        fontSize='large' 
        />
        </IconButton>
        <Typography gutterBottom variant="h5" component="legend">
            <Link to={`/seller/${sellerId._id}`}>
          {sellerName.name || '[Store Name]'}
            </Link>
          </Typography>
      </CardActions>
    </Card>
  );
};

export default GenerticCards;


