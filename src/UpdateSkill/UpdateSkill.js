import React from 'react';
import { Link } from 'react-router-dom';
import APIContext from '../APIContext.js';
import APIconfigure from '../APIconfigure.js';

//this.props.match.params: {updateSkill: "61"}
export default class UpdateSkill extends React.Component {
	constructor(props) {
    super(props);
    this.state = { 
    	id: '',
    	apparatus_id: '',
    	priority_id: '',
    	level_id: ''
    };
 	}
static contextType = APIContext;

// componentDidMount(){
// 	this.setState({
// 		id: currentskill.id
// 	})
// }

// change: function(event){
//          this.setState({value: event.target['apparatus-id'].value});
//      },


 handleSubmit = (event, currentskill) => {
 	console.log('currentskill', currentskill)
        event.preventDefault()

        this.setState({
        	id: currentskill.id
        })

        const { id, apparatus_id, priority_id, level_id } = this.state
    	const updatedSkill = { id, apparatus_id, priority_id, level_id }
        fetch(`${APIconfigure.API_END}/skill/id/${this.props.match.params.updateSkill}`, {
            method: 'PATCH',
            body: JSON.stringify(updatedSkill),
            headers: {
            'content-type': 'application/json'
        	},
       	})
        .then(skill => {
            this.props.history.push(`/main`)
        })
        .catch(error => {
            console.error({ error })
        });
    }
 handleChangeApparatus = e => {
    	this.setState({ apparatus_id: e.target.value })
  	};

  	handleChangeLevel = e => {
    	this.setState({ action_id: e.target.value })
  	};

  	handleChangeRating = e => {
    	this.setState({ rating: e.target.value })
  	};


render() {
	const updateSkill_id = this.props.match.params.updateSkill
	function isSkill(current) {
  			return current.id == updateSkill_id;
		}

	const updateSkill = this.context.currentSearch.find(isSkill)

	const { action=[] } = this.context
    const { age=[] } = this.context
    const { apparatus=[] } = this.context
    const { c_s=[] } = this.context
    const { level=[] } = this.context
    const { priority=[] } = this.context
    const { currentSearch= [] } = this.context
	
	console.log('updateSkill', updateSkill)
	console.log('PROPS IN UPDATESKILL', this.props)
	console.log(typeof updateSkill_id)
	console.log('state', this.state)
	//console.log('updateSkill', updateSkill)
	//console.log('updatedSkill', updatedSkill)
	return(

		<>
			Hello World
			 <section>
	        	<h1>Update Skill</h1>
	        	<h2>{updateSkill.name}</h2>
		        <form id="updateSkill" onSubmit={this.handleSubmit}>
		        	<div className="form-section">
		            	<label htmlFor="skill-title">Alternate Names</label>
		            	<input type="text" name="alternate-name" defaultValue={updateSkill.alt_names}  />
		          	</div>
		         	<div className="form-section">
		            	<label htmlFor="apparatus-select">
		            		Apparatus
		            	</label>
		            	<select id='apparatus-select' name='apparatus-id'  onChange={this.handleChangeApparatus} defaultValue = {updateSkill.apparatus} >
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
		            	<select id='level-select' name='level-id' onChange={this.handleChangeLevel} defaultValue = {updateSkill.level}>
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
			            <select id='age-select' name='age-id' defaultValue = {updateSkill.age}>
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
		            	<select id='type-select' name='type-id' defaultValue = {updateSkill.class}>
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
		            	<select id='sub-type-select' name='sub-type-id' defaultValue = {updateSkill.action}>
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
		            	<select id='priority-select' name='priority-id' defaultValue = {updateSkill.priority}>
			            	<option value={null}>...</option>
			             	{priority.map(priority =>
			                <option key={priority.id} value={priority.id}>
			                  {priority.priority}
			                </option>
			              )}
			            </select>
			        <div className="form-section">
           		    	<label htmlFor="details">Details</label>
            	    	<textarea name="details" rows="15"  defaultValue = {updateSkill.details} ></textarea>
          			</div>
          			<div className="form-section">
            			<label htmlFor="prerequisites">Prerequsites</label>
            			<textarea name="prerequisites" rows="10" defaultValue ={updateSkill.prerequisites}   ></textarea>
          			</div>
          			<div className="form-section">
            			<label htmlFor="warm-up">Recommended Warm-Up</label>
            			<textarea name="warm-up" rows="10" defaultValue={updateSkill.warm_up}  ></textarea>
          			</div>
          			<div>
            			<label htmlFor='video'>Video Link</label><input type="url" name="video" defaultValue ={updateSkill.video}/>
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