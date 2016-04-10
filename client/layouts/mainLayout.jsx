// mainLayout -> receives and displays navbar, content, and footer
import React from 'react';

export default MainLayout = ({navbar, content, footer}) => (
	<div>
	{navbar}
	<div className="container">
		{content}
	</div>
	{footer}
	</div>
);