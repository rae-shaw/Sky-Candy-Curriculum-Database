import React from 'react';
import { Link } from 'react-router-dom';
import APIContext from '../APIContext.js';
import APIconfigure from '../APIconfigure.js';
import Logo from '../Logo-inline.png';

export default class AddNewSkill extends React.Component{
    static contextType = APIContext;

    //submit the new skill
    handleSubmit = e => {
        e.preventDefault()
        
        let newSkill = {
            primaryname: e.target['skill-name'].value,
            apparatus_id: e.target['apparatus-id'].value 
        }

        if (e.target['alternate-name'].value !== '') {
            newSkill.alt_names = [e.target['alternate-name'].value];
        }

        if (e.target['prerequisites'].value !== '') {
            newSkill.prerequisites = e.target['prerequisites'].value;
        }

        if (e.target['details'].value !== '') {
            newSkill.details = e.target['details'].value;
        }

        if (e.target['warm-up'].value !== '') {
            newSkill.warm_up = e.target['warm-up'].value;
        }

        if (e.target['video'].value !== '') {
            newSkill.details = e.target['video'].value;
        }

        if (e.target['level-id'].value !== '...') {
            newSkill.level_id = e.target['level-id'].value; 
        }

        if (e.target['age-id'].value !== '...') {
            newSkill.age_id = e.target['age-id'].value; 
        }
        
        if (e.target['type-id'].value !== '...') {
            newSkill.class_id = e.target['type-id'].value; 
        }
        
        if (e.target['sub-type-id'].value !== '...') {
            newSkill.action_id = e.target['sub-type-id'].value; 
        }

         if (e.target['priority-id'].value !== '...') {
            newSkill.priority_id = e.target['priority-id'].value; 
        }

        fetch(`${APIconfigure.API_END}/skill`, {
            method: 'POST',
            headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newSkill),

    })
        .then(res => {
            if (!res.ok)
                return res.json().then(e => Promise.reject(e))
            return res.json()
        })
        .then(skill => {
            this.props.history.push(`/full-skill/${skill}`)
        })
        .catch(error => {
            console.error({ error })
        });
    }

  render() {
    const { action=[] } = this.context
    const { age=[] } = this.context
    const { apparatus=[] } = this.context
    const { c_s=[] } = this.context
    const { level=[] } = this.context
    const { priority=[] } = this.context
	return(
		<main role="main">    
      		<nav role="navigation" >
                <Link to='/'>
                    <img src={Logo} alt='company-logo' className='logo'/>
                </Link>
            </nav>
            <header>
        		<h1 className='fullSkillTitle'>Add Skill</h1>
      		</header>
      		<section className ='formSection'>
        		<form className='customForm' id="add-skill" onSubmit={this.handleSubmit}>
          			<div className="form-names">
            			<label htmlFor="dream-title">Skill Name</label>
            			<input className='text-area' type="text" name="skill-name" placeholder="Lion in a tree" required/>
          			</div>
          			<div className="form-names">
            			<label htmlFor="alternate-name">Alternate Name</label>
            			<input className='text-area' type="text" name="alternate-name" placeholder="Lyin' in a tree"/>
          			</div>
          			<div className="custom-select">
                        <label htmlFor="apparatus-select">
                            Apparatus
                        </label>
                        <select id='apparatus-select' name='apparatus-id'>
                            {apparatus.map(apparatus =>
                                <option key={apparatus.id} value={apparatus.id}>
                                    {apparatus.apparatus}
                                </option>
                            )}
                        </select>
                    </div>
                    <div className="custom-select" >
                        <label htmlFor="level-select">
                            Level
                        </label>
                        <select id='level-select' name='level-id'>
                            <option type = 'number' value={null}>...</option>
                            {level.map(level =>
                                <option key={level.id} value={level.id}>
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
                            <option type = 'number' value={null}>...</option>
                            {age.map(age =>
                                <option key={age.id} value={age.id}>
                                    {age.age}
                                </option>
                            )}
                        </select>
                    </div>
                    <div className="custom-select">
                        <label htmlFor="type">Type</label>
                        <select id='type-select' name='type-id'>
                            <option type = 'number' value={null}>...</option>
                            {c_s.map(c_s =>
                                <option key={c_s.id} value={c_s.id}>
                                    {c_s.class}
                                </option>
                            )}
                        </select>
                    </div>
                    <div className="custom-select">
                        <label htmlFor="sub-type">Sub-Type</label>
                        <select id='sub-type-select' name='sub-type-id'>
                            <option type = 'number' value={null}>...</option>
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
                            <option type = 'number' value={null}>...</option>
                            {priority.map(priority =>
                                <option key={priority.id} value={priority.id}>
                                {priority.priority}
                                </option>
                            )}
                        </select>
                    </div>
          			<div className="form-section">
           		       <label htmlFor="details">Details</label>
            	       <textarea className='text-area' name="details" rows="15"   ></textarea>
          			</div>
          			<div className="form-section">
            			<label htmlFor="prerequisites">Prerequisites</label>
            			<textarea className='text-area' name="prerequisites" rows="10"   ></textarea>
          			</div>
          			<div className="form-section">
            			<label htmlFor="warm-up">Recommended Warm-Up</label>
            			<textarea className='text-area' name="warm-up" rows="10"   ></textarea>
          			</div>
          			<div>
            			<label htmlFor='video'>Video Link</label><input className='text-area' id='video-form' type="url" name="video"/>
           			</div>
                    <div className = 'buttonRow'>
          				<button className='buttons' type="submit" >Submit</button>
                        <Link to = '/addskill'>
                  			 <button className='buttons' type="reset">Reset</button>
                        </Link>
                    </div>
        		</form>
      		</section>
    	</main>
    )
}
}