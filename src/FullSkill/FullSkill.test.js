import React from 'react';
import ReactDOM from 'react-dom';
import FullSkill from './FullSkill';
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const match = {params: {skillId: 5}}
  ReactDOM.render(<Router><FullSkill match={match} /></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});
