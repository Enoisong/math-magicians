import react from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends react.Component {
  constructor() {
    super();
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
    this.clikHandler = this.clikHandler.bind(this);
  }

  clikHandler = (e) => {
    if (!e.target.name) return;

    const { next, total, operation } = calculate(this.state, e.target.name);

    if (next === null && total === null) {
      this.setState({ next, total: '0', operation });
    } else {
      this.setState({ next, total, operation });
    }
  };

  render() {
    const { total, next } = this.state;
    const btns = [
      'AC',
      '+/-',
      '%',
      '÷',
      '7',
      '8',
      '9',
      'x',
      '4',
      '5',
      '6',
      '-',
      '1',
      '2',
      '3',
      '+',
      '0',
      '.',
      '=',
    ];
    return (
      <div>
        {next ? (
          <div className="output-screen">{next}</div>
        ) : (
          <div className="output-screen">{total}</div>
        )}
        <div className="btn-rows">
          {btns.map((btnName) => (
            <button
              onClick={(e) => this.clikHandler(e)}
              name={btnName}
              type="button"
              className={`btn ${btnName === '0' ? 'btn-zero' : ''} ${
                btnName === '=' ? 'btn-equal' : ''
              }`}
              key={btnName}
            >
              {btnName}
            </button>
          ))}
        </div>
      </div>
    );
  }
}
export default Calculator;
