import React, { Component } from 'react';
import APIContext from '../APIContext.js';
import APIconfigure from '../APIconfigure.js';

export default class AddNewAppratus extends Component{
	static defaultProps = {
	    history: {
	      push: () => { }
	    },
	}

	static contextType = APIContext;

	constructor(props) {
    	super(props);
    	this.state = {
      		name: {
        		value: "",
        		touched: false
      		}
      	}
    }

	handleSubmit = e => {
	    e.preventDefault()
	    const apparatus = {
	      apparatus: e.target['apparatus-name'].value
	    }
	    fetch(`${APIconfigure.API_END}/apparatus`, {
	      method: 'POST',
	      headers: {
	        'content-type': 'application/json'
	      },
	      body: JSON.stringify(apparatus),
	    })
	      .then(res => {
	        if (!res.ok)
	          return res.json().then(e => Promise.reject(e))
	        return res.json()
	      })
	      .then(apparatus => {
	        this.context.addApparatus(apparatus)
	        this.props.history.push(`/newskill`)
	      })
	      .catch(error => {
	        console.error({ error })
	      })
	}



	render(){
		return(
				<section className='addApparatus'>
					<h2>Create an Apparatus</h2>
					<form onSubmit={this.handleSubmit}>
						<div className='field'>
							<label htmlFor='apparatus-name-input'>
								Name
							</label>
							<input type='text' id='apparatus-name-input' name='apparatus-name' />
						</div>
						<div className='buttons'>
							<button 
								type='submit'
	    					>
							Add Apparatus
							</button>
						</div>
					</form>
				</section>
		)
	}
}