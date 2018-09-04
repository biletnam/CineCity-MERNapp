import React, { Component } from 'react';
import * as moment from 'moment';

//array.join() for react
import ReactJoin from 'react-join'

//REDUX CONNECT
import { connect } from 'react-redux';
import { getMovie } from '../../../../actions/movieAction';
import PropTypes from 'prop-types';

//IMAGE IMPORT
import btn_play from '../../../../img/movie_card/rating/btn_play.svg';
import btn_resa from '../../../../img/btn_resa.svg';
import logo_allocine from '../../../../img/movie_card/rating/logo_allocine.svg';

class MovieCard extends Component {
  render() {

    const movie = this.props.movie;
    const actors = [this.props.movie.with];
    const director = [this.props.movie.from];

    function versionBadgesFetching(vf = movie.vf, vo = movie.vo, two_dim = movie.two_dim, three_dim = movie.three_dim) {
      var badges = [];

      if (vf) {
        badges.push(<p className="version">VF</p>)
      }
      if (vo) {
        badges.push(<p className="version">VO</p>)
      }
      if (two_dim) {
        badges.push(<div className="badge_format two_d"></div>)
      }
      if (three_dim) {
        badges.push(<div className="badge_format three_d"></div>)
      }

      return badges;
    }

    function genreBadgesFetching(first_genre = movie.first_genre, second_genre = movie.second_genre) {

      var badges = [];

      badges.push(<div className={'badge_genre ' + first_genre}></div>);
      badges.push(<div className={'badge_genre ' + second_genre}></div>);

      return badges;
    }

    return (
      <div className="movie_card">
        <div className="movie_card_left">
          <div className="img_movie_card click_to_action" style={{backgroundImage:`url(${this.props.movie.img})`}}>
            <a href={movie.trailer} target="_blank">
              <img src={btn_play} className="btn_play" alt="Play - Bande Annonce" />
            </a>
          </div>
          <div className="bloc_resa">
            <p className="phrase_resa">
              <span className="nbr_place">60 places</span> sont encore disponibles à la réservation pour
              <span className="date_meeting">Samedi 2 Juin à 19h25</span>. Il reste
              <span className="time_left">3 heures et 45 minutes pour réserver vos places.</span>
            </p>
            <img className="btn_resa click_to_action"
             src={btn_resa}
             alt="Boutton Reserver" />
          </div>
        </div>
        <div className="movie_card_right">
          <div className="header_movie_card">
            <h3 className="title_mc">{this.props.movie.title}<div className="disclaimer moins_douze"></div></h3>
            <div className="badges_format_container">
              {versionBadgesFetching()}
            </div>
            <div className="movie_genre">
              {genreBadgesFetching()}
            </div>
          </div>
          <div className="img_movie_card_ms click_to_action" style={{backgroundImage:`url(${this.props.movie.img})`}}>
            <img src={btn_play} className="btn_play" alt="Play - Bande Annonce" />
          </div>
          <p className="synopsis">
            {this.props.movie.synopsis}
          </p>
          <div className="movie_info from_with">
           <p>De <span className="from">
             <ReactJoin>{director}</ReactJoin>
             </span>
           </p>
           <p>Avec <span className="with">
             <ReactJoin>{actors}</ReactJoin>
           </span></p>
          </div>
          <div className="movie_info date_rating">
            <p>Sortie le <span className="date_out">{moment(this.props.release_date).format("Do MMMM YYYY")}</span></p>
            <div className="rating_block">
              <img className="logo_allocine" src={logo_allocine} alt="Note Allociné" width="30px" height="30px" />
              <div className="empty_star filled_star" alt="Etoile pleine"></div>
              <div className="empty_star" alt="Etoile vide"></div>
              <div className="empty_star" alt="Etoile vide"></div>
              <div className="empty_star" alt="Etoile vide"></div>
              <div className="empty_star" alt="Etoile vide"></div>
            </div>
          </div>
          <div className="horaire_seance">
            <div className="day_block_resa">
              <h5 className="date_block_resa">Sam. 2 juin</h5><br/>

              <div className="badge_horaire resa_selected">
                <p className="hour_resa">19h25</p>
                <span className="separation"></span>
                <div className="format_badge_resa"></div>
                <p className="version_badge_resa">VF</p>
              </div>
              <div className="badge_horaire">
                <p className="hour_resa">20h30</p>
                <span className="separation"></span>
                <div className="format_badge_resa"></div>
                <p className="version_badge_resa">VO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired
}


const mapStateToProps = state => ({
  movie: state.alafficheMovies.movie
})

export default connect(mapStateToProps, { getMovie })(MovieCard);
