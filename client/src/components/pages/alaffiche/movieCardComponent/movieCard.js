import React, { Component } from 'react';

//IMAGE IMPORT
import btn_play from '../../../../img/movie_card/rating/btn_play.svg';
import btn_resa from '../../../../img/btn_resa.svg';
import logo_allocine from '../../../../img/movie_card/rating/logo_allocine.svg';

class MovieCard extends Component {

  render() {
    return (
      <div className="movie_card">
        <div className="movie_card_left">
          <div className="img_movie_card click_to_action">
            <img src={btn_play} className="btn_play" alt="Play - Bande Annonce" />
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
            <h3 className="title_mc"><div className="disclaimer moins_douze"></div></h3>
            <div className="format_badges">
              <p className="format_version vf">VF</p>
              <div className="badge_format d_atmos"></div>
              <div className="badge_format deux_d"></div>
              <div className="badge_format trois_d"></div>
            </div>
            <div className="movie_genre">
              <div className="badge_genre action"></div>
              <div className="badge_genre aventure"></div>
            </div>
          </div>
          <div className="img_movie_card_ms click_to_action">
            <img src="img/movie_card/btn_play.svg" className="btn_play" alt="Play - Bande Annonce" />
          </div>
          <p className="synopsis">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.
          </p>
          <div className="movie_info from_with">
           <p>De <span className="from"> Roar Uthang</span></p>
           <p>Avec <span className="with">Alicia Vikander - Dominic West - Walton Goggins</span></p>
          </div>
          <div className="movie_info date_rating">
            <p>Sortie le <span className="date_out">14 Mars 2018</span></p>
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

export default MovieCard;
