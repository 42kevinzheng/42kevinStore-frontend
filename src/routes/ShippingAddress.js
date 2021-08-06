import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../actions/actions2';
import CheckoutSteps from '../components/Ship';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import useStyles from './styles';
import Grid from '@material-ui/core/Grid';

export default function ShippingAddress(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  if (!userInfo) {
    props.history.push('/signin');
  }
  const classes = useStyles();
  const [firstName, setFirstName] = useState(shippingAddress.firstName);
  const [lastName, setLastName] = useState(shippingAddress.lastName);
  const [email,setEmail] = useState(shippingAddress.email);
  const [phone,setPhone] = useState(shippingAddress.phone);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [state, setState] = useState(shippingAddress.state);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({ firstName,lastName,email, state,phone, address, city, postalCode, country })
    );
    props.history.push('/payment');
  };
  return (
    <div style={{position: 'relative'}}>
      <Grid
  container
  spacing={0}
  alignItems="center"
  justify="center"
 >

  <Grid item xs={3}>

  <Card >
  <CheckoutSteps step1 step2></CheckoutSteps>

      <form className="form" onSubmit={submitHandler}>

        <div>
          <h1>Shipping Address</h1>
        </div>



        <div style={{marginLeft:"40px"}}>
          <label >First Name</label>
          <input
            type="text"
            id="firstName"
            placeholder="Enter first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          ></input>
          <label style={{marginLeft:'100px'}}>Last Name</label>
          <input
            type="text"
            id="lastName"
            placeholder="Enter last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          ></input>
        </div>



        <div style={{marginLeft:"40px"}}>
          <label htmlFor="address">Phone Number</label>
            <input
            type="text"
            id="phone"
            placeholder="Enter Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          ></input>
          <label style={{marginLeft:'50px'}}>Email Address</label>
          <input
            type="text"
            id="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>
        </div>





        <div style={{marginLeft:"40px"}}>
        <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></input>

<label style={{marginLeft:'156px'}}>State</label>
          <input
            type="text"
            id="address"
            placeholder="Enter address"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          ></input>
</div>


<div style={{marginLeft:"40px"}}>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          ></input>
     
          <label style={{marginLeft:'137px'}}>Postal Code</label>
          <input
            type="text"
            id="postalCode"
            placeholder="Enter postal code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          ></input>
        </div>
        <div style={{marginLeft:"40px"}}>
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            placeholder="Enter country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Continue
          </button>
        </div>
      </form>
      </Card>
  </Grid>      
</Grid>
    </div>
  );
}
