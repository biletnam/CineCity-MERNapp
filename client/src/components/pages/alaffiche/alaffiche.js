import React, { Component } from 'react';

//components
import Title from './title';
import Carrousel from './carrouselComponent/carrousel';
import MovieCard from './movieCardComponent/movieCard';

class Alaffiche extends Component {

  handleModalCall = (modalCode, day, seance) => {
    this.props.handleModalCall(modalCode, day, seance);
  }

  render() {
    return (
      <div>
        <Title />
        <Carrousel />
        <MovieCard handleModalCall={this.handleModalCall.bind(this)} />
      </div>
    )
  }
}

export default Alaffiche;
