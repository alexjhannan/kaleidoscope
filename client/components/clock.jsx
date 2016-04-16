import React from 'react';

export default Clock = ({time, msg, count}) => {
	let message

	msg ? message = <div className="center">{msg}</div> : '';

	return (<div><div className="center">{time}</div> {message} <div className="center">{count}</div></div>)
}