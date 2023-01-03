import React from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './Landingpage/app'
import Header from './Header/App';


function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
        <LandingPage />
      
    </div>
  );
}

export default App;
