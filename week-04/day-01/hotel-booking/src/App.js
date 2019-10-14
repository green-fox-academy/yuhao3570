import React from 'react';
import './App.css';
import Hotel from './components/hotel';
import Filter from './components/filter';
import { DATA } from './assets/hotelData';

function App() {
  return (
    <div className="App">
 
      <div className = "left">
        <h2>filters</h2>
        <Filter filters = {DATA.filters}/>
      </div>

      <div className = "right">
        <Hotel hotels = {DATA.hotels}/>
      </div>
    </div>
  );
}

export default App;