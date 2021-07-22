import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { listProducts } from '../actions/actions2';
import Card from '../components/Cards/Card/Card';
import { prices, ratings } from '../utils';

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
      
        <div className="row center">
        {products.map((product) => (
          <Card 
          product={product} 
          image = {product.image}
          title = {''}
          name = {product.name}
          price ={product.price}
          />                
          ))}
        </div>
      </>
    )}
  </div>
</div>
</div>
);
}