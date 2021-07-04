export const productsReducer =(state = [], action) => {
    switch (action.type) {
      case 'FETCH_ALL':
        return action.payload;
      default:
        return state;
    }
  };



export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case 'ADD_CART':
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    case 'REMOVE_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    case 'CART_SAVE_SHIPPING_ADDRESS':
      return { ...state, shippingAddress: action.payload };
    case 'CART_SAVE_PAYMENT_METHOD':
      return { ...state, paymentMethod: action.payload };
      case 'CART_EMPTY':
        return { ...state, cartItems: [] };
    default:
      return state;
  }
};


export const userSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case 'USER_SIGNIN':
      return { loading: true };
    case 'USER_SIGNIN_SUCCESS':
      return { loading: false, userInfo: action.payload };
    case 'USER_SIGNIN_FAIL':
      return { loading: false, error: action.payload };
    case 'USER_SIGNOUT':
      return {};
    default:
      return state;
  }
};


export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case 'USER_REGISTER_REQUEST':
      return { loading: true };
    case 'USER_REGISTER_SUCCESS':
      return { loading: false, userInfo: action.payload };
    case 'USER_REGISTER_FAIL':
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ORDER_CREATE_REQUEST':
      return { loading: true };
    case 'ORDER_CREATE_SUCCESS':
      return { loading: false, success: true, order: action.payload };
    case 'ORDER_CREATE_FAIL':
      return { loading: false, error: action.payload };
    case 'ORDER_CREATE_RESET':
      return {};
    default:
      return state;
  }
};







export const selectedProductsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PRODUCT':
      return action.payload;
    case 'DELETE_PRODUCT':
      return state.filter((post) => post._id !== action.payload);
    default:
      return state;
  }
};


export const orderDetailsReducer = (
  state = { loading: true, order: {} },
  action
) => {
  switch (action.type) {
    case 'ORDER_DETAILS_REQUEST':
      return { loading: true };
    case 'ORDER_DETAILS_SUCCESS':
      return { loading: false, order: action.payload };
    case 'ORDER_DETAILS_FAIL':
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


export const orderPayReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ORDER_PAY_REQUEST':
      return { loading: true };
    case 'ORDER_PAY_SUCCESS':
      return { loading: false, success: true };
    case 'ORDER_PAY_FAIL':
      return { loading: false, error: action.payload };
    case 'ORDER_PAY_RESET':
      return {};
    default:
      return state;
  }
};




export const productListReducer = (
  state = { loading: true, products: [] },
  action
) => {
  switch (action.type) {
    case 'PRODUCT_LIST_REQUEST':
      return { loading: true };
    case 'PRODUCT_LIST_SUCCESS':
      return { loading: false, products: action.payload };
    case 'PRODUCT_LIST_FAIL':
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productDetailsReducer = (
  state = { product: {}, loading: true },
  action
) => {
  switch (action.type) {
    case 'PRODUCT_DETAILS_REQUEST':
      return { loading: true };
    case 'PRODUCT_DETAILS_SUCCESS':
      return { loading: false, product: action.payload };
    case 'PRODUCT_DETAILS_FAIL':
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};



export const orderMineListReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case 'ORDER_MINE_LIST_REQUEST':
      return { loading: true };
    case 'ORDER_MINE_LIST_SUCCESS':
      return { loading: false, orders: action.payload };
    case 'ORDER_MINE_LIST_FAIL':
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


export const userDetailsReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case 'USER_DETAILS_REQUEST':
      return { loading: true };
    case 'USER_DETAILS_SUCCESS':
      return { loading: false, user: action.payload };
    case 'USER_DETAILS_FAIL':
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

