import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Description from './routes/Description';
import Home from './routes/Home';

function App() {
  return (
    <BrowserRouter>
      <div >
          <Route exact path ="/" component={Home} ></Route>
          <Route path="/description/" component={Description}></Route>
          <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
