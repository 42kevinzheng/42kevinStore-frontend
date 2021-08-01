import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deliverOrder, detailsOrder, payOrder } from '../actions/actions2';
import Axios from 'axios';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { PayPalButton } from 'react-paypal-button-v2';
import { Scrollbars } from 'react-custom-scrollbars';
import useStyles from './styles';

export default function OrderScreen(props) {
  const orderId = props.match.params.id;
  const classes = useStyles();

  const [sdkReady, setSdkReady] = useState(false);
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const orderPay = useSelector((state) => state.orderPay);
  const {
    loading: loadingPay,
    error: errorPay,
    success: successPay,
  } = orderPay;
  const orderDeliver = useSelector((state) => state.orderDeliver);
  const {
    loading: loadingDeliver,
    error: errorDeliver,
    success: successDeliver,
  } = orderDeliver;
  const dispatch = useDispatch();
  useEffect(() => {
    const addPayPalScript = async () => {
      const { data } = await Axios.get('/api/config/paypal');
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    if (
      !order ||
      successPay ||
      successDeliver ||
      (order && order._id !== orderId)
    ) {
      dispatch({ type: 'ORDER_PAY_RESET' });
      dispatch({ type: 'ORDER_DELIVER_RESET' });
      dispatch(detailsOrder(orderId));
    } else {
      if (!order.isPaid) {
        if (!window.paypal) {
          addPayPalScript();
        } else {
          setSdkReady(true);
        }
      }
    }
}, [dispatch, orderId, sdkReady, successPay, successDeliver, order]);

console.log('this is order ', order);

  const successPaymentHandler = (paymentResult) => {
    dispatch(payOrder(order, paymentResult));
  };
  const deliverHandler = () => {
    dispatch(deliverOrder(order._id));
  };

  return loading ? (
    <div className="loading">
        <i className="fa fa-spinner fa-spin"></i> Loading...
        </div>
  ) : error ? (
    {error}
  ) : (
    <div>
      <h1>Order {order._id}</h1>
      <div className="row top">
        <div className="col-2">
          <ul>
            <li>
              <div className="card card-body">
                <h2>Shipping</h2>
                <p>
                  <strong>Name:</strong> {order.shippingAddress.fullName} <br />
                  <strong>Address: </strong> {order.shippingAddress.address},
                  {order.shippingAddress.city},{' '}
                  {order.shippingAddress.postalCode},
                  {order.shippingAddress.country}
                </p>
              
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Payment</h2>
                <p>
                  <strong>Method:</strong> {order.paymentMethod}
                </p>
              
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Order Items</h2>
                <ul>




                <div style={{   
  width: 1800, 
  height: 1200,
  borderStyle: 'solid',
  borderWidth: '5'}} >
<Scrollbars >
<Grid container justify="center" spacing={1}>
{/* <img src={item.image[0]} alt={item.name} style={{height:300, width:300}} ></img> */}

  {order.orderItems.map((item) => (

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


                </ul>
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
                  <div>${order.itemsPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Shipping</div>
                  <div>${order.shippingPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Tax</div>
                  <div>${order.taxPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>
                    <strong> Order Total</strong>
                  </div>
                  <div>
                    <strong>${order.totalPrice.toFixed(2)}</strong>
                  </div>
                </div>
              </li>
              {!order.isPaid && (
                <li>
                  {sdkReady ? (
                    <div className="loading">
                    <i className="fa fa-spinner fa-spin"></i> Loading...
                    </div>
                  ) : (
                    <>
                      {errorPay && (
                        {errorPay}
                      )}
                      {loadingPay && <div className="loading">
        <i className="fa fa-spinner fa-spin"></i> Loading...
        </div>}

                      <PayPalButton
                        amount={order.totalPrice}
                        onSuccess={successPaymentHandler}
                      ></PayPalButton>
                    </>
                  )}
                </li>
              )}
              {userInfo.isAdmin && order.isPaid && !order.isDelivered && (
                <li>
                  {loadingDeliver && <div className="loading">
        <i className="fa fa-spinner fa-spin"></i> Loading...
        </div>}
                  {errorDeliver && (
                    {errorDeliver}
                  )}
                  <button
                    type="button"
                    className="primary block"
                    onClick={deliverHandler}
                  >
                    Deliver Order
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}