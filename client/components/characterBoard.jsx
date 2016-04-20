import React from 'react';

export default CharacterBoard = React.createClass({
  getInitialState() {
    return {
      selection: 0,
      editMode: false
    };
  },
  componentDidMount() {
    this.positionEditButton();
    window.addEventListener("resize", this.positionEditButton);
  },
  positionEditButton() {
    let findLeftMargin = () => {
      return $("#mainCard").width() - 38 + 'px';
    }

    $("#editButton").css('marginLeft', findLeftMargin());
  },
	render() {
    let char = this.props.characters[this.state.selection];

    let fakeFxn = () => {
      return console.log('yo');
    }

		return (
			<div className="row">
        <div className="col s4 center">
          <a href="#"><img className="circle responsive-img z-depth-1" src={char.avatar} style={styles.testButton}/></a>
          <a href="#"><img className="circle responsive-img z-depth-1" src={char.avatar} style={styles.testButton}/></a>
        </div>

        <div className="col s4">
          <img className="responsive-img z-depth-2" src={char.avatar} />
          <div className="card darken-1 center" id="mainCard">
            <p>NAME</p>
            <div className="divider"></div>
            <p>ELEMENT</p>
            <div className="divider"></div>
            <p>TITLE</p>
          </div>
          <img src={char.avatar} onClick={fakeFxn} id="editButton" className="responsive-img" style={styles.editButton} />
        </div>

        <div className="col s4 center">
          <a href="#"><img className="circle responsive-img z-depth-1" src={char.avatar} style={styles.testButton}/></a>
          <a href="#"><img className="circle responsive-img z-depth-1" src={char.avatar} style={styles.testButton}/></a>
        </div>
      </div>
		)
	}
});

let styles = {};

styles.editButton = {
  position: 'relative',
  bottom: '48px',
  cursor: 'pointer',
  outline: 'none',
  width: '32px',
  height: '32px'
}

styles.testButton = {
  width: '200px',
  height: '200px',
  marginTop: '50px'
}