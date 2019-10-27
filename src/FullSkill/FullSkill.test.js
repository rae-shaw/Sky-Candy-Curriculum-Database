import React from 'react';
import ReactDOM from 'react-dom';
import FullSkill from './FullSkill';
import { Route, Switch, Link } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FullSkill />, div);
  ReactDOM.unmountComponentAtNode(div);
});
