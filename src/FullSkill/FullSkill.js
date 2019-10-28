import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import APIContext from '../APIContext.js';
import APIconfigure from '../APIconfigure.js';
import DeleteSkill from '../DeleteSkill/DeleteSkill.js';
//import ErrorBoundary from '../ErrorBoundary.js';


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

	

	componentDidMount() {
		const url = `${APIconfigure.API_END}/allskills/id/${this.props.match.params.skillId}`
		console.log('URL', url)
		console.log('props in fullskill at mount', this.props)
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
		const { currentSearch= [] } = this.context
		console.log('PROPS IN FULLSKILL', this.props)
		console.log('STATE IN FULLSKILL', this.state)
		console.log('context', this.context.currentSearch)
		const searchSkills = this.context.currentSearch
		console.log('searchSkill', searchSkills)
		const skill_id = this.props.match.params.skillId
		
		function isSkill(current) {
			console.log('skill_id', skill_id)

  			return current.id == skill_id;
		}
		
		
		const currentSkill = searchSkills.find(isSkill)
		const myalt_names = this.state.alt_names
		const my_name =this.state.name
		console.log('CURRENTSKILL', currentSkill)
		const updatePath = `/update-skill/${skill_id}`
		return(
			<>
					<section>
				        <header>
				        	<ul>
					            <h2>{currentSkill.name}</h2>
					            <li>Alternate Names: {this.state.alt_names}</li>
					            <li>Age: {currentSkill.age}</li>
					            <li>Level: {currentSkill.level}</li>
					            <li>Apparatus: {currentSkill.apparatus}</li>
				            </ul>
				        </header>
				    </section>
				    <section>
					 	<blockquote>Details: {currentSkill.details}</blockquote>
					    <blockquote>Recommended warm-up: {currentSkill.warm_up}</blockquote>
					    <blockquote>Pre-requisites for skill: {currentSkill.prerequisite}</blockquote>
					    <dl>
					     	<dt>{currentSkill.type}</dt>
					  		<dd>{currentSkill.sub_type}</dd>
					     	<dt>{currentSkill.priority}</dt>
					    </dl>
					    <DeleteSkill skillId={skill_id} />
					 	
					 	<Link to = {{
					 		pathname: updatePath,
					 		state: {
					 			currentskill_name: currentSkill.name,
					 			currentskill_altnames: myalt_names
					 		}
					 		}}>
						
							<button>Update Skill</button>
						</Link>
				    </section>
			</ >
	)
	}
}