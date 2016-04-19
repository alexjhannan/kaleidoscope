import {Meteor} from 'meteor/meteor';
import moment from 'moment';
import {GlossaryEntries, Characters} from '/lib/collections.jsx';


Meteor.methods({
  // methods for characters
  deleteCharacter (_id) {
    return Characters.remove(_id);
  },
  createNewCharacter () {
    return Characters.insert({ 
      createdAt: new moment().format('MMM DD, YYYY'),
      name: 'Name',
      avatar: 'http://lorempixel.com/250/250/nature/1',
      element: 'Unchosen',
      expertise: 'TBA',
      energies: 'TBA'
    });
  },
  editCharacter(char) {
    return Characters.update(char._id, char);
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