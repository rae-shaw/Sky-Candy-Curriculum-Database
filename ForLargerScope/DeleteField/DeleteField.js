import React, { Component } from 'react';
import APIContext from '../APIContext.js';
import APIconfigure from '../APIconfigure.js';
import { Redirect, Link } from 'react-router-dom';



class DeleteApparatus extends Component {

	static contextType = APIContext;

	handleSubmit=(e) => {
		console.log('ITS HAPPENING!!!!!!!!!!!')
		e.preventDefault()
		const apparatusId = e.target['apparatus-select'].value

			fetch(`${APIconfigure.API_END}/apparatus/${apparatusId}`, {
				method: 'DELETE',
				headers: {
					'content-type': 'application/json'
				},
			})

			.then(res => {
				if (!res.ok)
					throw new Error()
				return
			})

			.then(() => {
				this.context.deleteApparatus(apparatusId)
	        	this.props.history.push(`/newskill`)
			})

			.catch(error => {
				console.error({ error })
			})
	}
	render (){

	    const { apparatus=[] } = this.context
		return(
			<div className="form-section">
{console.log("apparatus thingy", apparatus)}
{console.log("ok, fine: ", this.context)}	
			<form onSubmit={this.handleSubmit}>
                    <label htmlFor="apparatus-select">
                        Apparatus
                    </label>
                    <select id='apparatus-select' name='apparatus.id'>
                        <option value={null}>...</option>
                        {apparatus.map(apparatus =>
                            <option key={apparatus.id} value={apparatus.id}>
                                {apparatus.apparatus}
                            </option>
                        )}
                    </select>
 
					<button type='submit' >
						delete note 
					</button>

            	</form>
             </div>
		);
	};
}

export default DeleteApparatus;

//from App:

 // handleDeleteApparatus = apparatus => {
 //            this.setState({
 //                apparatus: this.state.apparatus.filter(apparatus => apparatus.id !== apparatus.id[0])
 //    });