// content - placeholder component for future views
import React from 'react';

export default Content = ({name}) => (
  <div>
  <div className="section no-pad-bot" id="index-banner">
    <div className="container">
      <h1 className="header center grey-text">Kaleidoscope</h1>
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
          <div className="center yellow-text">
            <i className="material-icons">call_merge</i>
            <h5 className="center">Air</h5>
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
          <div className="center red-text">
            <i className="material-icons">navigation</i>
            <h5 className="center">Fire</h5>
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
          <div className="center green-text">
            <i className="material-icons">view_stream</i>
            <h5 className="center">Earth</h5>
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
          <div className="center blue-text">
            <i className="material-icons">invert_colors</i>
            <h5 className="center">Water</h5>
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
  <br/><br/>
</div>
);