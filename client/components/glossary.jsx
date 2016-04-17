import React from 'react';

export default GlossaryLister = ({posts, formSubmit}) => (
  <div>
    <h3 className="center">Glossary</h3>
    <ul>
      {posts.sort((a, b) => {
          if (a.title > b.title) return 1
          else return -1
        }).map(({_id, title}) => (
        <li key={_id}>
          <a href='#'>{title}</a>
        </li>
      ))}
    </ul>

    <form onSubmit={formSubmit}>
      <input placeholder="Name" name="name" />
      <input type="submit" />
    </form>
  </div>
);