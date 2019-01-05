import React from 'react';
import ReactDOM from 'react-dom';

class MyPassion extends React.Component {
	// name property goes here:
get job() {
  return 'Software Developer';
}

  render() {
    return <h1>I enjoy my passion as {this.job}.</h1>;
  }
}

ReactDOM.render(<MyPassion />, document.getElementById('app'));