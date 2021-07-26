import React, { useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { listTopSellers } from '../actions/actions2';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Banners = () => {

    const dispatch = useDispatch();
    const userTopSellersList = useSelector((state) => state.userTopSellersList);
    const { loading, error, users } = userTopSellersList;
    useEffect(() => {
      dispatch(listTopSellers());
    }, [dispatch]);

    return (
        <div>
            {loading ? (
        <div className="loading">
        <i className="fa fa-spinner fa-spin"></i> Loading...
        </div>
    ) : error ? (
        {error}
    ) : (
        <>
          <Carousel infiniteLoop={true} showArrows autoPlay showThumbs={false}>
            {users.map((seller) => (
              <div key={seller._id}>
                <Link to={`/seller/${seller._id}`}>
                  <img src={seller.seller.logo} alt={seller.seller.name} />
                  <p className="legend">{seller.seller.name}</p>
                </Link>
              </div>
            ))}
          </Carousel>
        </>
      )}
        </div>
    )
}

export default Banners
