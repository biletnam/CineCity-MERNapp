import React, { Component } from 'react';

import Poster from './poster';

import { connect } from 'react-redux';
import { getAlafficheMovies } from '../../../../actions/movieAction';
import PropTypes from 'prop-types';

class Carrousel extends Component {
  constructor(props){
    super(props);
    this.props.getAlafficheMovies();
    this.onClick = this.onClick.bind(this)
  };

  onClick = (e, index) => {
    var posters = document.querySelectorAll('.poster');
    posters.forEach(function(poster){
      poster.classList.remove('poster_selected');
    });
    e.target.classList.add('poster_selected');
  };

  render() {
    const { movies } = this.props.alafficheMovies;
    return (
      <div className="poster_carrousel" >
        {console.log(movies)}

         {
           movies.alafficheMovies(movies).map((movie, index) => <Poster  />)
         }

      </div>
    );
  }
}

Carrousel.propTypes = {
  getAlafficheMovies: PropTypes.func.isRequired,
  alafficheMovies: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  alafficheMovies: state.alafficheMovies
})

export default connect(mapStateToProps, { getAlafficheMovies })(Carrousel);

// <div key={movie._id}
//      data-key={movie._id}
//      className="poster"
//      onClick={this.onClick}
//      style={{backgroundImage:`url(${movie.poster})`}}>
// </div>
