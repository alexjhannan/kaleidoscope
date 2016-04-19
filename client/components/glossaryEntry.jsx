import React from 'react';

export default GlossaryEntry = ({entry, editEntry}) => (
	<div>
		<h3 className="center">Glossary Entry</h3>
		<h5 className="center">{entry.title}</h5>
		<hr />
		<form onSubmit={editEntry.bind(null, entry._id)}>
		<div className="row">
			<textarea defaultValue={entry.description || "No Description"} id="description" name="description" className="col s8 offset-s2 materialize-textarea" style={styles.textarea}></textarea>
		</div>
		<div className="row">
			<a type="submit" name="action" className="btn waves-effect waves-light col offset-s9">
				<i className="material-icons">done</i>
			</a>
		</div>
		</form>
		<p className="right">{"Created On " + entry.createdAt || "No Creation Date"}</p>
	</div>
);

let styles = {};

styles.textarea = {
	minHeight: "300px"
}