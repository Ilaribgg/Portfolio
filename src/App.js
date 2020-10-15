import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Github from './components/Github';
import SocialMedia from './components/SocialMedia';
import AboutPage from './components/AboutPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div>
    <Navigation/>
    <Switch>
      <Route exact path='/' component={AboutPage}/>
      <Route path='/github' component={Github}/>
      <Route path='/socialmedia' component={SocialMedia}/>
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
