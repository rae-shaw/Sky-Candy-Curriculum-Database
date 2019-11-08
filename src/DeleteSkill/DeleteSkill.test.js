import React from 'react';
import ReactDOM from 'react-dom';
import DeleteSkill from './DeleteSkill';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Router> <DeleteSkill /> </Router>, div);
	ReactDOM.unmountComponentAtNode(div);
});