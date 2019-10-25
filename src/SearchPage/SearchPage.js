import React from 'react';
import { Link } from 'react-router-dom';
import './SearchPage.css';
import APIContext from '../APIContext.js';
import APIconfigure from '../APIconfigure.js';
import SkillItem from '../SkillItem/SkillItem.js';

export default class SearchPage extends React.Component{
	static contextType = APIContext;

	handleSubmit = e => {
        e.preventDefault()
        
        let skillSearch = {
           
        }

        if (e.target['skill-name'].value !=='') {
        	skillSearch.name = e.target['skill-name'].value;
        }

        if (e.target['apparatus-id'].value !== '...') {
        	skillSearch.apparatus_id =  e.target['apparatus-id'].value; 
        }

        if (e.target['level-id'].value !== '...') {
            skillSearch.level_id = e.target['level-id'].value; 
        }

        if (e.target['age-id'].value !== '...') {
            skillSearch.age_id = e.target['age-id'].value; 
        }
        
        if (e.target['type-id'].value !== '...') {
            skillSearch.class_id = e.target['type-id'].value; 
        }
        
        if (e.target['sub-type-id'].value !== '...') {
            skillSearch.action_id = e.target['sub-type-id'].value; 
        }

         if (e.target['priority-id'].value !== '...') {
            skillSearch.priority_id = e.target['priority-id'].value; 
        }

        const queryString = Object.keys(skillSearch).map(key => key + '=' + skillSearch[key]).join('&')

        fetch(`${APIconfigure.API_END}/allskills/?${queryString}`)
        	.then(res => {
            	return res.json()
        	})
        	.then((skill) => {
            	console.log(this.context.updateSearch)
            	this.context.updateSearch(skill)
            })
        	.catch(error => {
            	console.error({ error })
        	})
	} 




	render() {
	
    const { action=[] } = this.context
    const { age=[] } = this.context
    const { apparatus=[] } = this.context
    const { c_s=[] } = this.context
    const { level=[] } = this.context
    const { priority=[] } = this.context
    const { currentSearch= [] } = this.context
    const skillsToRender= this.context.currentSearch.map((skill, i) => (<SkillItem {...skill} key={skill.id} />))

console.log('SKILLSTORENDER', skillsToRender)
	return (

	<>
	    <nav role="navigation">Nav</nav>
	    <main role="main">
	    	<header role="banner">

	        <section>
	        	<h1>Search</h1>
		        <form id="search" onSubmit={this.handleSubmit}>
		        	<div className="form-section">
		            	<label htmlFor="skill-title">Skill Name</label>
		            	<input type="text" name="skill-name" placeholder="Lion in a tree" />
		          	</div>
		         	<div className="form-section">
		            	<label htmlFor="apparatus-select">
		            		Apparatus
		            	</label>
		            	<select id='apparatus-select' name='apparatus-id'>
			            	<option value={null}>...</option>
			            	{apparatus.map(apparatus =>
			                <option key={apparatus.id} value={apparatus.id}>
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
			            <select id='age-select' name='age-id'>
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
		            	<select id='type-select' name='type-id'>
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
			                <option key={priority.id} value={priority.id}>
			                  {priority.priority}
			                </option>
			              )}
			            </select>
		          	</div>
		          		<button type="submit">Search</button>
		          		<button type="reset">Reset</button>
		        </form>
		     </section>
		</header>
			<section>
				<h1>Search Results</h1>
				<div>
					{skillsToRender}
				</div>
				<div>
					<Link className= 'skills-item' to='/newskill'>
						Add Skill
					</Link>	
				</div>
			</section>
			
		</main>
		<footer role="content-info">Footer</footer>
	</ >

)
}
}