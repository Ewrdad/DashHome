import React from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './Landingpage/app'
import Header from './Header/App';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Tasks from './Tasks/Tasks';


function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
     <Router>
    <Routes>
   
      <Route path="/" element={ <LandingPage /> } />
      <Route path="/tasks" element={ <Tasks /> } />
      <Route path="/manage" element={ <LandingPage /> } />
      <Route path="/resources" element={ <LandingPage /> } />
    
  </Routes>
  </Router>  
    </div>
  );
}

export default App;
