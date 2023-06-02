import './App.css';
import React, { PureComponent } from 'react';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <Calculator />
        <Quote />
      </div>
    );
  }
}
export default App;
