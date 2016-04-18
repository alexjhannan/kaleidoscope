import {composeWithTracker} from 'react-komposer';
import CharacterBoardComp from '/client/components/characterBoard.jsx';

import {Meteor} from 'meteor/meteor';
import {Posts} from '/lib/collections.jsx';

function composer(props, onData) {
	const handle = Meteor.subscribe('posts');
	if(handle.ready()) {
		const posts = Posts.find({}, {sort: {_id: 1}}).fetch();
		onData(null, {posts});
	};
};

export default Glossary = composeWithTracker(composer)(CharacterBoardComp);