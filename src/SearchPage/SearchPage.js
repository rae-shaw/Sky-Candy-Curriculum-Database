import React from 'react';
import { Link } from 'react-router-dom';
import './SearchPage.css';

export default function SearchPage(props){
	return (
	<body>
	    <nav role="navigation">Nav</nav>
	    <main role="main">
	    	<header role="banner">

	        <section>
	        	<h1>Search</h1>
		        <form id="record-dream">
		        	<div class="form-section">
		            	<label for="dream-title">Skill Name</label>
		            	<input type="text" name="skill-name" placeholder="Lion in a tree" required />
		          	</div>
		          	<div class="form-section">
		            	<label for="alternate-name">Alternate Name</label>
		            	<input type="text" name="alternate-name" placeholder="Lyin' in a tree" />
		         	</div>
		         	<div class="form-section">
		            	<label for="apparatus">Apparatus</label>
		            	<select>
		              		<option value="Trapeze">Trapeze</option>
		              		<option value="Lyra">Lyra</option>
		              		<option value="Hammock">Hammock</option>
		              		<option Silks="audi">Silks</option>
		            	</select>
		        	</div>
		        	<div class="level" class="form-section">
		            	<label for="apparatus">Level</label>
		            	<select>
		              		<option value="1">1</option>
		              		<option value="2">2</option>
		              		<option value="3">3</option>
		              		<option Silks="4">4</option>
		            	</select>
		          	</div>
		          	<div class="form-section">
		            	<p>Age</p>
		            	<label>
		              		<span>Adult</span>
		            	</label>
		            		<input type="radio" name="age" class="age-radio" />
		            	<label for="age">
		              			<span>Youth</span>
		            	</label>
		            		<input type="radio" name="age"  class="age-radio" />
		            	<label for="age">
		              			<span>Early Childhood</span>
		            	</label>
		            		<input type="radio" name="age"  class="age-radio" />
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
	</body>

)
}