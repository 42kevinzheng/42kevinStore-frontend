import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import Rating from "@material-ui/lab/Rating";
import { Link } from 'react-router-dom';
import useStyles from './styles';

const GenerticCards = ({ product, onAddToCart, image, name, type, title, price, rating,dis  }) => {
  const classes = useStyles();

  if(rating >5)
  {
    rating = rating/2;
  }
  else if(rating>10)
  {
    rating = rating/3;
  }
  else if (rating>100)
  {
    rating = rating/4;
  }

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={image} title={name} />
      <CardContent>
        <div className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
						<Link to= {{ pathname:`/description/${product.id||product._id}`, 
            state: {
              product,
              image:image,
              name:name,
              title:title,
              price:price,
              dis:dis,
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
          <Rating name="half-rating" defaultValue={1} value={rating} precision={0.5} readOnly/> {rating}
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


