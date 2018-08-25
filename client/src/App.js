import React, { Component } from 'react';

import { Provider } from 'react-redux';
import store from './store';

import './master.css';

import Header from './components/headerComponent/header';
import CurrentDate from './components/headerComponent/date';
import Footer from './components/footerComponent/footer';

import Alaffiche from './components/pages/alaffiche/alaffiche';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <CurrentDate />

          <Alaffiche />

          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;