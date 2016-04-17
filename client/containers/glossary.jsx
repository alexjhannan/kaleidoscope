import {composeWithTracker} from 'react-komposer';
import GlossaryComp from '/client/components/glossary.jsx';

import {Meteor} from 'meteor/meteor';
import {Posts} from '/lib/collections.jsx';

function composer(props, onData) {
	formSubmit = (e) => {
		e.preventDefault();
		let title = e.target.name.value;
		console.log(title);
		Meteor.call('insertPost', title, (err, data) => {
			err ? console.log(err) : console.log(data);
		});
	}

	const handle = Meteor.subscribe('posts');
	if(handle.ready()) {
		const posts = Posts.find({}, {sort: {_id: 1}}).fetch();
		onData(null, {posts, formSubmit});
	};
};

export default Glossary = composeWithTracker(composer)(GlossaryComp);