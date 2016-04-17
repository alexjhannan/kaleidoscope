import React from 'react';

export default blogPoster = React.createClass({
	formSubmit (e) {
		e.preventDefault();
		Meteor.call('insertPost', 'Title', (err, data) => {
			err ? console.log(err) : console.log(data);
		});
	},
	render() {
		return (<div>
			<form onSubmit={this.formSubmit}>
				<input placeholder="Name" name="name" />
				<input type="submit" />
			</form>
		</div>);
	}
})