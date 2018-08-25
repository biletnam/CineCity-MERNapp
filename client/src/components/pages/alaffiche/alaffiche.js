import React, { Component } from 'react';

//components
import Title from './title';
import Carrousel from './carrouselComponent/carrousel';
import MovieCard from './movieCardComponent/movieCard';

class Alaffiche extends Component {
  render() {
    return (
      <div>
        <Title />
        <Carrousel />
        <MovieCard />
      </div>
    )
  }
}

export default Alaffiche;
