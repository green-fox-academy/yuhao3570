import React from 'react';
import './App.css';
import Inceraser from './components/Increaser';
import Decreaser from './components/Decreaser';

const styles = {
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
}

function App() {
  return (
    <div className="App" >
      <div className="counters" style={styles.row}>
        <Inceraser />
        <Decreaser />

      </div>

      <div className="tags" style={styles.row}>


      </div>
    </div>
  );
}

export default App;
