import {Meteor} from 'meteor/meteor';
import moment from 'moment';
import {GlossaryEntries, Characters} from '/lib/collections.jsx';

// TODO: categorize methods by data concern when file starts getting unwieldy

// current standard practice is to return the mongo function being called, should remove before production

Meteor.methods({
  // methods for characters
  deleteCharacter (_id) {
    return Characters.remove(_id);
  },
  insertCharacter (attributes) {
    attributes.createdAt = new moment().format('MMM DD, YYYY');
    return Characters.insert(attributes);
  },
  updateCharacter(_id, update) {
    return Characters.update(_id, {$set: update});
  },

  // methods for glossary
  insertGlossaryEntry (entry) {
    return GlossaryEntries.insert(entry);
  },
  deleteGlossaryEntry (_id) {
    return GlossaryEntries.remove(_id);
  },
  editGlossaryEntryDescription ({_id, description}) {
  	return GlossaryEntries.update(_id, {$set: {description}});
  }
});