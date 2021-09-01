import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

// import components
import Home from './components/Home';
import Collection from './components/Collection';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
// import Header.js
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Switch>
        <Header />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/collection">
          <Collection />
        </Route>
        <Route path="/about">
          <AboutUs />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default App;