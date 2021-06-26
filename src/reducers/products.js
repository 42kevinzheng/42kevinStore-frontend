export const productsReducer =(state = [], action) => {
    switch (action.type) {
      case 'FETCH_ALL':
        return action.payload;
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
      };
      case 'REMOVE_CART':
        return {
          ...state,
          cartItems: state.cartItems.filter((x) => x.product !== action.payload),
        };
    default:
      return state;
  }
};