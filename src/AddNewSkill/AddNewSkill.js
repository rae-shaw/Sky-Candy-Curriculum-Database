import React from 'react';
import { Link } from 'react-router-dom';

export default function AddNewSkill(){
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
          			<div class="form-section">
            			<label for="apparatus">Apparatus</label>
            			<select required>
              				<option value="Trapeze">Trapeze</option>
              				<option value="Lyra">Lyra</option>
              				<option value="Hammock">Hammock</option>
              				<option Silks="audi">Silks</option>
            			</select>
          			</div>
          			<div class="level" class="form-section">
           				<label for="apparatus">Level</label>
            			<select required>
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
            			<input type="radio" name="age" class="age-radio"/>
            			<label for="age">
              				<span>Youth</span>
           				 </label>
            			<input type="radio" name="age"  class="age-radio"/>
           				<label for="age">
              				<span>Early Childhood</span>
           				</label>
            			<input type="radio" name="age"  class="age-radio"/>
          			</div>
          			<div class="type" class="form-section">
            			<label for="Type">Type</label>
            			<select required>
             				<option value="Prerequisite">Prerequsite</option>
              				<option value="Conditioning">Conditioning</option>
              				<option value="Skill">Skill</option>
              				<option value="Sequence">Sequence</option>
              				<option value="Stretch">Stretch</option>
           				</select>
          			</div>
          			<div class="Sub Type" class="form-section">
            			<label for="Sub Type">Sub Type</label>
            			<select>
             				<option value="Beats">Beats</option>
              				<option value="Catchers">Catchers</option>
              				<option value="Climb">Climb</option>
              				<option value="Drop">Drop</option>
            			</select>
          			</div>
          			<div class="Sub Type" class="form-section">
           				<label for="Priority">Priority</label>
            			<select>
              				<option value="Essential">Essential</option>
              				<option value="Every Series">Every Series</option>
              				<option value="Optional">Optional</option>
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