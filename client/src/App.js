import React, { Component } from 'react';

import { Provider } from 'react-redux';
import store from './store';

import './master.css';

import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';

import Alaffiche from './components/pages/alaffiche/alaffiche';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div  className="blur blurFadeInPaused"></div>
          <Header />

          <Alaffiche />

          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
