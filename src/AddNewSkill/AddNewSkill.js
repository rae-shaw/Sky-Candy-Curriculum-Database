import React from 'react';
import { Link } from 'react-router-dom';
import APIContext from '../APIContext.js';
import APIconfigure from '../APIconfigure.js';

export default class AddNewSkill extends React.Component{
    static contextType = APIContext;

    handleSubmit = e => {
        e.preventDefault()
        const newSkill = {
            primaryname: e.target['skill-name'].value,
            alt_names: e.target['alternate-name'].value,
            apparatus_id: e.target['apparatus-id'].value,
            level_id: e.target['level-id'].value,
            age_id: e.target['age-id'].value,
            class_id: e.target['type-id'].value,
            action_id: e.target['sub-type-id'].value,
            priority_id: e.target['priority-id'].value,
            prerequisites: e.target['prerequisites'].value,
            details: e.target['details'].value,
            warm_up: e.target['warm-up'].value,
            video: e.target['video'].value,
        }
        console.log('************newSkill', newSkill)
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
            this.props.history.push(`/search`)
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
	return(
		<main role="main">
      		<header>
        		<h1>Add Skill</h1>
      		</header>
      		<section>
        		<form id="add-skill" onSubmit={this.handleSubmit}>
          			<div className="form-section">
            			<label htmlFor="dream-title">Skill Name</label>
            			<input type="text" name="skill-name" placeholder="Lion in a tree" required/>
          			</div>
          			<div className="form-section">
            			<label htmlFor="alternate-name">Alternate Name</label>
            			<input type="text" name="alternate-name" placeholder="Lyin' in a tree"/>
          			</div>
          			<div className="form-section">
                        <label htmlFor="apparatus-select">
                            Apparatus
                        </label>
                        <select id='apparatus-select' name='apparatus-id'>
                            <option value={null}></option>
                            {apparatus.map(apparatus =>
                                <option key={apparatus.id} value={apparatus.id}>
                                    {apparatus.apparatus}
                                </option>
                            )}
                        </select>
                        <Link className= 'apparatus-item' to='/add-apparatus'>
                        Add Apparatus
                        </Link>
                         <Link className= 'apparatus-item' to='/delete-apparatus'>
                        Delete Apparatus
                        </Link>
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
          			<div className="form-section">
           		       <label htmlFor="details">Details</label>
            	       <textarea name="details" rows="15"   ></textarea>
          			</div>
          			<div className="form-section">
            			<label htmlFor="prerequisites">Prerequsites</label>
            			<textarea name="prerequisites" rows="10"   ></textarea>
          			</div>
          			<div className="form-section">
            			<label htmlFor="warm-up">Recommended Warm-Up</label>
            			<textarea name="warm-up" rows="10"   ></textarea>
          			</div>
          			<div>
            			<label htmlFor='video'>Video Link</label><input type="url" name="video"/>
           			</div>
          
          				<button type="submit">Submit</button>

                <Link to = '/addskill'>
          			 <button type="reset">Reset</button>
                </Link>
        		</form>
      		</section>
    	</main>
    )
}
}