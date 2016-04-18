import React from 'react';

export default GlossaryEntry = (entry) => {
	console.log(entry);

	return (
	<div>
		<h3 className="center">Glossary Entry</h3>
		<h5 className="center">{entry.title}</h5>
		<hr />
		<p>{entry.description || "Placeholder Description"}</p>
		<p>{entry.created || "DOB"}</p>
	</div>
); }