import React from 'react';

class Acorn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 10};
    this.buy = this.buy.bind(this);
    this.eat = this.eat.bind(this);

  }

  handleClick = (event) => {
    if (event.key === 'ArrowUp') {
      return this.buy();
    }
    if (event.key === 'ArrowDown') {
      return this.eat();
    }
  }

  buy() {
    this.setState({count: this.state.count + 1 });
  }
  eat() {
    if(this.state.count !== 0){
        this.setState({count: this.state.count - 1}); 
    }
  }
  render() {
    return (
    <div>
      {document.addEventListener("keydown", this.handleClick)}
      
      <button className="buy" onClick={this.buy}>Buy One</button>
      <p className="count">{this.state.count}</p>
      <button className="eat" onClick={this.eat}>Eat one</button>
    </div>);
  }
}

export default Acorn;
