import {composeWithTracker} from 'react-komposer';
import GlossaryEntryComp from '/client/components/glossaryEntry.jsx';

import {Meteor} from 'meteor/meteor';
import {GlossaryEntries} from '/lib/collections.jsx';

function composer(props, onData) {
	let editEntry = (_id, e) => {
		e.preventDefault();
		let description = e.target.description.value;
		
		Meteor.call('editGlossaryEntryDescription', {_id, description}, (err, data) => {
			err ? console.log(err) : Materialize.toast('Successfully updated this entry.', 2000);
		});
	}

	const handle = Meteor.subscribe('glossary');
	if(handle.ready()) {
		const entry = GlossaryEntries.findOne(props._id);
		console.log(entry);
		let currentUser = Meteor.userId();
		onData(null, {entry, editEntry, currentUser});
	};
};

export default GlossaryEntry = composeWithTracker(composer)(GlossaryEntryComp);