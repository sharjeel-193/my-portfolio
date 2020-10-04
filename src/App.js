import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';

import Menubar from './Components/Menubar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </Switch>
        
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
