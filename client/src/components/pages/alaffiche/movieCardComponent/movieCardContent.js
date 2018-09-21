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

//IMPORT RESERVATION BLOCK Component
import DayBlock from './dayBlockResa';

//IMPORT SEARCH SEANCE IN JSON DOCUMENT METHOD


class MovieCardContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      badgeSelected: false,
      day: '',
      seance: ''
    }
  }

  blurredBackgorundImage = () => {
    //STYLING BLURRED BACKGROUND
    const movie = this.props.movie;

    var background = document.querySelector(".blur");
    background.style.backgroundImage = `url(${movie.img})`;
    if (background.classList.contains('blurFadeInPaused')) {
      background.classList.remove('blurFadeInPaused');
    }
  }

  badgeSelected = (seanceId, dayId, movie = this.props.movie) => {
    //GET DAY AND SEANCE OF CLICKED BAGDE
    var seanceArray = movie.seance;
    var jour;
    for (var i = 0; i < seanceArray.length; ++i){
      if (seanceArray[i].id == dayId){
        jour = seanceArray[i];
      }
    };

    if (jour) {
      var seance;
      for (var i = 0; i < jour.seance.length; ++i){
        if (jour.seance[i].id == seanceId){
          seance = jour.seance[i];
        }
      }
    } else {
      console.log("Jour n'est pas défini." + jour);
    }

    //SETTING STATE FOR SELECTED BADGE
    this.setState({
      badgeSelected: true,
      day: jour,
      seance: seance
    })
  }

  handleResaBtnClick = () => {
    console.log("Reservation pour la séance :");
    console.log(this.state.seance);
  }


  render() {
      //FETCHING DATA FUNCTIONS
      const movie = this.props.movie;
      const actors = [this.props.movie.with];
      const director = [this.props.movie.from];
      const seance = this.props.movie.seance;

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

        badges.push(<div className={'badge_genre'}>{first_genre}</div>);
        badges.push(<div className={'badge_genre'}>{second_genre}</div>);

        return badges;
      }

      function ratingStars(rate = movie.rating) {
        const maxRate = 5;
        const emptyStars = maxRate - rate;
        var stars = [];

        for(let i = 0; i < rate; i++){
          stars.push(<div className="empty_star filled_star" alt="Etoile pleine"></div>);
        }

        for(let i = 0; i < emptyStars; i++){
          stars.push(<div className="empty_star" alt="Etoile pleine"></div>);
        }

        return stars;
      }

      function dAtmos(){
        if(movie.d_atmos === true){
          return <div className="d_atmos"></div>
        }
      }

    return (
      <div className="movie_card">
        <div className="movie_card_left">
          <div className="img_movie_card click_to_action" style={{backgroundImage:`url(${this.props.movie.img})`}}>
            <a href={movie.trailer} target="_blank">
              <img src={btn_play} className="btn_play" alt="Play - Bande Annonce" />
            </a>
          </div>
        </div>
        <div className="movie_card_right">
            <div className="header_movie_card">
              <h3 className="title_mc">{this.props.movie.title}</h3>
                <div className="badges_format_container">
                  {versionBadgesFetching()}
                  {dAtmos()}
                </div>
                <div className="movie_genre">
                  {genreBadgesFetching()}
                </div>
              </div>
            <div className="img_movie_card_ms click_to_action" style={{backgroundImage:`url(${this.props.movie.img})`}}>
                <img src={btn_play} className="btn_play" alt="Lien vers la Bande Annonce" />
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
              <p>Sortie le <span className="date_out">{moment(this.props.movie.release_date ? this.props.movie.release_date : '-').format("Do MMMM YYYY")}</span></p>
              <div className="rating_block">
                <img className="logo_allocine" src={logo_allocine} alt="Note Allociné" width="30px" height="30px" />
                {ratingStars()}
              </div>
            </div>
          <div className="horaire_seance">
              {
                this.state.badgeSelected ?
                <img className="btn_resa click_to_action" src={btn_resa} onClick={this.handleResaBtnClick}alt="Boutton Reserver" /> :
                <img className="btn_resa desactivated" src={btn_resa} alt="Boutton Reserver Désactivé" />
              }
              {
                seance.map((day, index) => {
                  return <DayBlock Day={day} badgeSelected={this.badgeSelected.bind(this)} />
                })
              }

            </div>
        </div>
      </div>
    )
  }
  componentDidMount(){
    this.blurredBackgorundImage();
  }
  componentDidUpdate(){
    this.blurredBackgorundImage();
  }
}

MovieCardContent.propTypes = {
  movie: PropTypes.object.isRequired
}


const mapStateToProps = state => ({
  movie: state.alafficheMovies.movie
})

export default connect(mapStateToProps, { getMovie })(MovieCardContent);
