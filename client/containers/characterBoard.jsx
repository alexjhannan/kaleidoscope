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

	let updateCharacter = (_id, e) => {
		e.preventDefault();

		let update = {};

		if (e.target.name.value) update.name = e.target.name.value;
		if (e.target.element.value) update.element = e.target.element.value;
		if (e.target.expertise.value) update.expertise = e.target.expertise.value;
		if (e.target.avatar.value) update.avatar = e.target.avatar.value;

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
		const characters = Characters.find({}, {sort: {_id: 1}}).fetch();
		onData(null, {characters, createNewCharacter, updateCharacter, deleteCharacter});
	};
};

export default Glossary = composeWithTracker(composer)(CharacterBoardComp);