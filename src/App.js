import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/home/';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        {/* Set up Routes */}
        <Switch>
          <Route exact path='/' component={Home} />
          {/* <Route path='/about-us' component={} /> 
          <Route path='/platforms' component={} /> 
          <Route path='/media' component={} />
          <Route path="/forbidden" component={Forbidden} />
          <Route path="/error" component={UnhandledError} />
          <Route component={NotFound} /> */}
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
