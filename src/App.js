import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Description from './routes/Description';
import Home from './routes/Home';
import CartScreen from './routes/CartScreen';
import SigninScreen from './routes/Signin';
import RegisterScreen from './routes/Register';
import ShippingAddressScreen from './routes/ShippingAddress';
import PaymentMethodScreen from './routes/Payment';
import PlaceOrderScreen from './routes/PlaceOrder';
import OrderScreen from './routes/OrderScreen';
import OrderHistoryScreen from './routes/OrderHistoryScreen';
import ProfileScreen from './routes/ProfileScreen';
import ProductListScreen from './routes/ProductList';
import ProductEditScreen from './routes/ProductEdit';
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';

function App() {
  return (
    <BrowserRouter> 
      <div>
          <Route exact path ="/" component={Home} ></Route>
          <Route path="/description/:id" component={Description}></Route>
          <Route
            path="/description/:id/edit"
            component={ProductEditScreen}
            exact
          ></Route>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/shipping" component={ShippingAddressScreen}></Route>
          <Route path="/payment" component={PaymentMethodScreen}></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route path="/order/:id" component={OrderScreen}></Route>
          <Route path="/orderhistory" component={OrderHistoryScreen}></Route>

          <PrivateRoute
            path="/profile"
            component={ProfileScreen}
          ></PrivateRoute>
          <AdminRoute
            path="/productlist"
            component={ProductListScreen}
          ></AdminRoute>



          <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
