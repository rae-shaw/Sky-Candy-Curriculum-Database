import React from 'react';
import ReactDOM from 'react-dom';
import UpdateSkill from './UpdateSkill';
import { Route, Switch, Link } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UpdateSkill />, div);
  ReactDOM.unmountComponentAtNode(div);
});