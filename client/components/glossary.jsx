import React from 'react';

export default Glossary = ({entries, submitEntry, deleteEntry}) => (
  <div>
    <h3 className="center">Glossary</h3>

    <div className="glossary--container">
      <ul className="collection">
        {entries.sort((a, b) => {
            if (a.title > b.title) return 1
            else return -1
          }).map(({_id, title}) => (
          <li key={_id} className="collection-item">
            <a href={"/glossaryEntry/" + _id}>{title}</a>
            <a href="#" className="secondary-content" onClick={deleteEntry.bind(null, _id)}><i className="material-icons">delete</i></a>
          </li>
        ))}
      </ul>
    </div>

    <form onSubmit={submitEntry}>
      <input placeholder="Name" name="name" />
      <input type="submit" />
    </form>
  </div>
);