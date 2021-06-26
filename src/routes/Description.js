import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar/Navbar';
import { detailProduct } from '../actions/actions';

const Description = (products) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const _id = products.location.state.product._id;
  const product = useSelector((state)=>state.product);

  const dis = products.location.state.dis||product.description;
  const image = products.location.state.image||product.image;
  const name = products.location.state.name||product.name;
  const price = products.location.state.price||product.price;


    useEffect(()=>{
        dispatch(detailProduct(_id));
    },[dispatch, _id])

    const addToCartHandler = () => {
      products.history.push(`/cart/${_id}?qty=${qty}`);
    };

    return (
        <div>
              <Navbar />
        <div className="toolbar">
      <Link to="/">Back to result</Link>
      <div className="row top">
        <div className="imgContainer">
          <img className="large" src={image} alt={name}></img>
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{name}</h1>
            </li>
            <li>Pirce :{price}</li>
            <li>
              Description:
              <p>{dis?name:dis}</p>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price</div>
                  <div className="price">{price}</div>
                </div>
                </li>
                  {3 > 0 && (
                    <>
                      <li>
                        <div className="row">
                          <div>Qty</div>
                          <div>
                            <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        </div>
                      </li>
                      <li>
                        <button
                          onClick={addToCartHandler}
                          className="primary block"
                        >
                          Add to Cart
                        </button>
                      </li>
                    </>
                  )}
            </ul>
          </div>
        </div>
      </div>
</div>
    </div>
    )
};

export default Description;
