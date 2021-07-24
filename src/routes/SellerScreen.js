import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts, detailsUser,addToCart } from '../actions/actions2';
import useStyles from './styles';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Scrollbars } from 'react-custom-scrollbars';
import { AddShoppingCart } from '@material-ui/icons';


export default function SellerScreen(props) {
  const sellerId = props.match.params.id;
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const productList = useSelector((state) => state.productList);
  const {
    loading: loadingProducts,
    error: errorProducts,
    products,
  } = productList;
  const classes = useStyles();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsUser(sellerId));
    dispatch(listProducts({ seller: sellerId }));
  }, [dispatch, sellerId]);

  function addToCartHandler (_id) {
    dispatch(addToCart(_id, 1));
  };

  const sellerID = products.seller || '00000';
  const sellerName =  sellerID.seller || "none";
  return (
    <div  >
      <div className="col-1" >
        {loading ? (
            <div className="loading">
            <i className="fa fa-spinner fa-spin"></i> Loading...
            </div>
        ) : error ? (
        {error}
        ) : (
          <div> 
                <h2>Sellers</h2>

          <ul className="card card-body">
            <li>
              <div className="row start" >
                <div className="p-1" >
                  <img
                    className="small"
                    src={user.seller.logo}
                    alt={user.seller.name}
                  ></img>
                </div>
                <div className="p-1">
                  <h1>{user.seller.name}</h1>
                </div>
              </div>
            </li>
            <li>
              <a href={`mailto:${user.email}`}>Contact Seller: {user.email}</a>
            </li>
            <li>
              About Page: {user.seller.description}
              </li>

          </ul>
          </div>
        )}
      </div>







      <div className="col-3">
        {loadingProducts ? (
            <div className="loading">
            <i className="fa fa-spinner fa-spin"></i> Loading...
            </div>
        ) : errorProducts ? (
        {errorProducts}
        ) : (

<div> 
<h2>Featured Products</h2>


          <div className ={classes.content} >
          <div className={classes.fit}>



       


  <div style={{   
  width: 1800, 
  height: 1200,
  borderStyle: 'solid',
  borderWidth: '5'}} >
<Scrollbars >
<Grid container justify="center" spacing={1}>
{/* <img src={item.image[0]} alt={item.name} style={{height:300, width:300}} ></img> */}

  {products.map((item) => (

    <Grid item xs={12} sm={6} md={4} lg={3}>
    <Card className={classes.root} style={{  borderStyle: 'solid',}}>
    <CardMedia className={classes.media} image={item.image[0]} title={item.name} />
    <CardContent className={classes.cardContent}>
    <Typography gutterBottom variant="h6" component="h5">
          <Link to={`/description/${item.product}`}>{item.name}</Link> 
          </Typography>
        
          </CardContent>
       
            <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="legend" >
          ${item.price}
          </Typography>

  
          </div>

          <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart"  
>
        <AddShoppingCart
        onClick={(e) =>addToCartHandler(item._id)}  

        fontSize='large' 
        />
        </IconButton>
        <Typography gutterBottom variant="h5" component="legend">
            <Link to={`/seller/${sellerId._id}`}>
          {sellerName.name || '[Store Name]'}
            </Link>
          </Typography>
      </CardActions>
    </Card>
    </Grid>
  ))}
              </Grid>
  </Scrollbars>
  
</div>

















            </div>
          </div>
          </div>
        )}
      </div>
    </div>
  );
}