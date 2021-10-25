import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Component/HeaderFolder/Header';
import HomePage from './Component/HomePageFolder/HomePage';
import Doctors from './Component/DoctorsFolder/Doctors';
import Services from './Component/ServicesFolder/Services';
import Contact from './Component/ContactFolder/Contact';
import Footer from './Component/FooterFolder/Footer';
import Stethoscope from './Component/PicturesFolder/Stethoscope.png';

const App = () => {
  return (
    <div className="container">
      <div className="app">
        <img className="stethoscopeImg" src={Stethoscope} alt="" />
        <Router>
        <Header />
          <Route exact path='/' component={HomePage} />
          <Route path='/doktorzy' component={Doctors} />
          <Route path='/uslugi' component={Services} />
          <Route path='/kontakt' component={Contact} />
        </Router>
      </div>
    </div>
  );
}

export default App;
