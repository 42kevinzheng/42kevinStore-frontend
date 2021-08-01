import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import { addToCart, removeFromCart } from '../actions/actions2';
import { Scrollbars } from 'react-custom-scrollbars';
import useStyles from './styles';


export default function CartScreen(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const classes = useStyles();

  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    props.history.push('/signin?redirect=shipping');
  };
  return (
    <div className="row top">
      <div className="col-2">



        <h1>Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <Link to="/">Go Shopping</Link>
        ) : (
          <ul>
     



                    <div style={{   
  width: 1800, 
  height: 1200,
  borderStyle: 'solid',
  borderWidth: '5'}} >
<Scrollbars >
<Grid container justify="center" spacing={1}>
{/* <img src={item.image[0]} alt={item.name} style={{height:300, width:300}} ></img> */}

  {cart.cartItems.map((item) => (

    <Grid item xs={12} sm={6} md={4} lg={3}>
    <Card className={classes.root} style={{  borderStyle: 'solid',}}>
    <CardMedia className={classes.media} image={item.image[0]} title={item.name} />
    <CardContent className={classes.cardContent}>
    <Typography gutterBottom variant="h6" component="h5">
          <Link to={`/description/${item.product}`}>{item.name}</Link> 
          </Typography>
          <Typography gutterBottom variant="h6" component="h5">
          <select value={item.qty} onChange={(e) =>dispatch( addToCart(item.product, Number(e.target.value)) )} >
            {[...Array(item.countInStock).keys()].map((x) => (
              <option key={x + 1} value={x + 1}>
                {x + 1} 
              </option>
            ))}
          </select>
          </Typography>
          </CardContent>
          <Typography  gutterBottom variant="h5" component="legend">
          {item.qty} x ${item.price} = ${item.qty * item.price}
          </Typography>

            <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="legend" >
          ${item.price}
          </Typography>

          <Typography gutterBottom variant="h5" component="legend" >

          <button type="button" onClick={() => removeFromCartHandler(item.product)}>
            Delete
          </button>
          </Typography>
          </div>
    </Card>
    </Grid>
  ))}
              </Grid>
  </Scrollbars>
  
</div>
          </ul>
        )}
      </div>




      <div className="col-1">
        <div className="checkoutBox">
          <ul>
            <li>
              <h2>
                Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : $
                {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
              </h2>
            </li>
            <li>
              <button
                type="button"
                onClick={checkoutHandler}
                className="primary block"
                disabled={cartItems.length === 0}
              >
                Proceed to Checkout
              </button>
            </li>
          </ul>
        </div>
      </div>


    </div>
  );
}












