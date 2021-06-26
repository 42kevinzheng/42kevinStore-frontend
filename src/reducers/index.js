import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { productsReducer, selectedProductsReducer, cartReducer } from "./products";
import thunk from 'redux-thunk';


const initialState = {
  cart: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
  },
};


const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  cart: cartReducer,
});


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);



export default store;
