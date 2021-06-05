import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Item from './routes/Item';
import Home from './routes/Home';

function App() {
  return (
    <BrowserRouter>
      <div>
          <Route exact path ="/" component={Home} ></Route>
          <Route path="/item" component={Item}></Route>
          <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
