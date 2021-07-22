import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar/Navbar';
import { detailsProduct } from '../actions/actions2';
import { Scrollbars } from 'react-custom-scrollbars';
import useStyles from './styles';
import BeatLoader from 'react-spinners/BeatLoader';



const Description = (props) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const _id =  props.match.params.id;
  const products = useSelector((state)=>state.productDetails);
  const {product} = products;
  const classes = useStyles();
  const dis = product.description;
  const image = product.image;
  const name = product.name;
  const price = product.price;
  const des = product.description;
  const sellerId = product.seller || '00000';
  const sellerName =  sellerId.seller || "none";

    useEffect(()=>{
        dispatch(detailsProduct(_id));
    },[dispatch, _id])

    const addToCartHandler = () => {
      props.history.push(`/cart/${_id}?qty=${qty}`);
    };

    if(!image)
    {
      return (
        <div>
        <BeatLoader
        size={200}
        color={'#534853'}
        loading = {true}
        style={{}}
        />
</div>

      )
    }
    

    return (
        <div>
              <Navbar />
        <div className="toolbar">
      <Link to="/">Back to result</Link>
      <div className="row top">
        <div className="imgContainer">
      
        <div className={classes.scrollBar} >
          <Scrollbars className={classes.scrollBarImport}>           
            {image.map((imgSrc, index) => (
            <img className={classes.cardsLarge} src={imgSrc} key={index}/>
            ))}
          </Scrollbars>
        </div>

        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{name}</h1>
            </li>
            <li>Price : ${price}</li>
            <li>
              Description:
              <p>{dis?des:name}</p>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
                  <li>
                    <h2>
                      <Link to={`/seller/${sellerId._id}`}>
                        {sellerName.name || "[Seller Store]"}
                      </Link>
                    </h2>
                  </li>
              <li>
                <div className="row">
                  <div>Price:</div>
                  <div className="price">${price}</div>
                </div>
                </li>
                  {3 > 0 && (
                    <>
                      <li>
                        <div className="row">
                          <div>Qty</div>
                          <div>
                            <select value={qty} onChange={(e) => setQty(e.target.value)}>
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
                        <button onClick={addToCartHandler} className="primary block">
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
