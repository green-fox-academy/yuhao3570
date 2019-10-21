import React from 'react';
import './App.css';
import Inceraser from './components/Increaser';
import Decreaser from './components/Decreaser';
import Resetter from './components/Resetter';
import Setter from './components/Setter';
import Tags from './components/Tags';
import Addtags from './components/AddTags';
import ComplexCounter from './components/ComplexCounter';
import RemoveTag from './components/RemoveTag';
import RemoveAll from './components/RemoveAllTags';

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
        <Resetter />
        <Setter />
      </div>

      <div className="tags" style={styles.row}>
        <Tags />
        <Addtags />
        <ComplexCounter />
        <RemoveTag />
        <RemoveAll />
      </div>
    </div>
  );
}

export default App;
