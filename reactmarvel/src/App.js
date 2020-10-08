import React from 'react';
import './assets/css/App.css';


import Header from './components/Header';
import Slider from './components/Slider';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Slider/>
      <div className = "center">

      </div>
      <Footer/>
    </div>
    
  );
}

export default App;
