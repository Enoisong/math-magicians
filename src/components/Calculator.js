import react from 'react';
import '.Calculator.css';

class Calculator extends react.Component {
    constructor() {
        super();
        this.state = {
            calc: ['AC', '+/-', '%', '/', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+'],
        };
    }

    render() {
        return (
            <div>
                <div className="output-screen">0</div>
                <div className="btn-rows">
                    {this.state.calc.map((item) => (
                        <div className="btn" key={item}>
                            {item}
                            </div>
                    ))}
                </div>
                <div className="last-row">
                    <div className="btn">0</div>
                    <div className="btn">.</div>
                    <div className="btn-equal">=</div>
                    </div>
                </div>
                );
              }
            }
            export default Calculator;

            //{this.state.calc.map((item) => console.log(item))}
            