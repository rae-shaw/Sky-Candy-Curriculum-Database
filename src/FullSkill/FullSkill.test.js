import React from 'react';
import ReactDOM from 'react-dom';
import FullSkill from './FullSkill';
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom';

it('renders without crashing', () => {
	const div = document.createElement('div');
	const location = {state: {currentskill_name: 'a name!' }}
	const match = { params: {skillId: 5}}
	ReactDOM.render(<Router><FullSkill location={location} match = {match} /></Router>, div);
	ReactDOM.unmountComponentAtNode(div);
});
