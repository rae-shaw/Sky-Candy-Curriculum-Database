import React from 'react';
import { Link } from 'react-router-dom';
import APIContext from '../APIContext.js';
import APIconfigure from '../APIconfigure.js';
import DeleteSkill from '../DeleteSkill/DeleteSkill.js';
import Logo from '../Logo-inline.png'


export default class FullSkill extends React.Component {
	static contextType = APIContext;

	state = { 
    	id: '',
    	alt_names: [],
    	apparatus: '',
    	priority: '',
    	level: '',
    	action: '',
    	age: '',
    	details: '',
    	warm_up:'',
    	prerequisites: '',
    	video: '',

    };
    //GET the info to display the selected skill
	componentDidMount() {
		const url = `${APIconfigure.API_END}/allskills/id/${this.props.match.params.skillId}`
    	fetch(`${url}`, {
      		method: 'GET',
      		headers: {
        		'content-type': 'application/json'
      		}
    	})
      	.then(res => {
        	if (!res.ok)
          		return res.json().then(error => Promise.reject(error))

        	return res.json()
      	})
      	.then(responseData => {
	    	this.setState({
	          	id: responseData.id,
	          	name: responseData.name,
	          	apparatus: responseData.apparatus,
	          	priority: responseData.priority,
	          	level: responseData.level,
	          	alt_names: responseData.alt_names,
	          	action_id: responseData.action,
	          	age_id: responseData.age,
	          	details: responseData.details,
	          	warm_up: responseData.warm_up,
	          	prerequisites: responseData.prerequisites,
	          	video: responseData.video

	    	})
      	})
      	.catch(error => {
        	console.error(error)
        	this.setState({ error })
      	})
    }

	static contextType = APIContext;
	render(){
		const skill_id = this.state.id
		const myalt_names = this.state.alt_names
		const my_name =this.state.name
		const updatePath = `/update-skill/${skill_id}`
		return(
			<>
				<nav role="navigation" >
		            <Link to='/'>
		                <img src={Logo} alt='company-logo' className='logo'/>
		            </Link>
		        </nav>
		        <main>
					<header>
						<h1 className='fullSkillTitle' >{this.state.name}</h1>
					</header>
					<section className='moreInfo'>
				        <blockquote>Alternate Names: {this.state.alt_names}</blockquote>
				        <blockquote>Age: {this.state.age}</blockquote>
				        <blockquote>Level: {this.state.level}</blockquote>
				        <blockquote>Apparatus: {this.state.apparatus}</blockquote>
					 	<blockquote>Details: {this.state.details}</blockquote>
					    <blockquote>Recommended warm-up: {this.state.warm_up}</blockquote>
					    <blockquote>Pre-requisites for skill: {this.state.prerequisite}</blockquote>
					    <blockquote>Type: {this.state.action}</blockquote>
					  	<blockquote>Sub-Type: {this.state.class}</blockquote>
					    <blockquote> Priority: {this.state.priority}</blockquote>
					    <section className = 'buttonRow' >
						    <DeleteSkill skillId={skill_id} />
						 	<Link to = {{
						 		pathname: updatePath,
						 		state: {
						 			currentskill_name: my_name,
						 			currentskill_altnames: myalt_names
						 		}
						 		}}>
								<button className = 'buttons'>Update Skill</button>
							</Link>
							<Link to = '/search'>
								<button className = 'buttons'>Back to Search</button>
							</Link>
							<Link to = '/newskill'>
							<button className = 'buttons'>Add Skill</button>
							</Link>
						</section>
					</section>
				</main>
			</>
		)
	}
}