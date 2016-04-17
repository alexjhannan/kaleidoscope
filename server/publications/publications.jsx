import {Posts} from '/lib/collections.jsx';

console.log('Test');

Meteor.publish('posts', function postsFunctino () {
	return Posts.find();
});