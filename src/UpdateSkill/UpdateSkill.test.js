import React from 'react';
import ReactDOM from 'react-dom';
import UpdateSkill from './UpdateSkill';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

it('renders without crashing', () => {
	const div = document.createElement('div');
	const location = {state: {currentskill_name: 'a name!' }}
	const match = { params: {skillId: 5}}
	ReactDOM.render(<Router><UpdateSkill match={match} location={location} /></Router>, div);
	ReactDOM.unmountComponentAtNode(div);
});