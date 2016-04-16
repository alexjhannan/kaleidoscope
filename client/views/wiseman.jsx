import React from 'react';
import Clock from '/client/containers/clock.jsx';

let Wiseman = React.createClass({
	render() {
		return (
			<div>
				<h1 className="center">Wiseman</h1>
				<Clock />
			</div>
		);
	}
})

export default Wiseman;