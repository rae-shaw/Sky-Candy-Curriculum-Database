import React from 'react';
import { Link } from 'react-router-dom';
import './SearchPage.css';
import APIContext from '../APIContext.js';
import APIconfigure from '../APIconfigure.js';

export default class SearchPage extends React.Component{
	static contextType = APIContext;



	render() {
	//const queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&')
    const { action=[] } = this.context
    const { age=[] } = this.context
    const { apparatus=[] } = this.context
    const { c_s=[] } = this.context
    const { level=[] } = this.context
    const { priority=[] } = this.context
console.log('**************** APPARATUS!',this.context.apparatus)
	return (

	<>
	    <nav role="navigation">Nav</nav>
	    <main role="main">
	    	<header role="banner">

	        <section>
	        	<h1>Search</h1>
		        <form id="search">
		        	<div className="form-section">
		            	<label htmlFor="skill-title">Skill Name</label>
		            	<input type="text" name="skill-name" placeholder="Lion in a tree" />
		          	</div>
		          	<div className="form-section">
		            	<label htmlFor="alternate-name">Alternate Name</label>
		            	<input type="text" name="alternate-name" placeholder="Lyin' in a tree" />
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
		        <header>
		            <h2>Lion in a Tree</h2>
		            <h3>Lyin in a Tree</h3>
		            <h4>Adult Lyra 1</h4>
		        </header>
		       	<blockquote>details here.</blockquote>
		        <blockquote>Recommended warm-up.</blockquote>
		        <blockquote>Pre-requisites for skill.</blockquote>
		        <dl>
		         	<dt>Type: Preqrequisite</dt>
		          	<dd>Sub Type: Transition</dd>
		         	<dt>Priority: Essential</dt>
		        </dl>
		        <Link to = '/newskill'>
		        	<button>Edit</button>
		        </Link>
		        <button>Delete</button>
		    </section>
		    <section>
		        <header>
		           	<h2>Tornado Spin</h2>
		            <p>Single Knee Spin</p>
		            <p>Adult Lyra 1</p>
		        </header>
		    </section>
		    <section>
		    	<header>
		            <h2>Crescent</h2>
		            <p>Adult Lyra 1</p>
		        </header>
		    </section>
		</main>
		<footer role="content-info">Footer</footer>
	</ >

)
}
}