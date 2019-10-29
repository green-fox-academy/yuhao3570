import React, {useState} from 'react';
import './App.css';
import { connect } from 'react-redux';
import { postMSG, fetchMSG } from './actions/action';

function App({messages, sentMSGs, submitMSG, loadMSG}) {
  let [inputText, setText] = useState('');
  const handleInputChange = (event) => {
    setText(event.target.value)
  }

  const handleMsgSubmit = () => {
    submitMSG(inputText);
    setText('');
  }

  const displayMSG = (msg) => {
    return (
      <li key={msg.id}>
        {'[ ' + msg.createdAt + ' ] '}<br/>
        <strong>{ msg.user }</strong><br/>
        {msg.text}
      </li>
    )
  }

  return (
    <div className="App">
     <div className="post">
       <label>
          Enter message: 
          <input 
          type="text" 
          onChange={handleInputChange}
          value={inputText} 
          />
        </label>
       <button onClick={handleMsgSubmit}>Submit</button>
     </div>

     <div className="fetch">
       <button onClick={loadMSG}>SHOW ALL MESSAGES</button>
       <h2>All Messages</h2>
       <ul>
         {messages.map(msg => displayMSG(msg))}
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
    submitMSG: (content) => dispatch(postMSG(content)),
    loadMSG: () => dispatch(fetchMSG())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
