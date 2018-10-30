import React, { Component } from 'react';
import Date from './date';
import * as moment from 'moment';

//IMAGES IMPORT
import logo from '../../img/header/logo_menu.svg';
import btn_drop from '../../img/header/dropdown.svg';
import bucket_button from '../../img/bucket.png';
import BucketAnimated from '../../img/bucket.gif';


class Header extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      navBarElements: ['A l\'affiche', 'Prochainement', 'Evenement', 'À propos' ],
      basket: this.props.cookies.getAll({ path: '/basket' })
    };
  }

  handleBasketClick = (e) => {
    if (e){
      var modalCode = e.target.getAttribute("data-modal");
      this.props.handleModalCall(modalCode);
    }
  }

  render() {

    var date = moment();

    return (
      <header className="">
        <nav className="">
          <h1>
            <img className="bright_up" src={logo} alt="Logo" width="42,9px" />
            Cinéma<span className="city bright_up">City</span>
          </h1>
          <img  className="btn_drop" src={btn_drop} alt="Boutton menu" width="27px" height="27px" />
          <div className="" id="menu_dropdown">
            {
              //Futur hamburger menu
            }
          </div>
          <div className="menu">
            {
              this.state.navBarElements.map(function(name, i){
                return <li key={i}>
                          <a  href="" className="">{name}</a>
                       </li>
              })
            }
          </div>
          <img className="bucket_button"
            src={bucket_button}
            data-modal="2"
            onClick={(e) => this.handleBasketClick(e)}
            alt="Panier"
            width="40px"
            height="40px"/>
        </nav>
        <Date date={date} />
      </header>
    )
  }
}

export default Header;
