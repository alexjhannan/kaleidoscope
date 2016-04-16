import {compose} from 'react-komposer';
import ClockComp from '/client/components/clock.jsx';

const composerFxn = (props, onData) => {
	let counter = 0;
	let msg = 'hi';

	const handler = setInterval(() => {
		console.log(counter);
		counter = counter + 1;
		const time = new Date().toString();		// fetch some data

		if (counter % 5 === 0) return onData(null, {time, msg});

		onData(null, {time});		// onData receives error first
	}, 1000);		// repeat fetching

	const cleanup = () => clearInterval(handler);
	return cleanup;		// return a funciton to clean up resources
}

const loadingFxn = () => {
	console.log('Hmming');

	return (<div>Hmm...</div>);
}

const errorHandler = () => (<div>Apologies</div>);

// compose takes a composer function and a UI component, produces a container
export default Clock = compose(composerFxn, loadingFxn, errorHandler)(ClockComp);