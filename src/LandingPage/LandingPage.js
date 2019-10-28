import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default function(){
	return(
		<>
			
			<header>
				<h1>Welcome to the Sky Candy Curriculum Database!</h1>
			</header>
			<main>
				<p>To search for a skill or skills or to edit an existing skill, click 'Search.' To add a skill, click 'Add Skill'.</p>
				<Link to = '/search'>
					<button>Search</button>
				</Link>
				<Link to = '/newskill'>
					<button>Add Skill</button>
				</Link>
			</main>
			
		</>
	)
}