import React from 'react';
//import { Link } from 'react-router-dom';
import APIContext from '../APIContext.js';
import APIconfigure from '../APIconfigure.js';
//import ErrorBoundary from '../ErrorBoundary.js';

//this.props.match.params: {updateSkill: "61"}
export default class UpdateSkill extends React.Component {
	constructor(props) {
  	super(props);
	    this.state = { 
	    	id: '',
	    	name: this.props.location.state.currentskill_name,
	    	alt_names: [this.props.location.state.currentskill_altnames],
	    	apparatus_id: '',
	    	priority_id: '',
	    	level_id: '',
	    	action_id: '',
	    	age_id: '',
	    	details: '',
	    	warm_up:'',
	    	prerequisites: '',
	    	video: ''
	    };
	}

	static contextType = APIContext;

componentDidMount() {
	console.log('props at componenet did mount', this.props)
	fetch(`${APIconfigure.API_END}/skill/id/${this.props.match.params.updateSkill}`, {
  		method: 'GET',
  		headers: {
    		
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
          	apparatus_id: responseData.apparatus_id,
          	priority_id: responseData.priority_id,
          	level_id: responseData.level_id,
          	action_id: responseData.action_id,
          	age_id: responseData.age_id,
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

handleSubmit = e => {
	//console.log('currentskill', currentskill)
    e.preventDefault()

    const { id, apparatus_id, priority_id, level_id, alt_names, action_id, age_id, details, warm_up, prerequisites } = this.state
	const updatedSkill = { id, apparatus_id, priority_id, level_id, alt_names, action_id, age_id, details, warm_up, prerequisites }
	console.log('******updatedSkill', updatedSkill)
	console.log('props at patch handle submit', this.props)

    fetch(`${APIconfigure.API_END}/skill/id/${this.props.match.params.updateSkill}`, {
        method: 'PATCH',
        body: JSON.stringify(updatedSkill),
        headers: {
        'content-type': 'application/json'
    	},
   	})
    .then( () => {
    	console.log('props in then', this.props.match.updateSkill)
        this.props.history.push(`/full-skill/${this.props.match.params.updateSkill}`)
    })
    .catch(error => {
        console.error({ error })
    });
}
handleChangeApparatus = e => {
	this.setState({ apparatus_id: e.target.value })
};

handleChangeAlt_Names = e => {
	this.setState({ alt_names: [e.target.value] })
};

handleChangeLevel = e => {
	this.setState({ level_id: e.target.value })
};

handleChangePriority = e => {
	this.setState({ priority_id: e.target.value })
};

handleChangeAction = e => {
	this.setState({ action_id: e.target.value })
}

handleChangeAge = e => {
	this.setState({ age_id: e.target.value })
}

handleChangeDetails = e => {
	this.setState({ details: e.target.value })
}

handleChangeWarm_Up = e => {
	this.setState({ warm_up: e.target.value })
}

handleChangePrerequisites = e => {
	this.setState({ prerequisites: e.target.value })
}

handleChangeVideo = e => {
	this.setState({ video: e.target.value })
}


render() {
	
	const { action=[] } = this.context
    const { age=[] } = this.context
    const { apparatus=[] } = this.context
    const { c_s=[] } = this.context
    const { level=[] } = this.context
    const { priority=[] } = this.context
    //const { currentSearch= [] } = this.context

    //const searchSkills = this.context.currentSearch
	console.log('currentskill', this.props.currentskill)
	console.log('PROPS IN UPDATESKILL', this.props)
	console.log('state', this.state)
	console.log('CONTEXT IN UPDATE', this.context)


	return(
		<>
			Hello World
			 <section>
	        	<h1>Update Skill</h1>
	        	<h2>{this.state.name}</h2>
		        <form id="updateSkill" onSubmit={this.handleSubmit}>
		        	<div className="form-section">
		            	<label htmlFor="skill-title">Alternate Names</label>
		            	<input type="text" name="alternate-name" onChange={this.handleChangeAlt_Names} value={this.state.alt_names}  />
		          	</div>
		         	<div className="form-section">
		            	<label htmlFor="apparatus-select">
		            		Apparatus
		            	</label>
		            	<select id='apparatus-select' name='apparatus-id'  onChange={this.handleChangeApparatus} value={this.state.apparatus_id}>
			            	<option value={null}>...</option>
			            	{apparatus.map(apparatus =>
			                <option key={apparatus.id} value = {apparatus.id}>
			                  {apparatus.apparatus}
			                </option>
			              )}
			            </select >
		        	</div>
		        	<div className="level">
		            	<label htmlFor="level-select">
		            		Level
		            	</label>
		            	<select id='level-select' name='level-id' onChange={this.handleChangeLevel} value = {this.state.level_id}>
			             	<option value={null}>...</option>
			             	{level.map(level =>
			                <option key={level.id} value={level.id}>
			                  {level.level}
			                </option>
			              )}
			            </select>
		          	</div>
		          	<div className='field'>
			            <label htmlFor='age-select'>
			              	Age
			            </label>
			            <select id='age-select' name='age-id' onChange={this.handleChangeAge} value = {this.state.age_id}>
			            	<option value={null}>...</option>
			             	{age.map(age =>
			                <option key={age.id} value={age.id}>
			                  {age.age}
			                </option>
			              )}
			            </select>
			          </div>
		          	<div className="Type">
		            	<label htmlFor="type">Type</label>
		            	<select id='type-select' name='type-id' value = {this.state.class_id}>
			            	<option value={null}>...</option>
			             	{c_s.map(c_s =>
			                <option key={c_s.id} value={c_s.id}>
			                  {c_s.class}
			                </option>
			              )}
			            </select>
		          	</div>
		          	<div className="Sub-Type">
		            	<label htmlFor="sub-type">Sub-Type</label>
		            	<select id='sub-type-select' name='sub-type-id' onChange={this.handleChangeAction} value = {this.state.action_id || ''}>
			            	<option value={null}>...</option>
			             	{action.map(action =>
			                <option key={action.id} value={action.id}>
			                  {action.action}
			                </option>
			              )}
			            </select>
		          	</div>
		          	<div className="Priority">
		            	<label htmlFor="priority">Priority</label>
		            	<select id='priority-select' name='priority-id' onChange={this.handleChangePriority} value = {this.state.priority_id}>
			            	<option value={null}>...</option>
			             	{priority.map(priority =>
			                <option key={priority.id} value={priority.id}>
			                  {priority.priority}
			                </option>
			              )}
			            </select>
			        <div className="form-section">
           		    	<label htmlFor="details">Details</label>
            	    	<textarea name="details" rows="15"  value = {this.state.details} onChange={this.handleChangeDetails} ></textarea>
          			</div>
          			<div className="form-section">
            			<label htmlFor="prerequisites">Prerequsites</label>
            			<textarea name="prerequisites" rows="10" value ={this.state.prerequisites}  onChange={this.handleChangePrerequisites}  ></textarea>
          			</div>
          			<div className="form-section">
            			<label htmlFor="warm-up">Recommended Warm-Up</label>
            			<textarea name="warm-up" rows="10" value={this.state.warm_up} onChange={this.handleChangeWarm_Up} ></textarea>
          			</div>
          			<div>
            			<label htmlFor='video'>Video Link</label><input type="url" name="video"  onChange={this.handleChangeVideo} value ={this.state.video}/>
           			</div>
          
		          	</div>
		          		<button type="submit">Submit</button>
		          		<button type="reset">Reset</button>
		        </form>
		     </section>
		</>


		)
}
}