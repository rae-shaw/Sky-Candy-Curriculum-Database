import React from 'react';
import ReactDOM from 'react-dom';
import SearchPage from './SearchPage';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Router> <SearchPage /> </Router>, div);
	ReactDOM.unmountComponentAtNode(div);
});