import React from 'react';
import './App.css';
import Table from './Table';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ItemTwo from './components/Item-two';
import ItemOne from './components/Item-one';


class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      usage: [
        {name: 'component 1', time: '10s'},
        {name: 'component 2', time: '10s'},
        {name: 'component 1', time: '2s'}
      ],
    }

    this.addUsage = this.addUsage.bind(this);
  }

  addUsage(componentName, timeElapsed){
    const newUsage = [...this.state.usage, {name: componentName, time: timeElapsed}];
    this.setState({
      usage: newUsage
    })
  }


  render(){
    return (
      <div className="App">
        <div className="detail"> 
          <Table usage={this.state.usage}/>
        </div>

        <div>
          <Router >
            <Link to='/1'>1</Link><br/>
            <Link to='/2'>2</Link>
            <Route path = '/1' exact><ItemOne addUse={this.addUsage}/></Route>
            <Route path = '/2' exact><ItemTwo addUse={this.addUsage}/></Route>
          </Router>
        </div>
          
      </div>
    );
  }
  
}

export default App;
