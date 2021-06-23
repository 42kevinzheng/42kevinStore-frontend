export const productsReducer =(posts = [], action) => {
    switch (action.type) {
      case 'FETCH_ALL':
        return action.payload;
      default:
        return posts;
    }
  };

export const selectedProductsReducer = (posts = [], action) => {
  switch (action.type) {
    case 'FETCH_PRODUCT':
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case 'DELETE_PRODUCT':
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};
  