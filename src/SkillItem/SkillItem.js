import React from 'react';
import { Link } from 'react-router-dom';
import APIContext from '../APIContext.js';




export default class SkillItem extends React.Component{
	static contextType = APIContext;



  	toggleHidden () {
		this.setState({
  			isHidden: !this.state.isHidden
		})
	}

	render() {
		// const { action=[] } = this.context
  //   	const { age=[] } = this.context
  //   	const { apparatus=[] } = this.context
    	//const { c_s=[] } = this.context
    	// const { level=[] } = this.context
    	// const { priority=[] } = this.context
    	// const { currentSearch= [] } = this.context
    	const skillPath = `/full-skill/${this.props.id}`
		
		let skillSearchItem ={
			name: this.props.name,
			apparatus: this.props.apparatus
		}
	if (this.props.alt_names !== ''){
		skillSearchItem.alt_names = this.props.alt_names;
	}
	if (this.props.age !== '') {
		skillSearchItem.age = this.props.age;
	}
	if (this.props.level !== '') {
		skillSearchItem.level =this.props.level
	}

	if (this.props.details !== '') {
		skillSearchItem.details = this.props.details;
	}	
	if (this.props.warm_up !== '') {
		skillSearchItem.warm_up = this.props.warm_up;
	}
	if (this.props.prerequisite !== '') {
		skillSearchItem.prerequisite = this.props.prerequisite;
	}
	// if (this.props.class !== '') {
	// 	skillSearchItem.type = this.props.class;
	// }

	if  (this.props.action !== '') {
		skillSearchItem.sub_type = this.props.action;
	}

	if (this.props.priority !== ''){
		skillSearchItem.priority = this.props.priority;
	}

	return(

		< >
			<section className= 'skillItem'>
	        	<ul>
		            <h2 className= 'skillheader'>{skillSearchItem.name}</h2>
		            <li className = 'altnames'>Alternate Names: </li>
		            <li className = 'altnames'>{skillSearchItem.alt_names}</li>
		            <li>Age: {skillSearchItem.age}</li>
		            <li>Level: {skillSearchItem.level}</li>
		            <li>Apparatus: {skillSearchItem.apparatus}</li>
	            </ul>
		        <Link to = {skillPath} skillid = {this.props.id} >
					<button className='more-buttons'>More</button>
				</Link>
		    </section>
		</ >
	)
}
}
