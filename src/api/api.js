import axios from 'axios';

const url = 'http://localhost:5001/api/products';

export const fetchProducts = () => axios.get(url);

export const fetchDetailProduct = (_id) => axios.get(`http://localhost:5001/api/products/${_id}`);

