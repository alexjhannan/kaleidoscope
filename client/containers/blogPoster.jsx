import {compose} from 'react-komposer';
import BlogPosterComp from '/client/components/blogPoster.jsx';

const composerFxn = (props, onData) => {

	const handler = setInterval(() => {
		onData(null, {});
	}, 100);

	const cleanup = () => {
		clearInterval(handler);
	}
	return cleanup;
}

export default BlogPoster = compose(composerFxn)(BlogPosterComp);