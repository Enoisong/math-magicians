import React from 'react';

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'The will of man is his happiness. -Friedrich Schiller',
    };
  }

  render() {
    const { message } = this.state;
    return (
      <div className="quote">
        <h1>Quote</h1>
        <div className="content">
          <p>{message}</p>
        </div>
      </div>
    );
  }
}
export default Quote;
