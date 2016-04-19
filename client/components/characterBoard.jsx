import React from 'react';

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
	render() {
    let renderCarousel = () => {
      return this.props.characters.map((char) => (
            <a className="carousel-item" key={char._id}>
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

        <div className="row">
          <div className="col l4 center">
            <h5>Characteristics</h5>

            <div className="row">
              <form className="col s12">
                <div className="row">

                  <div className="input-field col s12">
                    <input id="name" type="text" />
                    <label for="name">Name</label>
                  </div>

                  <div className="input-field col s12">
                    <input id="element" type="text" />
                    <label for="element">Element</label>
                  </div>

                  <div className="input-field col s12">
                    <input id="element" type="text" />
                    <label for="element">Expertise</label>
                  </div>

                </div>
              </form>
            </div>

          </div>
          <div className="col l4 center">
            <h5>Patterns</h5>
            <ul className="collection">
              <li className="collection-item">Eats Lots of Shoes</li>
              <li className="collection-item">Night Sweats</li>
              <li className="collection-item">Great in Bed</li>
            </ul>
          </div>
          <div className="col l4 center">
            <h5>Stories</h5>
            <ul className="collection">
              <li className="collection-item">Yesterday, My Dog Got Out</li>
              <li className="collection-item">Really Did Well</li>
              <li className="collection-item">Made Awesome Breakfast</li>
            </ul>
          </div>
        </div>

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