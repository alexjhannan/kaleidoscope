import React from 'react';
import AccountsUIWrapper from '/client/components/accountsUIWrapper.jsx';

export default Navbar = React.createClass({
  componentDidMount() {
    $(".button-collapse").sideNav();
  },
  render() {
    return (
      <nav className="navbar--nav small" role="navigation">
        <div className="nav-wrapper container">

          <a href="/" className="brand-logo center"><img src={"/icons/kaleidoscope.svg"} className="navbar--kaleidoscope" alt="Navbar Logo" /></a>

          <ul className="left hide-on-med-and-down">
            <li><a href="/wiseman">Wiseman</a></li>
            <li><a href="/glossary">Glossary</a></li>
            <li><a href="/characterBoard">Character Board</a></li>
          </ul>

          <ul className="right">
            <li>Kaleidoscope</li>
            <AccountsUIWrapper />
          </ul>

          <ul id="slide-out" className="side-nav">
            <li><a href="/wiseman">Wiseman</a></li>
            <li><a href="/glossary">Glossary</a></li>
            <li><a href="/characterBoard">Character Board</a></li>
          </ul>

          <a href="#" data-activates="slide-out" className="button-collapse"><i className="material-icons">menu</i></a>
        </div>
      </nav>
    );
  }
})
  