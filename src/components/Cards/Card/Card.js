import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import Rating from "@material-ui/lab/Rating";
import { Link } from 'react-router-dom';
import useStyles from './styles';

const GenerticCards = ({ product, onAddToCart, image, name, type, title, price  }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={image} title={name} />
      <CardContent>
        <div className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
						<Link to= {{ pathname:`/description/`, 
            state: {
              product,
              image:image,
              name:name,
              title:title,
              price:price,
            } 
            }} > 
              {name} 
              </Link>
            </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {price}
          </Typography>
        </div>
        {/* <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" /> */}
        <Typography gutterBottom variant="h5" component="legend">
          <Rating name="half-rating" defaultValue={4} precision={0.5} readOnly/> 41 reviews
          </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart">
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

export default GenerticCards;


