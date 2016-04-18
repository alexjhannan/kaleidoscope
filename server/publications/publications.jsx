import {Posts} from '/lib/collections.jsx';

Meteor.publish('posts', function postsFunctino () {
	return Posts.find();
});