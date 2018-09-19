import React, { Component } from 'react';

//Import react-icons
import { FaFacebook, FaTwitterSquare, FaEnvelopeSquare, FaEnvelope} from 'react-icons/fa';

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
          <a href="">
            <FaFacebook className="social_link"/>
          </a>
          <a href="">
            <FaTwitterSquare className="social_link"/>
          </a>
          <a href="">
            <FaEnvelopeSquare className="social_link"/>
          </a>
        </div>
      </footer>
    )
  }
}

export default Footer;
