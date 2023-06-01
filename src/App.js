import './App.css';
import { Component } from 'react';
import Calculator from './components/Calculator';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        total: null,
        next: null,
        operation: null,
      },
    };
  }

  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <Calculator data={data} />
      </div>
    );
  }
}
export default App;
