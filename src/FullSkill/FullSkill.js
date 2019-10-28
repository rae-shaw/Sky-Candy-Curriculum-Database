import React from 'react';
import { Link } from 'react-router-dom';
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
      	//MAKE A CALL HERE TO GET THE PRIMARY NAME?
      	.catch(error => {
        	console.error(error)
        	this.setState({ error })
      	})
    }


	static contextType = APIContext;

	render(){
		// const { currentSearch= [] } = this.context
		console.log('PROPS IN FULLSKILL', this.props)
		console.log('STATE IN FULLSKILL', this.state)
		console.log('context', this.context.currentSearch)
		// const searchSkills = this.context.currentSearch
		// console.log('searchSkill', searchSkills)
		const skill_id = this.state.id
		

		const myalt_names = this.state.alt_names
		const my_name =this.state.name
		const updatePath = `/update-skill/${skill_id}`
		return(
			<>
				<section>
			        <header>
			        	<ul>
				            <h2>{this.state.name}</h2>
				            <li>Alternate Names: {this.state.alt_names}</li>
				            <li>Age: {this.state.age}</li>
				            <li>Level: {this.state.level}</li>
				            <li>Apparatus: {this.state.apparatus}</li>
			            </ul>
			        </header>
			    </section>
			    <section>
				 	<blockquote>Details: {this.state.details}</blockquote>
				    <blockquote>Recommended warm-up: {this.state.warm_up}</blockquote>
				    <blockquote>Pre-requisites for skill: {this.state.prerequisite}</blockquote>
				    <dl>
				     	<dt>{this.state.action}</dt>
				  		<dd>{this.state.class}</dd>
				     	<dt>{this.state.priority}</dt>
				    </dl>
				    <DeleteSkill skillId={skill_id} />

				 	
				 	<Link to = {{
				 		pathname: updatePath,
				 		state: {
				 			currentskill_name: my_name,
				 			currentskill_altnames: myalt_names
				 		}
				 		}}>
					
						<button>Update Skill</button>
					</Link>
					<Link to = '/search'>
						<button>Back to Search</button>
					</Link>
					<Link to = '/newskill'>
					<button>Add Skill</button>
					</Link>
		
			   	</section>
			</ >
	)
	}
}