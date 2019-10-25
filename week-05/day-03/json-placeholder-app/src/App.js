import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {fetchContent} from './actions';

function App({users, handleFetch}) {

  return (
    <div className="App">
      <button onClick={handleFetch}>Click To show Users</button>
      <ul>
        {users.map(user => 
          <li key={user.id}>{user.name}, {user.id}</li>
        )}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleFetch: () => dispatch(fetchContent())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
