import {Meteor} from 'meteor/meteor';
import {Posts} from '/lib/collections.jsx';


Meteor.methods({
  insertPost (title) {
    Posts.insert({title});

    return "Post successfully inserted";
  }
});