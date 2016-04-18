import {composeWithTracker} from 'react-komposer';
import CharacterBoardComp from '/client/components/characterBoard.jsx';

import {Meteor} from 'meteor/meteor';
import {GlossaryEntries} from '/lib/collections.jsx';

function composer(props, onData) {
	const handle = Meteor.subscribe('glossary');
	if(handle.ready()) {
		const entries = GlossaryEntries.find({}, {sort: {_id: 1}}).fetch();
		onData(null, {entries});
	};
};

export default Glossary = composeWithTracker(composer)(CharacterBoardComp);