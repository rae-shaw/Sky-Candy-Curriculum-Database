import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'
import Logo from '../Logo-inline.png'

export default function(){
	return(
		<>
			<nav role="navigation" >
	            <Link to='/'>
	                <img src={Logo} alt='company-logo' className='logo'/>
	            </Link>
	        </nav>
			<header>
				<h1>Welcome to the Sky Candy Curriculum Database!</h1>
			</header>
			<main className = 'landing'>
				<p>Welcome to the Sky Candy Curriculum Database. This database is designed to hold all of the curriculum for Sky Candy classes for reference, for adding new skills, updating current skills or deleting outdated skills. To search for a skill or skills or to edit or delete an existing skill, click 'Search.' To add a skill, click 'Add Skill'.</p>
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