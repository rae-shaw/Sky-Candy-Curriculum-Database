import React, { Component } from 'react';
import APIContext from '../APIContext.js';
import APIconfigure from '../APIconfigure.js';
import { Redirect, withRouter, BrowserRouter as Router } from 'react-router-dom';



class DeleteSkill extends Component {
	constructor(props) {
    	super(props);
    	this.state = {
      		redirect: false
    	};
  	}
  	static contextType = APIContext;

	handleClickDelete=(skillId, callback) => {
		//e.preventDefault()

			

			fetch(`${APIconfigure.API_END}/skill/id/${skillId}`, {
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
				this.context.deleteSkill(skillId)
				// this.setState({
				// 	redirect: true
				// });
				console.log('HISTORY', this.props.history)
				this.props.history.push(`/main`)
				
			})

			.catch(error => {
				console.error({ error })
			})
	}
	render (){
		//console.log('skillId', this.props.skillId)
		return(
			<Router>
				<APIContext.Consumer>
					{(context) => (
						<button 
							onClick={() => {
								this.handleClickDelete(this.props.skillId, context.deleteSkill);
							}}
						>
							delete skill 
						</button>
					)}
				</APIContext.Consumer>
			</Router>
		);
	};
}

export default withRouter(DeleteSkill)