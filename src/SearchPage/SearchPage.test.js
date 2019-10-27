import React from 'react';
import ReactDOM from 'react-dom';
import SearchPage from './SearchPage';
import { Route, Switch, Link } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});