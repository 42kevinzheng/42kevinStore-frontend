import Axios from 'axios';

export const createOrder = (order) => async (dispatch, getState) => {
  try { const { userSignin: { userInfo }, } = getState();
    const { data } = await Axios.post('http://localhost:5001/api/orders', order, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({ type: 'ORDER_CREATE_SUCCESS', payload: data.order });
    dispatch({ type: 'CART_EMPTY' });
    localStorage.removeItem('cartItems');
  } catch (error) {
    dispatch({
      type: 'ORDER_CREATE_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const detailsOrder = (orderId) => async (dispatch, getState) => {
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.get(`http://localhost:5001/api/orders/${orderId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: 'ORDER_DETAILS_SUCCESS', payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: 'ORDER_DETAILS_FAIL', payload: message });
  }
};
  

  
export const listProducts = () => async (dispatch) => {
    try {
      const { data } = await Axios.get('http://localhost:5001/api/products');
      dispatch({ type: 'PRODUCT_LIST_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'PRODUCT_LIST_FAIL', payload: error.message });
    }
  };
  
  export const detailsProduct = (productId) => async (dispatch) => {
    try {
      const { data } = await Axios.get(`http://localhost:5001/api/products/${productId}`);
      dispatch({ type: 'PRODUCT_DETAILS_SUCCESS', payload: data });
    } catch (error) {
      dispatch({
        type: 'PRODUCT_DETAILS_FAIL',
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };


  export const register = (name, email, password) => async (dispatch) => {
    dispatch({ type: 'USER_REGISTER_REQUEST', payload: { email, password } });
    try {
      const { data } = await Axios.post('http://localhost:5001/api/users/register', {
        name,
        email,
        password,
      });
      dispatch({ type: 'USER_REGISTER_SUCCESS', payload: data });
      dispatch({ type: 'USER_SIGNIN_SUCCESS', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: 'USER_REGISTER_FAIL',
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
  export const signin = (email, password) => async (dispatch) => {
    dispatch({ type: 'USER_SIGNIN_REQUEST', payload: { email, password } });
    try {
      const { data } = await Axios.post('http://localhost:5001/api/users/signin', { email, password });
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
    localStorage.removeItem('shippingAddress');
    dispatch({ type: 'USER_SIGNOUT' });
  };
  
  

  export const addToCart = (productId, qty) => async (dispatch, getState) => {
    const { data } = await Axios.get(`http://localhost:5001/api/products/${productId}`);
    dispatch({
      type: 'CART_ADD_ITEM',
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
  };
  
  export const removeFromCart = (productId) => (dispatch, getState) => {
    dispatch({ type: 'CART_REMOVE_ITEM', payload: productId });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
  };
  
export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: 'CART_SAVE_SHIPPING_ADDRESS', payload: data });
  localStorage.setItem('shippingAddress', JSON.stringify(data));
};
export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: 'CART_SAVE_PAYMENT_METHOD', payload: data });
};


export const payOrder = (order, paymentResult) => async (dispatch, getState ) => {
  dispatch({ type: 'ORDER_PAY_REQUEST', payload: { order, paymentResult } });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = Axios.put(`http://localhost:5001/api/orders/${order._id}/pay`, paymentResult, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: 'ORDER_PAY_SUCCESS', payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: 'ORDER_PAY_FAIL', payload: message });
  }
};



export const listOrderMine = () => async (dispatch, getState) => {
  dispatch({ type: 'ORDER_MINE_LIST_REQUEST' });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.get('http://localhost:5001/api/orders/mine', {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({ type: 'ORDER_MINE_LIST_SUCCESS', payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: 'ORDER_MINE_LIST_FAIL', payload: message });
  }
};

export const detailsUser = (userId) => async (dispatch, getState) => {
  dispatch({ type: 'USER_DETAILS_REQUEST', payload: userId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.get(`http://localhost:5001/api/users/${userId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: 'USER_DETAILS_SUCCESS', payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: 'USER_DETAILS_FAIL', payload: message });
  }
};