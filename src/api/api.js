import axios from 'axios';

const url = 'http://localhost:5001/api/products';

export const fetchProducts = () => axios.get(url);

export const fetchDetailProduct = (_id) => axios.get(`http://localhost:5001/api/products/${_id}`);

export const fetchCartData = (_id) => axios.get(`http://localhost:5001/api/products/${_id}`);

export const fetchSignin = (email, password) => axios.post('http://localhost:5001/api/users/signin',{email,password});

export const fetchRegister = (name, email, password) => axios.post(`http://localhost:5001/api/users/register`, {name, email, password});








