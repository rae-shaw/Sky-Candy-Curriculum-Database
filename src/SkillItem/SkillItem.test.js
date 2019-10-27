import React from 'react';
import ReactDOM from 'react-dom';
import SkillItem from './SkillItem';
import { Route, Switch, Link } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SkillItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});