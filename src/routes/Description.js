import { ContactsOutlined } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';


const Description = (products) => {
    const image = products.location.state.image;
    const name =products.location.state.name;
    const title = products.location.state.title;
    const price = products.location.state.price;
    const dis = products.location.state.dis;
    //products.location.state.product

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
              <p>{dis?dis:name}</p>
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
              <li>
                <div className="row">
                  <div>Status</div>
                  <div>
                    {products.countInStock > 0 ? (
                      <span className="success">In Stock</span>
                    ) : (
                      <span className="error">Unavailable</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button className="cart">Add to Cart</button>
              </li>
            </ul>
          </div>
        </div>





      </div>



</div>
    </div>
    )
};

export default Description;
