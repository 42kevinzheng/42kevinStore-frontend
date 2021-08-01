import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar/Navbar';
import { detailsProduct } from '../actions/actions2';
import { Scrollbars } from 'react-custom-scrollbars';
import useStyles from './styles';
import spins from '../assest/spin.gif';

const Description = (props) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const _id =  props.match.params.id;
  const products = useSelector((state)=>state.productDetails);
  const {product} = products;
  const classes = useStyles();
    useEffect(()=>{
        dispatch(detailsProduct(_id));
    },[dispatch, _id])
    const addToCartHandler = () => {
      props.history.push(`/cart/${_id}?qty=${qty}`);
    };
    if(!product)
    {
      return(
        <div  style={{display:'flex',justifyContent:'center'}} >
          <div>
          <p>Might have been deleted or wrong URL link.</p>
          </div>
          <div>
          <img 
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngkey.com%2Fpng%2Fdetail%2F163-1639407_view-samegoogleiqdbsaucenao-1391950301682-don-t-know-meme-drawing.png&f=1&nofb=1"
          alt={"Nothing"}
          />
          </div>
        </div>
      )
    }
    else if(!product.image)
    {
      return (
        <div>
         <img 
          src={spins}
          alt={"Nothing"}
          />
        </div>
      )
    }

  const sellerId = product.seller || '00000';
  const sellerName =  sellerId.seller || "none";
    return (
        <div>
            <Navbar />
        <div className="toolbar">
      <Link to="/">Back to result</Link>
      <div className="row top">
        <div className="imgContainer">
        <div className={classes.scrollBar} >
          <Scrollbars className={classes.scrollBarImport}>           
            {product.image.map((imgSrc, index) => (
            <img className={classes.cardsLarge} src={imgSrc} key={index} alt={"Nothing"}/>
            ))}
          </Scrollbars>
        </div>

        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>Price : ${product.price}</li>
            <li>
              Description:
              <p>{product.description?product.description:product.name}</p>
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
                  <div className="price">${product.price}</div>
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
