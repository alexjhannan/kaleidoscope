import {composeWithTracker} from 'react-komposer';
import GlossaryEntryComp from '/client/components/glossaryEntry.jsx';

import {Meteor} from 'meteor/meteor';
import {Posts} from '/lib/collections.jsx';

function composer(props, onData) {
	editEntry = (_id, e) => {
		e.preventDefault();
		let description = e.target.description.value;
		
		Meteor.call('editDescription', {_id, description}, (err, data) => {
			err ? console.log(err) : console.log(data);
		});
	}

	const handle = Meteor.subscribe('posts');
	if(handle.ready()) {
		const entry = Posts.findOne(props._id);
		console.log(entry);
		onData(null, {entry, editEntry});
	};
};

export default GlossaryEntry = composeWithTracker(composer)(GlossaryEntryComp);