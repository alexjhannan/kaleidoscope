import {GlossaryEntries} from '/lib/collections.jsx';

Meteor.publish('glossary', function glossaryEntriesFunction () {
	return GlossaryEntries.find();
});