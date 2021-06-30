import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Description from './routes/Description';
import Home from './routes/Home';
import CartScreen from './routes/CartScreen';
import SigninScreen from './routes/Signin';


function App() {
  return (
    <BrowserRouter> 
      <div >
          <Route exact path ="/" component={Home} ></Route>
          <Route path="/description/:id" component={Description}></Route>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
