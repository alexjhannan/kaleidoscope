import {composeWithTracker} from 'react-komposer';
import GlossaryComp from '/client/components/glossary.jsx';
import moment from 'moment';

import {Meteor} from 'meteor/meteor';
import {GlossaryEntries} from '/lib/collections.jsx';

function composer(props, onData) {
	let submitEntry = (e) => {
		e.preventDefault();

		let post = {}
		post.title = e.target.name.value;
		post.createdAt = moment().format('MMM DD, YYYY');

		Meteor.call('insertGlossaryEntry', post, (err, data) => {
			err ? console.log(err) : console.log(data);
		});
	}

	let deleteEntry = (_id) => {
		if (!confirm("Are you sure you want to delete this post?")) return;

		Meteor.call('deleteGlossaryEntry', _id, (err, data) => {
			err ? console.log(err) : console.log(data);
		});
	}

	const handle = Meteor.subscribe('glossary');
	if(handle.ready()) {
		const entries = GlossaryEntries.find({}, {sort: {_id: 1}}).fetch();
		onData(null, {entries, submitEntry, deleteEntry});
	};
};

export default Glossary = composeWithTracker(composer)(GlossaryComp);