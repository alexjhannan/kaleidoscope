import {compose} from 'react-komposer';
import moment from 'moment';
import ClockComp from '/client/components/clock.jsx';

let possibleMessages = [
	'You can do it!',
	'The stars are only so far away.',
	'Love thyself.',
	'Burn brilliantly.',
	'Absorb and reflect.',
	'Build yourself brick by brick.',
	'Enjoy the little things.',
	'Embrace failure.',
];

const composerFxn = (props, onData) => {
	let counter = 0, randomIndex, msg, count;

	let setMessage = () => {
		randomIndex = Math.floor(Math.random()*possibleMessages.length);
		msg = possibleMessages[randomIndex];
	}

	const messageSetter = setInterval(() => {
			setMessage();
		}, 108000)

	setMessage();

	const dataChecker = setInterval(() => {
		counter = counter + 1;
		count = Math.floor(counter / 10);
		const time = moment().format('HH:mm:ss');		// fetch some data

		if (counter % 1080 < 270) {
			return onData(null, {time, msg, count});
		} else {
			onData(null, {time, null, count});		// onData receives error first
		}
	}, 250);		// repeat fetching

	const cleanup = () => {
		clearInterval(messageSetter);
		clearInterval(dataChecker);
	}
	return cleanup;		// return a funciton to clean up resources
}

const loadingFxn = () => {
	return (<div className="center">Hmm...</div>);
}

const errorHandler = () => (<div>Apologies</div>);

// compose takes a composer function and a UI component, produces a container
export default Clock = compose(composerFxn, loadingFxn, errorHandler)(ClockComp);