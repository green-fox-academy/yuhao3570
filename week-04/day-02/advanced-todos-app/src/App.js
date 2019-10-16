import React from 'react';
import './App.css';
import Todos from './components/Todos';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Theme from './components/Theme';

function App() {
  return (
    <div className="App">
      <Todos/>
      <Theme/>

      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={App} exact />
            <Route path="/theme" component={Theme} />
            <Route path="/theme/:id" component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>

      <Link to='/theme'>Theme Switcher</Link>

    </div>
    
  );
}

export default App;
