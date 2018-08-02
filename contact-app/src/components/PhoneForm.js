import React, { Component, Fragment } from 'react';

class PhoneForm extends Component {
	state = {
		name: '',
		phone: '',
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,

		});
	}

	render() {
		return (
			<Fragment>
				<form>
					<input
						name="name"
						placeholder="Name" 
						onChange={this.handleChange} 
						value={this.state.name} 
					/>
					<input
						name="phone"
						placeholder="Phone NUmber" 
						onChange={this.handleChange} 
						value={this.state.phone} 
					/>
					<div>
						{this.state.name} {this.state.phone}
					</div>
				</form>
			</Fragment>
			);
	}
}

export default PhoneForm;