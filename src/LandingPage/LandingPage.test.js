import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './LandingPage';
import { Route, Switch, Link } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LandingPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
