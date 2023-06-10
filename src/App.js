import './App.css';
import React from 'react'; 
import { Routes, Route, Link } from "react-router-dom";
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';
import Header from './components/Header'; 


const App = () => ( 
  <div className="App">
    <Header>
      <div>Math magicians</div>
      <div className="App">
        <div>
          {' '}
          <Link to="/">
            Home
          </Link>
        </div>
        <div>
          {' '}
          <Link to="/calculator">
            Calculator
          </Link>
        </div>
        <div>
          {' '}
          <Link to="/quote">
            Quote
          </Link>
          {' '}

        </div>
      </div>
    </Header>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quote" element={< Quote />} />
      <Route path="/Calculator" element={<Calculator />} />
    </Routes>
  </div>  
);

export default App;
