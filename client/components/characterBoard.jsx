import React from 'react';

let CharacterDetails = React.createClass({
  componentDidUpdate() {
    //$("input").val('');
  },
  render() {
    let char = this.props.char;

    if (!char) {
      return (<h3 className="center">Select a Character</h3>);
    }

    return (
      <div>
        <form onSubmit={this.props.updateCharacter.bind(null, char._id)}>
          <div class="input-field">
            <label for="name">{char.name}</label>
            <input id="name" type="text" />
          </div>

          <div class="input-field">
            <label for="element">{char.element}</label>
            <input id="element" type="text" />
          </div>

          <div class="input-field">
            <label for="expertise">{char.expertise}</label>
            <input id="expertise" type="text" />
          </div>

          <div class="input-field">
            <label for="avatar">{char.avatar}</label>
            <input id="avatar" type="text" />
          </div>

          <button onClick={this.props.deleteCharacter.bind(null, char._id)} className="waves-effect waves-light btn red left" name="delete">
            delete <i className="material-icons">delete</i>
          </button>

          <button type="submit" className="waves-effect waves-light btn right" name="action">
            save <i className="material-icons">done</i>
          </button>
        </form>
      </div>
    )
  }
});

export default CharacterBoard = React.createClass({
	componentDidMount() {
		$(document).ready(function(){
			$('.carousel').carousel({
        dist: -50
      });
    });
	},
  componentDidUpdate() {
    $('.initialized').removeClass('initialized');

    $('.carousel').carousel({
      dist: -50
    });
  },
  getInitialState() {
    return {
      active: null
    };
  },
	render() {

    let setSelected = (char) => {
      return this.setState({selected: char});
    }


    let renderCarousel = () => {
      return this.props.characters.map((char) => (
            <a onClick={setSelected.bind(null, char)} className="carousel-item" key={char._id}>
              <img src={char.avatar} alt="Avatar" />
            </a>
      ));
    }

		return (
			<div>
				<div className="carousel" style={styles.carousel}>
          {renderCarousel()}
				</div>

        <div className="center">
          <button onClick={this.props.createNewCharacter} className="waves-effect waves-light btn">New</button>
        </div>

        <CharacterDetails char={this.state.selected} updateCharacter={this.props.updateCharacter} deleteCharacter={this.props.deleteCharacter} />

      </div>
		)
	}
});

let styles = {};

styles.carousel = {
  paddingTop: 0,
  marginTop: 0,
  marginBottom: 0
}