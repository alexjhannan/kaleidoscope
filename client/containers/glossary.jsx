import {composeWithTracker} from 'react-komposer';
import GlossaryComp from '/client/components/glossary.jsx';
import moment from 'moment';

import {Meteor} from 'meteor/meteor';
import {GlossaryEntries} from '/lib/collections.jsx';

function composer(props, onData) {
	let currentUser = Meteor.userId();

	let submitEntry = (e) => {
		e.preventDefault();

		let post = {}
		post.title = e.target.name.value;
		e.target.name.value = '';

		if (post.title !== "") {
			post.createdAt = new Date();
			post.userId = currentUser;

			Meteor.call('insertGlossaryEntry', post, (err, data) => {
				err ? console.log(err) : console.log(data);
			});
		}
	}

	let deleteEntry = (_id) => {
		if (!confirm("Are you sure you want to delete this post?")) return;

		Meteor.call('deleteGlossaryEntry', _id, (err, data) => {
			err ? console.log(err) : console.log(data);
		});
	}

	//A hugely reductionist view of psychological forces, the Four Temperaments allows us to break down the human experience into more easily understandable portions.

	const handle = Meteor.subscribe('glossary');
	if(handle.ready()) {
		const entries = GlossaryEntries.find({userId: currentUser}, {sort: {createdAt: 1}}).fetch();
		onData(null, {currentUser, entries, submitEntry, deleteEntry});
	};
};

export default Glossary = composeWithTracker(composer)(GlossaryComp);