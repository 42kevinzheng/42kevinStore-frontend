import * as api from '../api/api'

 export const getProducts = () => async (dispatch) => {
    try {
      const { data } = await api.fetchProducts();
      dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const detailProduct = (_id) => async (dispatch) => {
    try {
      const { data } = await api.fetchDetailProduct(_id);
      dispatch({ type: 'FETCH_PRODUCT', payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const addToCart = (productId, qty) => async (dispatch, getState) => {
    try {
      const { data } = await api.fetchCartData(productId);
      dispatch({
        type: 'ADD_CART',
        payload: { 
          name: data.name,
          image: data.image,
          price: data.price,
          countInStock: data.countInStock,
          product: data._id,
          qty,
        },
      });
      localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
    } catch(error) {
      console.log(error.message);
    }
  };

  export const removeFromCart = (productId) => (dispatch, getState) => {
    dispatch({ type: 'REMOVE_CART', payload: productId });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
  };

  
export const signin = (email, password) => async (dispatch) => {
  dispatch({ type: 'USER_SIGNIN', payload: { email, password } });
  try {
    const { data } = await api.fetchSignin(email, password);
    dispatch({ type: 'USER_SIGNIN_SUCCESS', payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: 'USER_SIGNIN_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const signout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  localStorage.removeItem('cartItems');
  dispatch({ type: 'USER_SIGNOUT' });
};