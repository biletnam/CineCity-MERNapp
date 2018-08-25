import React, { Component } from 'react';

//IMAGES import
  //BTN
import pin from '../../img/footer/pin.png';
import fb from '../../img/footer/f_logo.png';
  //APP BADGES
import badge_app_store from '../../img/footer/badge-app-store.png';
import badge_google_play from '../../img/footer/badge-google-play.png';


class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="nav_footer">
            <a href="">A laffiche</a>
            <a href="">Prochainement</a>
            <a href="">Evenement</a>
            <a href="">A propos</a>
        </div>

        <div className="btn_footer_ms">
          <div className="button_footer_ms">
              <img src={pin} alt="Localisation" height="27px" width="20" />
              <p>Localisation</p>
            </div>
          <div className="button_footer_ms">
              <img src={fb}  alt="Facebook" height="27px" width="23" />
              <p>Facebook</p>
            </div>
        </div>

        <div className="btn_footer localisation">
          <img src={pin} alt="Localisation" height="27px" width="20" />
          <p>Localisation</p>
        </div>

        <div className="footer_center">
          <form className="newsletter" action="#" method="post">
            <input className="mail_input" type="text" name="mail" placeholder="  Adresse E-mail" />
            <input className="mail_submit" type="submit" name="submit_news" value="Newsletter" />
          </form>
          <div className="badges_app">
            <img src={badge_app_store} alt="Application IOs" width="110px" height="35px" />
            <img src={badge_google_play} alt="Application Android" width="110px" height="35px" />
          </div>
        </div>

        <div className="btn_footer facebook">
          <img src={fb} alt="Facebook" height="20px" width="17" />
          <p>Facebook</p>
        </div>

        <div className="footer_right">
          <a href="">Politique de protection des données personnelles</a>
          <a href="">Mentions légales</a>
          <a href="">Contact</a>
        </div>
      </footer>
    )
  }
}

export default Footer;
