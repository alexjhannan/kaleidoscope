import {composeWithTracker} from 'react-komposer';
import CharacterBoardComp from '/client/components/characterBoard.jsx';

import {Meteor} from 'meteor/meteor';
import {Characters} from '/lib/collections.jsx';

function composer(props, onData) {
	let createNewCharacter = () => {
		Meteor.call('createNewCharacter', (err, data) => {
			err ? console.log(err) : console.log(data);
		});
	}

	let editCharacter = (char) => {
		Meteor.call('updateCharacter', char, (err, data) => {
			err ? console.log(err) : console.log(data);
		});
	}

	const handle = Meteor.subscribe('characters');
	if(handle.ready()) {
		const characters = Characters.find({}, {sort: {_id: 1}}).fetch();
		onData(null, {characters, createNewCharacter, editCharacter});
	};
};

export default Glossary = composeWithTracker(composer)(CharacterBoardComp);