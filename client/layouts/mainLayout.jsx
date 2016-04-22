// mainLayout -> receives and displays navbar, content, and footer
import React from 'react';

export default MainLayout = ({navbar, content, footer}) => (
	<body>
		<header>
			{navbar}
		</header>
		<main>
			{content}
		</main>
		<footer>
			{footer}
		</footer>
	</body>
);