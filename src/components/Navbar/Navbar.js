import React from 'react';
import { AppBar, Toolbar, IconButton, Badge,Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import useStyles from './styles';
import logo from './store.png';
import { useSelector } from 'react-redux';


const Navbar = () => {

    const classes = useStyles();
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    return (
        <div>
        <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography  variant="h6" className={classes.title} color="inherit">
            <img src={logo} alt="df" height="80px" className={classes.image} />KEVIN
          </Typography>
          <div className={classes.grow} />
          <div>
            <IconButton aria-label="Show cart items" color="inherit">
              <Badge badgeContent={cartItems.length > 0? cartItems.length:0} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
        </div>
    )
}

export default Navbar
