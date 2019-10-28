import React from 'react';
import ReactDOM from 'react-dom';
import UpdateSkill from './UpdateSkill';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const match = {id: 5}
  ReactDOM.render(<Router><UpdateSkill props={match}/></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});