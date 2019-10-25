import React from 'react';
import { Link } from 'react-router-dom';
import APIContext from '../APIContext.js';



export default function Child(props) {
	console.log(props)
	return(
		<div className='modal'>
		      Hello, World!
		 	<blockquote>Details: {props.details}</blockquote>
		    <blockquote>Recommended warm-up: {props.warm_up}</blockquote>
		    <blockquote>Pre-requisites for skill: {props.prerequisite}</blockquote>
		    <dl>
		     	<dt>{props.type}</dt>
		  		<dd>{props.sub_type}</dd>
		     	<dt>{props.priority}</dt>
		    </dl>


			
		    <Link to = '/newskill'>
		    	<button>Edit</button>
		    </Link>
		    <button>Delete</button>
		</div>
	)
}
