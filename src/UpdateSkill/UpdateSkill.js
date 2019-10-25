import React from 'react';
import { Link } from 'react-router-dom';
import APIContext from '../APIContext.js';
import APIconfigure from '../APIconfigure.js';

//this.props.match.params: {updateSkill: "61"}
export default class UpdateSkill extends React.Component {
static contextType = APIContext;
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
	
	console.log('UPDATESKILLCONTEXT', this.context)
	console.log('PROPS IN UPDATESKILL', this.props)
	console.log('updateSkill_id', updateSkill_id)
	console.log('updateSkill', updateSkill)
	return(

		<>
			Hello World
			 <section>
	        	<h1>Update Skill</h1>
		        <form id="updateSkill">
		        	<div className="form-section">
		            	<label htmlFor="skill-title">Skill Name</label>
		            	<input type="text" name="skill-name" defaultValue={updateSkill.name}  />
		          	</div>
		         	<div className="form-section">
		            	<label htmlFor="apparatus-select">
		            		Apparatus
		            	</label>
		            	<select id='apparatus-select' name='apparatus-id'>
			            	<option value={null}>...</option>
			            	{apparatus.map(apparatus =>
			                <option key={apparatus.id} value={updateSkill.apparatus} >
			                  {apparatus.apparatus}
			                </option>
			              )}
			            </select>
		        	</div>
		        	<div className="level">
		            	<label htmlFor="level-select">
		            		Level
		            	</label>
		            	<select id='level-select' name='level-id'>
			             	<option value={null}>...</option>
			             	{level.map(level =>
			                <option key={level.id} value={level.level}>
			                  {level.level}
			                </option>
			              )}
			            </select>
		          	</div>
		          	<div className='field'>
			            <label htmlFor='age-select'>
			              	Age
			            </label>
			            <select id='age-select' name='age-id'>
			            	<option value={null}>...</option>
			             	{age.map(age =>
			                <option key={age.id} value={age.age}>
			                  {age.age}
			                </option>
			              )}
			            </select>
			          </div>
		          	<div className="Type">
		            	<label htmlFor="type">Type</label>
		            	<select id='type-select' name='type-id'>
			            	<option value={null}>...</option>
			             	{c_s.map(c_s =>
			                <option key={c_s.id} value={c_s.class}>
			                  {c_s.class}
			                </option>
			              )}
			            </select>
		          	</div>
		          	<div className="Sub-Type">
		            	<label htmlFor="sub-type">Sub-Type</label>
		            	<select id='sub-type-select' name='sub-type-id'>
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
		            	<select id='priority-select' name='priority-id'>
			            	<option value={null}>...</option>
			             	{priority.map(priority =>
			                <option key={priority.id} value={priority.priority}>
			                  {priority.priority}
			                </option>
			              )}
			            </select>
		          	</div>
		          		<button type="submit">Search</button>
		          		<button type="reset">Reset</button>
		        </form>
		     </section>
		</>


		)
}
}