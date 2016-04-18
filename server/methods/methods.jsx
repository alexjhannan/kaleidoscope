import {Meteor} from 'meteor/meteor';
import {Posts} from '/lib/collections.jsx';


Meteor.methods({
  insertPost (post) {
    return Posts.insert(post);
  },
  deletePost (_id) {
    return Posts.remove({_id});
  },
  editDescription ({_id, description}) {
  	return Posts.update(_id, {$set: {description}});
  }
});