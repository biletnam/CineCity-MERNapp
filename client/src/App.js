import React, { Component } from 'react';

//IMPORT COOKIE SYSTEM
import { CookiesProvider } from 'react-cookie';
import { withCookies } from 'react-cookie';

//IMPORT REDUX
import { Provider } from 'react-redux';
import store from './store';

//IMPORT CSS FILES
import './master.css';

//IMPORT COMPONENTS
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import ModalRenderer from './components/modals/modalRenderer';

import Alaffiche from './components/pages/alaffiche/alaffiche';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      modalCode: null,
      dayId: '',
      seanceId: ''
    }
  }

  handleModalCall = (modalCode, dayId, seanceId) => {
    if(modalCode) {
      this.setState({
        showModal: true,
        modalCode: modalCode,
        dayId: dayId,
        seanceId: seanceId
      })
    } else if(!modalCode){
      console.log("A CTA button has been clicked but no modal code were passed to the handle action function");
    }
  }

  handleClose = () => {
    this.setState({showModal: false})
  }

  render() {
    return (
      <CookiesProvider>
        <Provider store={store}>
            <div className="App">
                {
                  this.state.showModal ?
                  <ModalRenderer cookies={this.props.cookies} handleClose={this.handleClose.bind(this)} showModal={this.state.showModal} modalCode={this.state.modalCode} dayId={this.state.dayId} seanceId={this.state.seanceId}/> :
                  null
                }
              <div  className="blur blurFadeInPaused"></div>
              <Header handleModalCall={this.handleModalCall.bind(this)} cookies={this.props.cookies} />

              <Alaffiche handleModalCall={this.handleModalCall.bind(this)}/>

              <Footer />
            </div>
        </Provider>
      </CookiesProvider>
    );
  }
}

export default withCookies(App);
