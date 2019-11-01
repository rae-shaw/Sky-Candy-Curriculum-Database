import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'

export default function(){
	return(
		<>
			
			<header>
				<h1>Welcome to the Sky Candy Curriculum Database!</h1>
			</header>
			<main className = 'landing'>
				<p>To search for a skill or skills or to edit an existing skill, click 'Search.' To add a skill, click 'Add Skill'.</p>
				<section className='buttonRow'>
					<Link to = '/search'>
						<button className ='buttons'>Search</button>
					</Link>
					<Link to = '/newskill'>
						<button className='buttons'>Add Skill</button>
					</Link>
				</section>
			</main>
		</>
	)
}