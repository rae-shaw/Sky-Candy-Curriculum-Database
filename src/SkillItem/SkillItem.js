import React from 'react';
import { Link } from 'react-router-dom';
import APIContext from '../APIContext.js';
import Child from './Child.js';



export default class SkillItem extends React.Component{
	static contextType = APIContext;

	constructor(props) {
    	super(props);
    	this.state = {
      		isHidden: true
      	}
     }

  	toggleHidden () {
		this.setState({
  			isHidden: !this.state.isHidden
		})
	}

	render() {
		const { currentSearch= [] } = this.context
		let skillSearchItem ={
			name: this.props.name,
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
			<section>
		        <header>
		        	<ul>
			            <h2>{skillSearchItem.name}</h2>
			            <li>Alternate Names: {skillSearchItem.alt_names}</li>
			            <li>Age: {skillSearchItem.age}</li>
			            <li>Level: {skillSearchItem.level}</li>
		            </ul>
		        </header>
		    </section>
		    <div>
	        	<button onClick={this.toggleHidden.bind(this)} >
	          			More
	        	</button>
	        	{!this.state.isHidden && <Child props = {skillSearchItem}/>}
      		</div>
		</ >
	)
}
}
