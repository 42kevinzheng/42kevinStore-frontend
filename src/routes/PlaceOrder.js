import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutSteps from '../components/Ship';
import { createOrder } from '../actions/actions2';

import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Scrollbars } from 'react-custom-scrollbars';
import useStyles from './styles';


export default function PlaceOrder(props) {
    const cart = useSelector((state) => state.cart);
    if (!cart.paymentMethod) {
      props.history.push('/payment');
    }
    console.log(cart)
    const orderCreate = useSelector((state) => state.orderCreate);
    const { loading, success, error, order } = orderCreate;
    const toPrice = (num) => Number(num.toFixed(2)); 
    cart.itemsPrice = toPrice(
      cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
    );
    cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10);
    cart.taxPrice = toPrice(0.15 * cart.itemsPrice);
    cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;
    const dispatch = useDispatch();
    const placeOrderHandler = () => {
      dispatch(createOrder({ ...cart, orderItems: cart.cartItems }));
    };
    useEffect(() => {
      if (success) {
        props.history.push(`/order/${order._id}`);
        dispatch({ type: 'ORDER_CREATE_RESET' });
      }
    }, [dispatch, order, props.history, success]);
    const classes = useStyles();
    return (
      <div>
        <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
        <div className="row top">
          <div className="col-2">
            <ul>
              <li>
                <div className="card card-body">
                  <h2>Shipping</h2>
                  <p>
                    <strong>Name:</strong> {cart.shippingAddress.fullName} <br />
                    <strong>Address: </strong> {cart.shippingAddress.address},
                    {cart.shippingAddress.city}, {cart.shippingAddress.postalCode}
                    ,{cart.shippingAddress.country}
                  </p>
                </div>
              </li>
              <li>
                <div className="card card-body">
                  <h2>Payment</h2>
                  <p>
                    <strong>Method:</strong> {cart.paymentMethod}
                  </p>
                </div>
              </li>
              <li>

                <div className="card card-body">
                  <h2>Order Items</h2>
                  <div style={{   
  width: 1800, 
  height: 1200,
  borderStyle: 'solid',
  borderWidth: '5'}} >
<Scrollbars >
<Grid container justify="center" spacing={1}>
                    {cart.cartItems.map((item) => (
<Grid item xs={12} sm={6} md={4} lg={3}>
<Card className={classes.root} style={{  borderStyle: 'solid',}}>
<CardMedia className={classes.media} image={item.image[0]} title={item.name} />
<CardContent className={classes.cardContent}>
<Typography gutterBottom variant="h6" component="h5">
      <Link to={`/description/${item.product}`}>{item.name}</Link> 
      </Typography>
      </CardContent>
      <Typography  gutterBottom variant="h5" component="legend">
      {item.qty} x ${item.price} = ${item.qty * item.price}
      </Typography>
        <div className={classes.cardContent}>
      <Typography gutterBottom variant="h5" component="legend" >
      ${item.price}
      </Typography>
      </div>
</Card>
</Grid>
                    ))}
</Grid>
  </Scrollbars>
</div>
                </div>
              </li>
            </ul>
          </div>

          <div className="col-1">
            <div className="card card-body">
              <ul>
                <li>
                  <h2>Order Summary</h2>
                </li>
                <li>
                  <div className="row">
                    <div>Items</div>
                    <div>${cart.itemsPrice.toFixed(2)}</div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div>Shipping</div>
                    <div>${cart.shippingPrice.toFixed(2)}</div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div>Tax</div>
                    <div>${cart.taxPrice.toFixed(2)}</div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div>
                      <strong> Order Total</strong>
                    </div>
                    <div>
                      <strong>${cart.totalPrice.toFixed(2)}</strong>
                    </div>
                  </div>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={placeOrderHandler}
                    className="primary block"
                    disabled={cart.cartItems.length === 0}
                  >
                    Place Order
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }