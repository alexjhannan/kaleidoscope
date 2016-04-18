import {Meteor} from 'meteor/meteor';
import {GlossaryEntries} from '/lib/collections.jsx';


Meteor.methods({
  insertGlossaryEntry (entry) {
    return GlossaryEntries.insert(entry);
  },
  deleteGlossaryEntry (_id) {
    return GlossaryEntries.remove({_id});
  },
  editGlossaryEntryDescription ({_id, description}) {
  	return GlossaryEntries.update(_id, {$set: {description}});
  }
});