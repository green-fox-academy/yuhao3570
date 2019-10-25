import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { postMSG, fetchMSG } from './actions/action';

function App({messages, sentMSGs, submitMSG, loadMSG}) {
  return (
    <div className="App">
     <div className="post">
       <label>Enter message: <input type="text"></input></label>
       <button onClick={submitMSG}></button>
       <h2>Message Sent</h2>
       <ul>
        {sentMSGs.map(msg => <li>{msg}</li>)}
       </ul>
     </div>
     <div className="fetch">
       <button onClick={loadMSG}>SHOW ALL MESSAGES</button>
       <h2>Total Messages</h2>
       <ul>
         {messages.map(msg => <li>{msg}</li>)}
       </ul>
     </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    sentMSGs: state.sentMSGs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitMSG: () => dispatch(postMSG()),
    loadMSG: () => dispatch(fetchMSG())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
