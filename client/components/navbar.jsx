import React from 'react';

export default Navbar = React.createClass({
  componentDidMount() {
    $(".button-collapse").sideNav();
  },
  render() {
    return (
      <nav className="purple darken-4 small" role="navigation">
        <div className="nav-wrapper container">

          <a href="/" className="brand-logo">Kaleidoscope</a>

          <ul className="right hide-on-med-and-down">
            <li><a href="/wiseman">Wiseman</a></li>
            <li><a href="/glossary">Glossary</a></li>
          </ul>

          <ul id="slide-out" className="side-nav">
            <li><a href="/wiseman">Wiseman</a></li>
            <li><a href="/glossary">Glossary</a></li>
          </ul>  

          <a href="#" data-activates="slide-out" className="button-collapse"><i className="material-icons">menu</i></a>
        </div>
      </nav>
    );
  }
})
  