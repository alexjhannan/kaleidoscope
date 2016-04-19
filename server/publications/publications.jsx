import {GlossaryEntries, Characters} from '/lib/collections.jsx';

Meteor.publish('glossary', () => {
	return GlossaryEntries.find();
});

Meteor.publish('characters', () => {
	return Characters.find();
});