import {Meteor} from 'meteor/meteor';
import {Posts} from '/lib/collections.jsx';


Meteor.methods({
  insertPost (post) {
    return Posts.insert(post);
  },
  deletePost (_id) {
    return Posts.remove({_id});
  }
});