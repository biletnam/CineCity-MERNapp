import React, { Component } from 'react';

//REDUX CONNECT
import { connect } from 'react-redux';
import { getMovie } from '../../../../actions/movieAction';
import PropTypes from 'prop-types';

import MovieCardContent from  './movieCardContent';

class MovieCard extends Component {

  render() {
    var content;
    if (!this.props.movie.title) {
      return content = <h1>Veuillez sélectionner un film.</h1>;
    }
    else {
      return content = <MovieCardContent />;
    }

    return({content})
  }
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired
}


const mapStateToProps = state => ({
  movie: state.alafficheMovies.movie
})

export default connect(mapStateToProps, { getMovie })(MovieCard);
