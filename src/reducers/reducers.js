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

export const userSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case 'USER_SIGNIN_REQUEST':
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
  
export const productListReducer = (
  state = {  products: [] }, action ) => {
  switch (action.type) {
    case 'PRODUCT_LIST_SUCCESS':
      return { products: action.payload };
    case 'PRODUCT_LIST_FAIL':
      return { error: action.payload };
    default:
      return state;
  }
};

export const productDetailsReducer = (
  state = { product: {} },action ) => {
  switch (action.type) {
    case 'PRODUCT_DETAILS_SUCCESS':
      return { product: action.payload };
    case 'PRODUCT_DETAILS_FAIL':
      return { error: action.payload };
    default:
      return state;
  }
};


export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
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

export const orderDetailsReducer = (
  state = { loading: true }, action ) => {
  switch (action.type) {
    case 'ORDER_DETAILS_SUCCESS':
      return { loading: false, order: action.payload };
    case 'ORDER_DETAILS_FAIL':
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case 'CART_ADD_ITEM':
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
    case 'CART_REMOVE_ITEM':
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
    case 'USER_DETAILS_RESET':
      return { loading: true };
    default:
      return state;
  }
};


export const userUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case 'USER_UPDATE_PROFILE_REQUEST':
      return { loading: true };
    case 'USER_UPDATE_PROFILE_SUCCESS':
      return { loading: false, success: true };
    case 'USER_UPDATE_PROFILE_FAIL':
      return { loading: false, error: action.payload };
    case 'USER_UPDATE_PROFILE_RESET':
      return {};
    default:
      return state;
  }
};


export const productCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case 'PRODUCT_CREATE_REQUEST':
      return { loading: true };
    case 'PRODUCT_CREATE_SUCCESS':
      return { loading: false, success: true, product: action.payload };
    case 'PRODUCT_CREATE_FAIL':
      return { loading: false, error: action.payload };
    case 'PRODUCT_CREATE_RESET':
      return {};
    default:
      return state;
  }
};

export const productUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case 'PRODUCT_UPDATE_REQUEST':
      return { loading: true };
    case 'PRODUCT_UPDATE_SUCCESS':
      return { loading: false, success: true };
    case 'PRODUCT_UPDATE_FAIL':
      return { loading: false, error: action.payload };
    case 'PRODUCT_UPDATE_RESET':
      return {};
    default:
      return state;
  }
};


export const productDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case 'PRODUCT_DELETE_REQUEST':
      return { loading: true };
    case 'PRODUCT_DELETE_SUCCESS':
      return { loading: false, success: true };
    case 'PRODUCT_DELETE_FAIL':
      return { loading: false, error: action.payload };
    case 'PRODUCT_DELETE_RESET':
      return {};
    default:
      return state;
  }
};

export const orderListReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case 'ORDER_LIST_REQUEST':
      return { loading: true };
    case 'ORDER_LIST_SUCCESS':
      return { loading: false, orders: action.payload };
    case 'ORDER_LIST_FAIL':
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const orderDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ORDER_DELETE_REQUEST':
      return { loading: true };
    case 'ORDER_DELETE_SUCCESS':
      return { loading: false, success: true };
    case 'ORDER_DELETE_FAIL':
      return { loading: false, error: action.payload };
    case 'ORDER_DELETE_RESET':
      return {};
    default:
      return state;
  }
};


export const orderDeliverReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ORDER_DELIVER_REQUEST':
      return { loading: true };
    case 'ORDER_DELIVER_SUCCESS':
      return { loading: false, success: true };
    case 'ORDER_DELIVER_FAIL':
      return { loading: false, error: action.payload };
    case 'ORDER_DELIVER_RESET':
      return {};
    default:
      return state;
  }
};



export const userListReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case 'USER_LIST_REQUEST':
      return { loading: true };
    case 'USER_LIST_SUCCESS':
      return { loading: false, users: action.payload };
    case 'USER_LIST_FAIL':
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};



export const userDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case 'USER_DELETE_REQUEST':
      return { loading: true };
    case 'USER_DELETE_SUCCESS':
      return { loading: false, success: true };
    case 'USER_DELETE_FAIL':
      return { loading: false, error: action.payload };
    case 'USER_DELETE_RESET':
      return {};
    default:
      return state;
  }
};


export const userUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case 'USER_UPDATE_REQUEST':
      return { loading: true };
    case 'USER_UPDATE_SUCCESS':
      return { loading: false, success: true };
    case 'USER_UPDATE_FAIL':
      return { loading: false, error: action.payload };
    case 'USER_UPDATE_RESET':
      return {};
    default:
      return state;
  }
};


export const userTopSellerListReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case 'USER_TOPSELLERS_LIST_REQUEST':
      return { loading: true };
    case 'USER_TOPSELLERS_LIST_SUCCESS':
      return { loading: false, users: action.payload };
    case 'USER_TOPSELLERS_LIST_FAIL':
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};