import React from 'react';

export default GlossaryEntry = (entry) => (
	<div>
		<h3 className="center">Glossary Entry</h3>
		<h5 className="center">{entry.title}</h5>
		<hr />
		<div className="row">
			<p className="col s8 offset-s2">{entry.description || "No Description"}</p>
		</div>
		<p className="right">{"Created On " + entry.createdAt || "No Creation Date"}</p>
	</div>
);