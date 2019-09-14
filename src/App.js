import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import LoginPage from './LoginPage/LoginPage.js';
import SearchPage from './SearchPage/SearchPage.js';
import NotFound from './NotFound/NotFound.js';
import AddNewSkill from './AddNewSkill/AddNewSkill.js';
import LandingPage from './LandingPage/LandingPage.js';

function App() {
  return (
    <main className='App'>
      	<section className='sidebar'>
            <Switch>
              	<Route exact path='/' component = {LoginPage} /> 
              	<Route path = '/main' component = {LandingPage} />
                <Route path='/search' component={SearchPage} />
                <Route path='/newskill' component = {AddNewSkill} />
                <Route component={NotFound} />
            </Switch>
        </section>
    </main>
  );
}

export default App;
