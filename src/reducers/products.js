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
      return action.payload;
    case 'DELETE_PRODUCT':
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};
  