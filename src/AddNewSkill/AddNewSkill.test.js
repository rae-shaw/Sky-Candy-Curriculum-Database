import React from 'react';
import ReactDOM from 'react-dom';
import AddNewSkill from './AddNewSkill';
import { Route, Switch, Link } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddNewSkill />, div);
  ReactDOM.unmountComponentAtNode(div);
});
