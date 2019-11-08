import React from 'react';
import { Link } from 'react-router-dom';
import './SearchPage.css';
import APIContext from '../APIContext.js';
import APIconfigure from '../APIconfigure.js';
import SkillItem from '../SkillItem/SkillItem.js';
import Logo from '../Logo-inline.png'
import './SearchPage.css'

export default class SearchPage extends React.Component{
	static contextType = APIContext;

//constructor to create a ref
constructor(props){
	super(props)
	this.viewSearch = React.createRef()
}

	state = {
		searched: false
	}

//GET all skills with the query string
	handleSubmit = e => {
        e.preventDefault()
        
        let skillSearch = {
           
        }

        if (e.target['skill-name'].value !=='') {
        	skillSearch.name = e.target['skill-name'].value;
        }

        if (e.target['apparatus-id'].value !== '...') {
        	skillSearch.apparatus =  e.target['apparatus-id'].value; 
        }

        if (e.target['level-id'].value !== '...') {
            skillSearch.level = e.target['level-id'].value; 
        }

        if (e.target['age-id'].value !== '...') {
            skillSearch.age = e.target['age-id'].value; 
        }
        
        if (e.target['type-id'].value !== '...') {
            skillSearch.class = e.target['type-id'].value; 
        }
        
        if (e.target['sub-type-id'].value !== '...') {
            skillSearch.action = e.target['sub-type-id'].value; 
        }

         if (e.target['priority-id'].value !== '...') {
            skillSearch.priority = e.target['priority-id'].value; 
        }

        const queryString = Object.keys(skillSearch).map(key => key + '=' + skillSearch[key]).join('&')

        fetch(`${APIconfigure.API_END}/allskills/?${queryString}`)
        	.then(res => {
            	return res.json()
        	})
        	.then((skill) => {
            	this.context.updateSearch(skill)
            	this.setState(
            		{searched: true})
            	if (skill.length > 0){
            		window.scrollTo(0, this.viewSearch.current.offsetTop)
            	}
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
    const skillsToRender= this.context.currentSearch.map((skill, i) => (<SkillItem {...skill} key={skill.id} />))
	
		return (

			<>
			    <nav role="navigation" >
					<Link to='/'>
						<img src={Logo} alt='company-logo' className='logo'/>
					</Link>
				</nav>
			    <main role="main">
			    	<header role="banner">
			    		<h1 className='fullSkillTitle'>Search</h1>
			    	</header>
			        <section className ='formSection'>
				        <form className='customForm' id="search" onSubmit={this.handleSubmit}>
				        	<div className="form-names"  >
				            	<label htmlFor="skill-title">Skill Name</label>
				            	<input className='text-area' type="text" name="skill-name" placeholder="Lion in a tree" />
				          	</div>
				         	<div className="custom-select">
				            	<label htmlFor="apparatus-select">
				            		Apparatus
				            	</label>
				            	<select id='apparatus-select' name='apparatus-id'>
					            	<option value={null}>...</option>
					            	{apparatus.map(apparatus =>
					                <option key={apparatus.id} value={apparatus.name}>
					                  {apparatus.apparatus}
					                </option>
					              )}
					            </select>
				        	</div>
				        	<div className="custom-select">
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
				          	<div className="custom-select">
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
				          	<div className="custom-select">
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
				          	<div className="custom-select">
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
				          	<div className="custom-select">
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
				          	<section className='search-buttons'>
				          		<button className = 'buttons' type="submit">Search</button>
				          		<button className = 'buttons' type="reset">Reset</button>
				          	</section>
				        </form>
				     </section>
				
					{skillsToRender.length === 0 && this.state.searched ? <h1>No results. Please adjust your search and try again. </h1> : this.state.searched ? (
					<section id = 'searchResults' ref = {this.viewSearch} >
						<h1>Search Results</h1>
						<div className='skillsList'>
							{skillsToRender}
						</div>
						<div>
						Don't see what you're looking for?
						</div>
						<div className = 'buttonRow'>
							<Link to = '/newskill'>
							<button className = 'buttons'>Add Skill</button>
							</Link>
							
						</div>
					</section>
					) : null }
				</main>
			</ >
		)
	}
}
