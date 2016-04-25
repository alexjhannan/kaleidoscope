// content - placeholder component for future views
import React from 'react';
import AccountsUIWrapper from '/client/components/accountsUIWrapper.jsx';

export default Content = ({name}) => (
  <div>
  <div className="section no-pad-bot" id="index-banner">
    <div className="container">
      <AccountsUIWrapper />
      <h1 className="header center grey-text">{name} Kaleidoscope</h1>
      <div className="row center">
        <h5 className="header col s12 light">User-Generated Psychological Dashboard</h5>
      </div>
    </div>
  </div>
  <div className="container"/>
  <hr />
  <div className="section">
    <h4 className="header center">The Four Temperaments</h4>
    <br />
    <div className="row">
      <div className="col s12 m3">
        <div className="icon-block">
          <div className="center">
            <img className="intro--elementSymbol" src={"/icons/air.svg"} />
            <h5 className="center air-text">Air</h5>
          </div>
        </div>
          

        <ul className="collection center">
          <li className="collection-item light">Energetic Action</li>
          <li className="collection-item light">Emotional Discovery</li>
          <li className="collection-item light">Liberation of Identity</li>
        </ul>
      </div>

      <div className="col s12 m3">
        <div className="icon-block">
          <div className="center">
            <img className="intro--elementSymbol" src={"/icons/fire.svg"} />
            <h5 className="center fire-text">Fire</h5>
          </div>
        </div>

        <ul className="collection center">
          <li className="collection-item light">Powerful Action</li>
          <li className="collection-item light">Goal Completion</li>
          <li className="collection-item light">Defiant Conflict</li>
        </ul>
      </div>

      <div className="col s12 m3">
        <div className="icon-block">
          <div className="center">
            <img className="intro--elementSymbol" src={"/icons/earth.svg"} />
            <h5 className="center earth-text">Earth</h5>
          </div>
        </div>

        <ul className="collection center">
          <li className="collection-item light">Structured Thought</li>
          <li className="collection-item light">Goal Optimization</li>
          <li className="collection-item light">Definition of Identity</li>
        </ul>
      </div>

      <div className="col s12 m3">
        <div className="icon-block">
          <div className="center">
            <img className="intro--elementSymbol" src={"/icons/water.svg"} />
            <h5 className="center water-text">Water</h5>
          </div>
        </div>

        <ul className="collection center">
          <li className="collection-item light">Flowing Thought</li>
          <li className="collection-item light">Emotional Intuition</li>
          <li className="collection-item light">Absorbant Conflict</li>
        </ul>
      </div>

    </div>
  </div>
</div>
);