import React, { Component } from 'react';
import CurrentDate from './date';

//IMAGES IMPORT
import logo from '../../img/header/logo_menu.svg';
import arrow from '../../img/header/encoche_dropdown.svg';
import btn_drop from '../../img/header/dropdown.svg';
  //DROPDOWN MENU
import btn_poster from '../../img/header/poster.svg';
import btn_calandar from '../../img/header/calandar.svg';
import btn_event from '../../img/header/event.svg';
import btn_info from '../../img/header/info.svg';

class Header extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      navBarElements: ['A l\'affiche', 'Prochainement', 'Evenement', 'À propos' ]
    };
  }

  render() {

    return (
      <header className="">
        <nav className="">
          <h1>
            <img className="bright_up" src={logo} alt="Logo" width="42,9px" />
            Cinéma<span className="city bright_up">City</span>
          </h1>
          <img  className="btn_drop" src={btn_drop} alt="Boutton menu" width="27px" height="27px" />
          <div className="" id="menu_dropdown">
            <img src={arrow} alt="" className="arrow" width="15px" height="15px" />
            <a href="" className="bright_up"><img alt="" src={btn_poster} width="35px" height="35px" /></a>
            <a href="" className="bright_up"><img alt="" src={btn_calandar} width="35px" height="35px" /></a>
            <a href="" className="bright_up"><img alt="" src={btn_event} width="35px" height="35px" /></a>
            <a href="" className="bright_up"><img alt="" src={btn_info} width="35px" height="35px" /></a>
          </div>
          <div className="menu">
            {
              this.state.navBarElements.map(function(name, i){
                return <a key={i} href="" className="">{name}</a>
              })
            }
          </div>
        </nav>
        <CurrentDate />
      </header>
    )
  }
}

export default Header;
