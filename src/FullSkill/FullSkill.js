import React from 'react';
import { Link } from 'react-router-dom';
import APIContext from '../APIContext.js';
import APIconfigure from '../APIconfigure.js';
import DeleteSkill from '../DeleteSkill/DeleteSkill.js'


export default class UpdateSkill extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {
      		redirect: false
    	};
  	}


	static contextType = APIContext;

	render(){
		const { currentSearch= [] } = this.context
		console.log('context', this.context.currentSearch)
		const searchSkills = this.context.currentSearch
		console.log('searchSkill', searchSkills)
		const skill_id = this.props.match.params.skillId
		
		function isSkill(current) {
			console.log('skill_id', skill_id)

  			return current.id == skill_id;
		}
		
		
		const currentSkill = searchSkills.find(isSkill)
		console.log('CURRENTSKILL', currentSkill)
		const updatePath = `/update-skill/${skill_id}`
		return(
			< >
			Hello World!

				<section>
			        <header>
			        	<ul>
				            <h2>{currentSkill.name}</h2>
				            <li>Alternate Names: {currentSkill.alt_names}</li>
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
				 	<Link to = {updatePath} currentskill ={currentSkill}>
						<button>Update Skill</button>
					</Link>
			    </section>
			</ >
		)
	}
}