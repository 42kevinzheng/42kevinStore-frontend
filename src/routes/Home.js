import React, {useState} from 'react';
import Cards from '../components/Cards/Cards';
import Navbar from '../components/Navbar/Navbar';


const Home = () => {
    // const [cart, setCart] = useState({});

    // const fetchCart = async () => {
    //     const response = await ;
    // }

    return (
        <div>
            <Navbar/>
            <Cards/>
        </div>
    )
}

export default Home;
