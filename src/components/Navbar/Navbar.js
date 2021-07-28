import React, {useState} from 'react';
import { AppBar, Toolbar, IconButton, Badge,Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import useStyles from './styles';
import logo from './store.png';
import MoreIcon from '@material-ui/icons/MoreVert';

import { useDispatch, useSelector } from 'react-redux';
import {signout} from '../../actions/actions2';
import { Link, Route } from 'react-router-dom';
import SearchBox from '../SearchBox';
import SideBar from '../SideBar';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const StyledMenu = withStyles({

})((props) => (
  <Menu
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem);







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

  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorE2, setAnchorE2] = useState(null);
  const [anchorE3, setAnchorE3] = useState(null);


  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose2 = () => {
    setAnchorE2(null);
  };
  const handleClose3 = () => {
    setAnchorE3(null);
  };




  return (
    <div className={classes.grow}>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
      <Toolbar>

        <SideBar/>



        <Typography  variant="h6" className={classes.title} color="inherit" noWrap>
        <Link to="/">
          <img src={logo} alt="Dafault Logo" height="70px" className={classes.image}/>
          </Link>
          <Link to="/">Kevin</Link>
        </Typography>











        <div>
            <Route render={({ history }) => (
                <SearchBox history={history} ></SearchBox>
              )}
            ></Route>
        </div>
 <div className={classes.grow} />



          
        <div >
          <IconButton aria-label="Show cart items" color="inherit">
          <Link to="/cart">
            <Badge badgeContent={cartItems.length > 0? cartItems.length:0} color="secondary">
              <ShoppingCart />
            </Badge>
            </Link>
          </IconButton>
        </div>

      {userInfo && userInfo.isAdmin && (
        <div> 
          <Button variant="h6" 
          onClick={(e)=>setAnchorEl(e.currentTarget)}>
            Admin
          </Button>
          <StyledMenu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
            <Link to="/dashboard">
              <StyledMenuItem>
                  Dashboard
              </StyledMenuItem>
            </Link>
            <Link to="/productlist">
              <StyledMenuItem> 
                Products 
              </StyledMenuItem>
            </Link>
            <Link to="/orderlist">
              <StyledMenuItem>
                Orders
              </StyledMenuItem>
            </Link>
            <Link to="/userlist">
              <StyledMenuItem>
                Users
              </StyledMenuItem>
            </Link>
          </StyledMenu>
        </div>
      )}


      {userInfo && userInfo.isSeller && (
                  <div> 
                  <Button aria-haspopup="true" variant="h6" 
                  onClick={(e)=>setAnchorE2(e.currentTarget)}>
                    Seller
                  </Button>
                  <StyledMenu anchorEl={anchorE2} open={Boolean(anchorE2)} onClose={handleClose2}>
                  <Link to="/productlist/seller">   
                  <StyledMenuItem>
                  Products
                      </StyledMenuItem>
                    </Link>
                    <Link to="/orderlist/seller">
                      <StyledMenuItem> 
                      Orders 
                      </StyledMenuItem>
                    </Link>
                    
                  </StyledMenu>
                  </div>
            )}



        {userInfo ? (

                      <div> 
                      <Button aria-haspopup="true" variant="h6" 
                      onClick={(e)=>setAnchorE3(e.currentTarget)}>
                                          {userInfo.name} {' '}

                      </Button>
                      <StyledMenu anchorEl={anchorE3} open={Boolean(anchorE3)} onClose={handleClose3}>
                      <Link to="/profile">
                      <StyledMenuItem>
                      Profile
                          </StyledMenuItem>
                        </Link>
                        <Link to="#signout" onClick={signoutHandler}>
                          <StyledMenuItem> 
                          Sign Out
                      
                          </StyledMenuItem>
                        </Link>
                        
                      </StyledMenu>
                      </div>

            ) : (
              <Button aria-haspopup="true" variant="h6" color="primary">
              <Link to="/signin">Sign In</Link>
              </Button>
            )}













      </Toolbar>
    </AppBar>





    </div>
  )
}

export default Navbar
































// import React from 'react';
// import { AppBar, Toolbar, IconButton, Badge,Typography } from '@material-ui/core';
// import { ShoppingCart } from '@material-ui/icons';
// import useStyles from './styles';
// import logo from './store.png';
// import { useDispatch, useSelector } from 'react-redux';
// import {signout} from '../../actions/actions2';
// import { Link, Route } from 'react-router-dom';
// import SearchBox from '../SearchBox';
// import SideBar from '../SideBar';





// const Navbar = () => {
//   const classes = useStyles();
//   const dispatch = useDispatch();
//   const cart = useSelector((state) => state.cart);
//   const { cartItems } = cart;
//   const userSignin = useSelector((state) => state.userSignin);
//   const { userInfo } = userSignin;
//   const signoutHandler = () => {
//     dispatch(signout());
//   };





//   return (
//     <div>
//       <AppBar position="fixed" className={classes.appBar} color="inherit">
//       <Toolbar>
//       <SideBar/>
//         <Typography  variant="h6" className={classes.title} color="inherit">
//         <Link to="/">
//           <img src={logo} alt="Dafault Logo" height="70px" className={classes.image}/>
//           </Link>
//           <Link to="/">Kevin</Link>
//         </Typography>

//         <div >
//             <Route render={({ history }) => (
//                 <SearchBox history={history} style={{ justifyContent:'center', marginLeft:"200px"}}></SearchBox>
//               )}
//             ></Route>
//             </div>





          
//         <div style={{ marginLeft:930}}>
//           <IconButton aria-label="Show cart items" color="inherit">
//           <Link to="/cart">
//             <Badge badgeContent={cartItems.length > 0? cartItems.length:0} color="secondary">
//               <ShoppingCart />
//             </Badge>
//             </Link>
//           </IconButton>
//         </div>


     
//         {userInfo && userInfo.isAdmin && (
//               <div className="dropdown">
//                 <Link to="#admin">
//                   Admin <i className="fa fa-caret-down"></i>
//                 </Link>
//                 <ul className="dropdown-content">
//                   <li>
//                     <Link to="/dashboard">Dashboard</Link>
//                   </li>
//                   <li>
//                     <Link to="/productlist">Products</Link>
//                   </li>
//                   <li>
//                     <Link to="/orderlist">Orders</Link>
//                   </li>
//                   <li>
//                     <Link to="/userlist">Users</Link>
//                   </li>
//                 </ul>
//               </div>
//             )}

   

//       {userInfo && userInfo.isSeller && (
        

// <div className="dropdown">
// <Link to="#admin">
//   Admin <i className="fa fa-caret-down"></i>
// </Link>
// <ul className="dropdown-content">
//   <li>
//   <Link to="/productlist/seller">  Products </Link>
//   </li>
//   <li>
//   <Link to="/orderlist/seller"> Orders</Link>
//   </li>

// </ul>
// </div>
//             )}



// {userInfo ? (
//               <div className="dropdown">
//                 <Link to="#">
//                   {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
//                 </Link>
//                 <ul className="dropdown-content">
//                   <li>
//                     <Link to="#signout" onClick={signoutHandler}>
//                       Sign Out
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             ) : (
//               <Link to="/signin">Sign In</Link>
//             )}





 
      



//       </Toolbar>
//     </AppBar>





//     </div>
//   )
// }

// export default Navbar
