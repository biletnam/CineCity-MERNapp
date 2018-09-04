import React, { Component } from 'react';

//REDUX CONNECT
import { connect } from 'react-redux';
import { getAlafficheMovies, getMovie } from '../../../../actions/movieAction';
import PropTypes from 'prop-types';

class Carrousel extends Component {
  constructor(props){
    super(props);
    this.props.getAlafficheMovies();
    this.onClick = this.onClick.bind(this)
  };

  onClick = (e, index) => {
    var posters = document.querySelectorAll('.poster');
    posters.forEach(function(poster){
      poster.classList.remove('poster_selected');
    });
    e.target.classList.add('poster_selected');
    this.props.getMovie(e.currentTarget.dataset.key);
  };


  render() {

    const movies = this.props.alafficheMovies;

    return (
      <div className="poster_carrousel" >
      {
        movies.map((movie, index) =>
          <div key={movie._id}
               data-key={movie._id}
               className='poster '
               onClick={this.onClick}
               style={{backgroundImage:`url(${movie.poster})`}}>
          </div>)
      }
      </div>
    );
  }
}

Carrousel.propTypes = {
  getAlafficheMovies: PropTypes.func.isRequired,
  alafficheMovies: PropTypes.array.isRequired,
  movie: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  alafficheMovies: state.alafficheMovies.alafficheMovies,
  movie: state.alafficheMovies.movie
})

export default connect(mapStateToProps, { getAlafficheMovies, getMovie })(Carrousel);
