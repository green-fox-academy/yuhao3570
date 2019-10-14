import React from 'react';

class Acorn extends React.Component {
  constructor(props) {
      super(props);
    this.state = {count: 10};
    this.buy = this.buy.bind(this);
    this.eat = this.eat.bind(this);

  }

  handleClick(keyPressed) {
    if (keyPressed === 38) {
      this.buy();
    }
    if (keyPressed === 40) {
      this.eat();
    }
  }

  buy() {
    this.setState({count: this.states.count + 1 });
  }
  eat() {
    if(this.state.count !== 0){
        this.setState({count: this.states.count - 1}); 
    }
  }
  render() {
    return (
    <div>
      <button className="buy" onClick={this.buy}>Buy One</button>
      <p className="count">{this.state.count}</p>
      <button className="eat" onClick={this.eat}>Eat one</button>
    </div>);
  }
}

export default Acorn;
