import {Meteor} from 'meteor/meteor';
import {Posts} from '/lib/collections.jsx';


Meteor.methods({
  insertPost (title) {
    return Posts.insert({title});
  },
  deletePost (_id) {
    return Posts.remove({_id});
  }
});