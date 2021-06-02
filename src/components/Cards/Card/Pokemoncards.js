import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const Pokemoncards = ({ product }) => {
    const classes = useStyles();


    return (
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={product.sprites.other.dream_world.front_default} title={product.original_title} />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {product.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              {product.types[0].type.name}
            </Typography>
          </div>
          <Typography dangerouslySetInnerHTML={{ __html: product.overview }} variant="body2" color="textSecondary" component="p" />
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton aria-label="Add to Cart" >
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
    );
  };

export default Pokemoncards
