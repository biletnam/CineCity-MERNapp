import React, { Component } from 'react';

//REDUX CONNECT
import { connect } from 'react-redux';
import { getMovie } from '../../../../actions/movieAction';
import PropTypes from 'prop-types';

//IMPORT LOADING GIF
import LogoLoading from '../../../../img/loadingIndicator.gif';

import MovieCardContent from  './movieCardContent';

class MovieCard extends Component {

  handleModalCall = (modalCode, dayId, seanceId) => {
    this.props.handleModalCall(modalCode, dayId, seanceId);
  }

  render() {
    var content;
    if (!this.props.movie.title) {
      return content = <div className="moviecard_empty_alert">
                          <h2>Selectionnez votre film !</h2>
                          <p>CinéCity a listé pour vous les films projectionné ces 10 prochains jours.</p>
                          <img alt="logo" src={LogoLoading} height="80" width="80"/>
                       </div>;
    }
    else {
      return content = <MovieCardContent handleModalCall={this.handleModalCall.bind(this)} />;
    }

  }
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired
}


const mapStateToProps = state => ({
  movie: state.alafficheMovies.movie
})

export default connect(mapStateToProps, { getMovie })(MovieCard);
