import React from 'react';
import {compose} from 'react-komposer';

const Time = ({time}) => (<li>{time}</li>);

const composerFxn = (props, onData) => {
	let counter = 0;

	const handler = setInterval(() => {
		console.log(counter);
		counter = counter + 1;
		if (counter % 5 === 0) return onData(new Error('Shitballs'), {time});

		const time = new Date().toString();		// fetch some data
		onData(null, {time});		// onData receives error first
	}, 1000);		// repeat fetching

	const cleanup = () => clearInterval(handler);
	return cleanup;		// return a funciton to clean up resources
}

const loadingFxn = () => {
	console.log('Hmming');

	return (<li>Hmm...</li>);
}

const errorHandler = () => (<li>Apologies</li>);

// compose takes a composer function and a UI component, produces a container
export default Clock = compose(composerFxn, loadingFxn, errorHandler)(Time);