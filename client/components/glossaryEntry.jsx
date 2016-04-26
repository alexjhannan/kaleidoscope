import React from 'react';
import MustLogIn from '/client/components/mustLogIn.jsx';

export default GlossaryEntry = ({currentUser, entry, editEntry}) => {
	if (currentUser) {
		console.log(currentUser + " is logged in");

		return (<div className="container">
			<h3 className="center">Glossary Entry</h3>
			<h5 className="center">{entry.title}</h5>
			<hr />
			<form onSubmit={editEntry.bind(null, entry._id)}>
			<div className="row">
				<textarea defaultValue={entry.description || "No Description"} id="description" name="description" className="col s8 offset-s2 materialize-textarea glossaryEntry--textarea"></textarea>
			</div>
			<div className="row">
				<button type="submit" name="action" className="btn waves-effect waves-light col offset-s9">
					<i className="material-icons">done</i>
				</button>
			</div>
			</form>
			<p className="right">{"Created On " + entry.createdAt || "No Creation Date"}</p>
		</div>);
	} else {
		return <MustLogIn />;
	}
}