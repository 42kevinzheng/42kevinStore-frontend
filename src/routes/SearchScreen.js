import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { listProducts,addToCart } from '../actions/actions2';
import { prices, ratings } from '../utils';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Scrollbars } from 'react-custom-scrollbars';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles';


export default function SearchScreen(props) {




  const {
    name = 'all',
    category = 'all',
    min = 0,
    max = 0,
    rating = 0,
    order = 'newest',
  } = useParams();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;



  const classes = useStyles();


  function addToCartHandler (_id) {
    dispatch(addToCart(_id, 1));
  };


  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;
  useEffect(() => {
    dispatch(
      listProducts({
        name: name !== 'all' ? name : '',
        category: category !== 'all' ? category : '',
        min,
        max,
        rating,
        order,
      })
    );

  }, [category, dispatch, max, min, name, order, rating]);

  const getFilterUrl = (filter) => {
    const filterCategory = filter.category || category;
    const filterName = filter.name || name;
    const filterRating = filter.rating || rating;
    const sortOrder = filter.order || order;
    const filterMin = filter.min ? filter.min : filter.min === 0 ? 0 : min;
    const filterMax = filter.max ? filter.max : filter.max === 0 ? 0 : max;
    return `/search/category/${filterCategory}/name/${filterName}/min/${filterMin}/max/${filterMax}/rating/${filterRating}/order/${sortOrder}`;
  };

  return (

<div>
<div className="row">
  {loading ? (
        <div className="loading">
        <i className="fa fa-spinner fa-spin"></i> Loading...
        </div>
  ) : error ? (
  {error}
  ) : (
    <div>{products.length} Results</div>
  )}
  <div>
    Sort by{' '}
    <select value={order} onChange={(e) => {
        props.history.push(getFilterUrl({ order: e.target.value }));
      }}
    >
      <option value="newest">Newest Arrivals</option>
      <option value="lowest">Price: Low to High</option>
      <option value="highest">Price: High to Low</option>
      <option value="toprated">Avg. Customer Reviews</option>
    </select>
  </div>
</div>
<div className="row top">
  <div className="col-1">
    <h3>Department</h3>
    <div>
      {loadingCategories ? (
          <div className="loading">
          <i className="fa fa-spinner fa-spin"></i> Loading...
          </div>
      ) : errorCategories ? (
        {errorCategories}
      ) : (
        <ul>
          <li>
            <Link
              className={'all' === category ? 'active' : ''}
              to={getFilterUrl({ category: 'all' })}
            >
              Any
            </Link>
          </li>
          {categories.map((c) => (
            <li key={c}>
              <Link
                className={c === category ? 'active' : ''}
                to={getFilterUrl({ category: c })}
              >
                {c}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
    <div>
      <h3>Price</h3>
      <ul>
        {prices.map((p) => (
          <li key={p.name}>
            <Link
              to={getFilterUrl({ min: p.min, max: p.max })}
              className={
                `${p.min}-${p.max}` === `${min}-${max}` ? 'active' : ''
              }
            >
              {p.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    <div>
      <h3>Avg. Customer Review</h3>
      <ul>
        {ratings.map((r) => (
          <li key={r.name}>
            <Link
              to={getFilterUrl({ rating: r.rating })}
              className={`${r.rating}` === `${rating}` ? 'active' : ''}
            >
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
  <div className="col-3">
    {loading ? (
          <div className="loading">
          <i className="fa fa-spinner fa-spin"></i> Loading...
          </div>
    ) : error ? (
      {error}
    ) : (
      <>
        <div style={{ width: 1800, height: 1200, borderStyle: 'solid', borderWidth: '5'}} >
            <Scrollbars>
              <Grid container justify="center" spacing={1}>
                {/* <img src={item.image[0]} alt={item.name} style={{height:300, width:300}} ></img> */}
                {products.map((item) => (
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Card className={classes.root} style={{ borderStyle: 'solid',}}>
                    
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
                  <IconButton aria-label="Add to Cart"   >
                  <AddShoppingCart fontSize='large' onClick={(e) =>addToCartHandler(item._id)}  />
                  </IconButton>
                    </CardActions>
                  </Card>
                  </Grid>
                  ))}
              </Grid>
            </Scrollbars> 
          </div>
      </>
    )}
  </div>
</div>
</div>
);
}