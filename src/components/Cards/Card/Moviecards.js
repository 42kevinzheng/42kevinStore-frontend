import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import Rating from "@material-ui/lab/Rating";


import useStyles from './styles';

const Moviecards = ({ product }) => {
  const classes = useStyles();
  const img_500 = "https://image.tmdb.org/t/p/w500"
  return (
    <Card className={classes.root}>
      <img  className={classes.media} src={`${img_500}${product.poster_path}`} title={product.original_title} />
      
      <CardContent>



        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.title}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {product.vote_average}
          </Typography>
        </div>

        <Typography variant="subtitle1" component="legend">
          <Rating name="half-rating" defaultValue={4} precision={0.5} readOnly/> 41 reviews
        </Typography>
        


      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Moviecards;