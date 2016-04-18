import React from 'react';

export default CharacterBoard = React.createClass({
	componentDidMount() {
		$(document).ready(function(){
			$('.carousel').carousel({
        dist: -50
      });
    });
	},
	render() {
		return (
			<div>
				<div className="carousel" style={styles.carousel}>
					<a className="carousel-item" href="#one!"><img src="http://lorempixel.com/250/250/nature/1" /></a>
					<a className="carousel-item" href="#two!"><img src="http://lorempixel.com/250/250/nature/2" /></a>
					<a className="carousel-item" href="#three!"><img src="http://lorempixel.com/250/250/nature/3" /></a>
					<a className="carousel-item" href="#four!"><img src="http://lorempixel.com/250/250/nature/4" /></a>
					<a className="carousel-item" href="#five!"><img src="http://lorempixel.com/250/250/nature/5" /></a>
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