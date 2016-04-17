import React from 'react';

const PostList = ({posts}) => (
  <div>
    This is the post list
    <ul>
      {posts.map(({_id, title}) => (
        <li key={_id}>
          <a href={FlowRouter.path('post', {_id})}>{title}</a>
        </li>
      ))}
    </ul>
  </div>
);

import {composeWithTracker} from 'react-komposer';

function composer(props, onData) {
  const handle = Meteor.subscribe('posts');
  if(handle.ready()) {
    const posts = Posts.find({}, {sort: {_id: 1}}).fetch();
    onData(null, {posts});
  };
};

export default composeWithTracker(composer)(PostList);