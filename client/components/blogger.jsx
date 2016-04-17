import React from 'react';

const PostList = ({posts}) => (
  <div>
    This is the post list
    <ul>
      {posts.map(({_id, title}) => (
        <li key={_id}>
          <a href='#'>{title}</a>
        </li>
      ))}
    </ul>
  </div>
);

import {composeWithTracker} from 'react-komposer';
import {Meteor} from 'meteor/meteor';
import {Posts} from '/lib/collections.jsx';

function composer(props, onData) {
  const handle = Meteor.subscribe('posts');
  if(handle.ready()) {
    console.log('handle ready');
    const posts = Posts.find({}, {sort: {_id: 1}}).fetch();
    onData(null, {posts});
  } else {
    const posts = [];
    onData(null, {posts});
  };
};

export default composeWithTracker(composer)(PostList);