import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts, detailsUser } from '../actions/actions2';
import Card from '../components/Cards/Card/Card';
import useStyles from './styles';


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


  
  return (
    <div className="row top">
      <div className="col-1">
        {loading ? (
            <div className="loading">
            <i className="fa fa-spinner fa-spin"></i> Loading...
            </div>
        ) : error ? (
        {error}
        ) : (
          <ul className="card card-body">
            <li>
              <div className="row start">
                <div className="p-1">
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
            <li>{user.seller.description}</li>
          </ul>
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
          <div className ={classes.content} >
          <div className={classes.fit}>
            <div className="row center">
              {products.map((product) => (
                  <Card 
                  product={product} 
                  image = {product.image}
                  name = {product.name}
                  price ={product.price}
                  rating = {product.rating}
                  />              
              ))}
            </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}