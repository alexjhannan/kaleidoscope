import React from 'react';

export default CharacterBoard = React.createClass({
  // LIFE CYCLE HOOKS
  getInitialState() {
    return {
      selected: 0,
      editMode: false
    };
  },
  componentDidUpdate() {
    if (this.state.editMode) {
      // set the selected element to the current character's element
      // TODO: remove toLowerCase by changing field on the character object
      $('#element').val(this.props.characters[this.state.selected].element.toLowerCase());

      // initialize select button
      $('select').material_select();
    }
  },
  // UI ACTIONS
  changeSelected(val) {
    // allows user to change UI selected state, should receive either +1 or -1
    let index = this.state.selected + val;
    if (index >= this.props.characters.length) {
      // out of bounds: greater than max index, go back to 0
      return this.setState({selected: 0});
    } else if (index < 0) {
      // out of bounds: negative index, go to last item
      return this.setState({selected: this.props.characters.length - 1});
    } else {
      // in bounds, set state
      return this.setState({selected: index});
    }
  },
  confirmAdd() {
    let url = prompt("Enter an avatar for your character. (for development only)"),
      name = "bob",
      element = "fire",
      title = "the rossiest";

    if (url) {
      // TODO: container fxn that adds new character

      let attributes = {avatar: url};

      this.props.insertCharacter(attributes);

      this.setState({selected: this.props.characters.length -1 });
    }
  },
  confirmDelete(_id) {
    let yes = confirm("Are you sure you want to delete this character? This action cannot be undone.");

    if (yes) {
      // TODO: container fxn that deletes current character
      // (may have to mess with the selected param when the character is deleted)
      this.props.deleteCharacter(_id);

      this.setState({selected: this.state.selected - 1, editMode: false});
    }
  },
  confirmSubmit(_id) {
    let yes = confirm("Submit these changes?");

    if (yes) {
      let name = $("#name").val();
      let element = $("#element").val();
      let title = $("#title").val();

      let update = {name, element, title};

      // TODO: hook in a data container function to call a meteor update method with these values

      this.props.updateCharacter(_id, update);

      return this.toggleEdit();
    }
  },
  toggleEdit() {
      return this.setState({editMode: !this.state.editMode});
  },
  // RENDER METHODS
  renderCharacterColumn() {
    let char = this.props.characters[this.state.selected];

    console.log(char);

    if (!this.state.editMode) {
      // standard character column
      return (<div>
        <div>
          <img src={char.avatar} className="z-depth-2 characterBoard--avatar" id="avatar" />
        </div>
        <div className="characterBoard--characterPlate z-depth-1">
          <span>
            <img src={"/icons/arrowLeft.svg"} onClick={this.changeSelected.bind(null, -1)} className="z-depth-1 characterBoard--arrowLeft" id="arrowLeft" />
            <h3>{char.name}</h3>
            <img src={"/icons/arrowRight.svg"} onClick={this.changeSelected.bind(null, 1)} className="z-depth-1 characterBoard--arrowRight" id="arrowRight" />
          </span>
          <hr />
          <img src={"/icons/" + char.element + ".svg"} className="characterBoard--plateSymbol" />
          <h4>{char.title}</h4>
          <div className="row">
            <div className="col s6 left-align">
              <img src={"/icons/add.svg"} onClick={this.confirmAdd} className="characterBoard--plateButton" />
            </div>
            <div className="col s6 right-align">
              <img src={"/icons/edit.svg"} onClick={this.toggleEdit} className="characterBoard--plateButton" />
            </div>
          </div>
        </div>
      </div>)
    } else {
      // editable character form
      return (<div>
        <div>
          <img src={char.avatar} className="z-depth-2 characterBoard--avatar" id="avatar" />
        </div>
        <div className="characterBoard--characterPlate z-depth-1">
          <span>
            <img src={"/icons/arrowLeft.svg"} className="z-depth-1 characterBoard--arrowLeft faded" id="arrowLeft" />
            <h3>Edit Character Details</h3>
            <img src={"/icons/arrowRight.svg"} className="z-depth-1 characterBoard--arrowRight faded" id="arrowRight" />
          </span>
          <hr />
          <form id="editForm">
            <div className="row">
              <div className="input-field col s12">
                <input defaultValue={char.name} id="name" type="text" className="validate" />
                <label className="active" for="name">Name</label>
              </div>
              <div className="input-field col s12">
                <select id="element">
                  <option value="air">Air</option>
                  <option value="fire">Fire</option>
                  <option value="earth">Earth</option>
                  <option value="water">Water</option>
                </select>
                <label for="element-select">Element</label>
              </div>
              <div className="input-field col s12">
                <input defaultValue={char.title} id="title" type="text" className="validate" />
                <label className="active" for="title">Title</label>
              </div>
            </div>
          </form>
          <div className="row">
            <div className="col s4 left-align">
              <img src={"/icons/cancel.svg"} onClick={this.toggleEdit} className="characterBoard--plateButton" />
            </div>
            <div className="col s4 center">
              <img src={"/icons/trash.svg"} onClick={this.confirmDelete.bind(null, char._id)} className="characterBoard--plateButton" />
            </div>
            <div className="col s4 right-align">
              <img src={"/icons/done.svg"} onClick={this.confirmSubmit.bind(null, char._id)} className="characterBoard--plateButton" />
            </div>
          </div>
        </div>
      </div>)
    }
  },
	render() {
		return (
			<div className="row">

        <div className="col s12 l4 push-l4 center">
          {this.renderCharacterColumn()}
        </div>

        <div className="col s12 l4 pull-l4 center">
          <button className="characterBoard--majorButton waves-effect waves-light waves-air"> {/* waves-air sets the background color of the button, slightly hacky */}
            <h3>Stories</h3>
            <h4>Post events from your life that have helped shape this character</h4>
          </button>

          <div className="characterBoard--majorButton waves-effect waves-light waves-water">
            <h3>Patterns</h3>
            <h4>Review posted stories and discover patterns that help explain this character’s actions</h4>
          </div>
        </div>

        <div className="col s12 l4 center">
          <div className="characterBoard--majorButton waves-effect waves-light waves-fire">
            <h3>Sayings</h3>
            <h4>Post phrases and opinions that this character uses for motivation</h4>
          </div>

          <div className="characterBoard--majorButton waves-effect waves-light waves-earth">
            <h3>Concepts</h3>
            <h4>Review posted sayings and discover common concepts</h4>
          </div>
        </div>
      </div>
		)
	}
});