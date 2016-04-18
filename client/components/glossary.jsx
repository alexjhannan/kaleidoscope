import React from 'react';

let styles = {};
styles.container = {
  "minHeight": "400px"
};

export default Glossary = ({posts, submitPost, deletePost}) => (
  <div>
    <h3 className="center">Glossary</h3>

    <div style={styles.container}>
      <ul className="collection" style={styles.collection}>
        {posts.sort((a, b) => {
            if (a.title > b.title) return 1
            else return -1
          }).map(({_id, title}) => (
          <li key={_id} className="collection-item">
            <a href={"/glossaryEntry/" + _id}>{title}</a>
            <a href="#" className="secondary-content" onClick={deletePost.bind(null, _id)}><i className="material-icons">delete</i></a>
          </li>
        ))}
      </ul>
    </div>

    <form onSubmit={submitPost}>
      <input placeholder="Name" name="name" />
      <input type="submit" />
    </form>
  </div>
);