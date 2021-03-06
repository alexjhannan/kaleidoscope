import {composeWithTracker} from 'react-komposer';
import CharacterBoardComp from '/client/components/characterBoard.jsx';

import {Meteor} from 'meteor/meteor';
import {Characters} from '/lib/collections.jsx';

function composer(props, onData) {
	let currentUser = Meteor.userId();

	let insertCharacter = (attributes, cb) => {
		attributes.name = "Bob";
		attributes.element = "air";
		attributes.title = "The Rossiest";
		attributes.createdAt = Date.now();
		attributes.userId = currentUser;
		Meteor.call('insertCharacter', attributes, (err, data) => {
			if (err) {
				console.log(err);
			} else {
				console.log(data);
				cb();
			}
		});
	}

	let updateCharacter = (_id, update) => {
		Meteor.call('updateCharacter', _id, update, (err, data) => {
			err ? console.log(err) : console.log(data);
		});
	}

	let deleteCharacter = (_id) => {
		Meteor.call('deleteCharacter', _id, (err, data) => {
			err ? console.log(err) : console.log(data);
		});
	}

	const handle = Meteor.subscribe('characters');
	if(handle.ready()) {
		const characters = Characters.find({userId: currentUser}, {sort: {createdAt: 1}}).fetch();
		onData(null, {currentUser, characters, insertCharacter, updateCharacter, deleteCharacter});
	};
};

export default Glossary = composeWithTracker(composer)(CharacterBoardComp);