import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Error from './components/Error';
import Not from './components/Not';
import ErrorCode from './components/ErrorCode';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route ty="value" path="/" component={Home} exact />
          <Route path="/error" component={Error} exact />
          <Route path="/error/:id" component={ErrorCode} />
          <Route path="/:id" component={Not} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
