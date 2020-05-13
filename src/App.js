import React from 'react';

import './App.scss';
import Navbar from './components/Navbar/Navbar';
import TourList from './components/TourList/TourList';


function App() {
  return (
    //React.Fragment instead of many divs.
    <React.Fragment>
      <Navbar />
      <TourList />
    </React.Fragment>
  );
}

export default App;
