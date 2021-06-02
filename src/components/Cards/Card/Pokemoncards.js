import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import Rating from "@material-ui/lab/Rating";


import useStyles from './styles';

const Pokemoncards = ({ product }) => {
    const classes = useStyles();


    return (
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={product.sprites.other.dream_world.front_default} title={product.original_title} />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {product.name  } 
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              ${45.00}
            </Typography>
          </div>
          <Typography gutterBottom variant="h5" component="legend">
          <Rating name="half-rating" defaultValue={4} precision={0.5} readOnly/> 41 reviews
          
          </Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
       


          <IconButton aria-label="Add to Cart" >
            <AddShoppingCart fontSize='large'/>
          </IconButton>

          <Typography gutterBottom variant="h5" component="legend">
        <a href="product.html">
         Store Name
            </a>
          </Typography>

        </CardActions>
      </Card>
    );
  };

export default Pokemoncards
