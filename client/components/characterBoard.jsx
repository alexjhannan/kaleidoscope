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
            <p>Work in progress...</p>
          </div>
          <div className="col l4 center">
            <h5>Patterns</h5>
            <p>Work in progress...</p>
          </div>
          <div className="col l4 center">
            <h5>Stories</h5>
            <p>Work in progress...</p>
          </div>
        </div>

      </div>
		)
	}
});

let styles = {};

styles.carousel = {
  marginTop: "-70px",
  marginBottom: "-70px"
}