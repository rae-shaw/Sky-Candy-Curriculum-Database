import React, { Component } from 'react';
import APIContext from '../APIContext.js';
import APIconfigure from '../APIconfigure.js';
import { withRouter } from 'react-router-dom';



class DeleteSkill extends Component {
	constructor(props) {
    	super(props);
    	this.state = {
      		redirect: false
    	};
  	}
  	static contextType = APIContext;

	handleClickDelete=(skillId, callback) => {
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
				this.props.history.push(`/`)
			})

			.catch(error => {
				console.error({ error })
			})
	}
	render (){
		return(
			<APIContext.Consumer>
				{(context) => (
					<button className= 'buttons'
						onClick={() => {
							this.handleClickDelete(this.props.skillId, context.deleteSkill);
						}}
					>
						Delete Skill 
					</button>
				)}
			</APIContext.Consumer>
		);
	};
}

export default withRouter(DeleteSkill)