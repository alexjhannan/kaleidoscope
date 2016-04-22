import React from 'react';

export default CharacterBoard = React.createClass({
  getInitialState() {
    return {
      selection: 5,
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
          <a href="#"><img className="circle responsive-img z-depth-1 characterBoard--placeholderLink" src={char.avatar} /></a>
          <a href="#"><img className="circle responsive-img z-depth-1 characterBoard--placeholderLink" src={char.avatar} /></a>
        </div>

        <div className="col s4">
          <div className="center">
            <img className="z-depth-2 characterBoard--avatar" src={char.avatar} />
          </div>
          <div className="card darken-1 center" id="mainCard">
            <p>NAME</p>
            <div className="divider"></div>
            <p>ELEMENT</p>
            <div className="divider"></div>
            <p>TITLE</p>
          </div>
          <img src={char.avatar} onClick={fakeFxn} id="editButton" className="responsive-img characterBoard--editButton" />
        </div>

        <div className="col s4 center">
          <a href="#"><img className="circle responsive-img z-depth-1 characterBoard--placeholderLink" src={char.avatar} /></a>
          <a href="#"><img className="circle responsive-img z-depth-1 characterBoard--placeholderLink" src={char.avatar} /></a>
        </div>
      </div>
		)
	}
});