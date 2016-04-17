import React from 'react';
import Blogger from '/client/components/blogger.jsx';
import BlogPoster from '/client/containers/blogPoster.jsx';

let Blog = React.createClass({
	render() {
		return (
			<div>
				<h1 className="center">Blogger</h1>
				<Blogger />
				<BlogPoster />
			</div>
		);
	}
})

export default Blog;