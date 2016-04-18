import {composeWithTracker} from 'react-komposer';
import GlossaryEntryComp from '/client/components/glossaryEntry.jsx';

import {Meteor} from 'meteor/meteor';
import {Posts} from '/lib/collections.jsx';

function composer(props, onData) {
	const handle = Meteor.subscribe('posts');
	if(handle.ready()) {
		const entry = Posts.findOne(props._id);
		console.log(entry);
		onData(null, entry);
	};
};

export default GlossaryEntry = composeWithTracker(composer)(GlossaryEntryComp);