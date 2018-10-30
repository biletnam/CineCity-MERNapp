import React, { Component } from 'react';

//Import react-icons
import { FaFacebook, FaTwitterSquare, FaEnvelopeSquare } from 'react-icons/fa';

class Footer extends Component {
  render() {
    return (
      <footer>

        <div className="footer_copyrightcontainer">
          <a href="">CGU</a>
          <a href="">localisation</a>
          <a href="">Mentions légales</a>
          <a href="">Contact</a>
        </div>
        <div className="footer_center">
          <form className="newsletter" action="#" method="post">
            <input className="mail_input" type="text" name="mail" placeholder="Abonnez-vous à notre Newsletter !" />
            <input className="mail_submit" type="submit" name="submit_news" value="Envoyer" />
          </form>
        </div>

        <div className="footer_socialLinks">
          <a target="_blank" href="https://www.pinterest.fr/maximevaydie/cin%C3%A9city-projet-perso/">
            <FaFacebook className="social_link"/>
          </a>
          <a target="_blank" href="https://www.pinterest.fr/maximevaydie/cin%C3%A9city-projet-perso/">
            <FaTwitterSquare className="social_link"/>
          </a>
          <a target="_blank" href="https://www.pinterest.fr/maximevaydie/cin%C3%A9city-projet-perso/">
            <FaEnvelopeSquare className="social_link"/>
          </a>
        </div>
      </footer>
    )
  }
}

export default Footer;
