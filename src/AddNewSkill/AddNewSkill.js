import React from 'react';
import { Link } from 'react-router-dom';
import APIContext from '../APIContext.js';
import APIconfigure from '../APIconfigure.js';

export default class AddNewSkill extends React.Component{
static contextType = APIContext;

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
        		<form id="record-dream">
          			<div class="form-section">
            			<label for="dream-title">Skill Name</label>
            			<input type="text" name="skill-name" placeholder="Lion in a tree" required/>
          			</div>
          			<div class="form-section">
            			<label for="alternate-name">Alternate Name</label>
            			<input type="text" name="alternate-name" placeholder="Lyin' in a tree"/>
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
          			<div class="form-section">
           				<label for="details">Details</label>
            			<textarea name="details" rows="15"   ></textarea>
          			</div>
          			<div class="form-section">
            			<label for="prerequisites">Prerequsites</label>
            			<textarea name="prerequisites" rows="10"   ></textarea>
          			</div>
          			<div class="form-section">
            			<label for="warm-up">Recommended Warm-Up</label>
            			<textarea name="warm-up" rows="10"   ></textarea>
          			</div>
          			<div>
            			<label for='video'>Video Link</label><input type="url" name="video"/>
           			</div>
          

          

           			<Link to = '/main'>
          				<button type="submit">Submit</button>
          			</Link>
                <Link to = '/addskill'>
          			 <button type="reset">Reset</button>
                </Link>
        		</form>
      		</section>
    	</main>
    )
}
}