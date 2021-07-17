import React, {useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Card from './Card/Card';
import useStyles from './styles';
import { useDispatch,useSelector } from 'react-redux';
import {listProducts} from '../../actions/actions2';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Cards = () => {

  const classes = useStyles();
  const dispatch = useDispatch();

  const productList = useSelector((state)=>state.productList);
  const {products} = productList;

useEffect(() => {
 dispatch(listProducts({}));
}, [dispatch])

  return (
    <div className ={classes.content} >
      <div className={classes.fit}>
        <Grid container justify="center" spacing={4}>
          {products.map((product) => (
            <Grid key={product._id} item xs={12} sm={6} md={4} lg={3}>
              <Card 
              product={product} 
              image = {product.image[0]}
              title = {''}
              name = {product.name}
              price ={product.price}
              rating = {product.rating}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Cards;
