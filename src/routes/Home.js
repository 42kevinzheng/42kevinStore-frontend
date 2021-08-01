import React from 'react';
import Cards from '../components/Cards/Cards';
import Banner from '../components/Banners';

const Home = () => {
    return (
        <div>   
            <h2>Top Sellers</h2>
                <Banner/>
            <h2>Featured Products</h2>
                <Cards/>
        </div>
    )
}

export default Home;
