import React from 'react';
import { Link } from 'react-router-dom';
import './SearchPage.css';
import APIContext from '../APIContext.js';
import APIconfigure from '../APIconfigure.js';

export default class SearchPage extends React.Component{
	static contextType = APIContext;

	render() {
    const { action=[] } = this.context
    const { age=[] } = this.context
    const { apparatus=[] } = this.context
    const { c_s=[] } = this.context
    const { level=[] } = this.context
    const { priority=[] } = this.context
console.log(this.context.age)
	return (

	<>
	    <nav role="navigation">Nav</nav>
	    <main role="main">
	    	<header role="banner">

	        <section>
	        	<h1>Search</h1>
		        <form id="record-dream">
		        	<div className="form-section">
		            	<label htmlFor="dream-title">Skill Name</label>
		            	<input type="text" name="skill-name" placeholder="Lion in a tree" />
		          	</div>
		          	<div className="form-section">
		            	<label htmlFor="alternate-name">Alternate Name</label>
		            	<input type="text" name="alternate-name" placeholder="Lyin' in a tree" />
		         	</div>
		         	<div className="form-section">
		            	<label htmlFor="apparatus">Apparatus</label>
		            	<select>
		              		<option value="Trapeze">Trapeze</option>
		              		<option value="Lyra">Lyra</option>
		              		<option value="Hammock">Hammock</option>
		              		<option value="Silks">Silks</option>
		            	</select>
		        	</div>
		        	<div className="level">
		            	<label htmlFor="apparatus">Level</label>
		            	<select>
		              		<option value="1">1</option>
		              		<option value="2">2</option>
		              		<option value="3">3</option>
		              		<option value="4">4</option>
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
		            	<label htmlFor="type">Class</label>
		            	<select>
		              		<option value="Class1">Class1</option>
		              		<option value="Class2">Class2</option>
		              		<option value="Class3">Class3</option>
		            	</select>
		          	</div>
		          	<div className="Sub-Type">
		            	<label htmlFor="sub-type">Sub-Type</label>
		            	<select>
		              		<option value="Action 1">Action 1</option>
		              		<option value="Action 2">Action 2</option>
		              		<option value="Action 2">Action 3</option>
		            	</select>
		          	</div>
		          	<div className="Priority">
		            	<label htmlFor="priority">priority</label>
		            	<select>
		              		<option value="Priority 1">Priority 1</option>
		              		<option value="Priority 2">Priority 2</option>
		              		<option value="Priority 2">Priority 3</option>
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