import React from 'react';
import { AppBar, Toolbar, IconButton, Badge,Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import useStyles from './styles';
import logo from './store.png';
import { useDispatch, useSelector } from 'react-redux';
import {signout} from '../../actions/actions2';
import { Link, Route } from 'react-router-dom';
import SearchBox from '../SearchBox';
import SideBar from '../SideBar';

const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <div>


      <AppBar position="fixed" className={classes.appBar} color="inherit">
      <Toolbar>
      <SideBar/>
        <Typography  variant="h6" className={classes.title} color="inherit">
        <Link to="/">
          <img src={logo} alt="Dafault Logo" height="70px" className={classes.image}/>
          </Link>
          <Link to="/">Kevin</Link>
        </Typography>



        
        <div style={{ justifyContent:'center'}}>
            <Route
              render={({ history }) => (
                <SearchBox history={history}></SearchBox>
              )}
            ></Route>
          </div>





          
        <div>
          <IconButton aria-label="Show cart items" color="inherit">
          <Link to="/cart">
            <Badge badgeContent={cartItems.length > 0? cartItems.length:0} color="secondary">
              <ShoppingCart />
            </Badge>
            </Link>
          </IconButton>
        </div>


        {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/productlist">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Orders</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                </ul>
              </div>
            )}



      {userInfo && userInfo.isSeller && (
              <div className="dropdown">
                <Link to="#seller">
                  Seller <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/productlist/seller">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist/seller">Orders</Link>
                  </li>
                </ul>
              </div>
            )}



        {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                <li>
                    <Link to="/profile">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}




      </Toolbar>
    </AppBar>





    </div>
  )
}

export default Navbar
