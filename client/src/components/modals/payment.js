import React, {Component} from 'react';

//REDUX CONNECT
import {connect} from 'react-redux';
import {updateMovieSeance, getMovie} from '../../actions/movieAction';

//IMPORT MOMENT JS
import * as moment from 'moment';
import 'moment/locale/fr';

//IMPORT Typy
import t from 'typy';

//SETTING MOMENT.JS
moment.locale('fr');

class PaymentModal extends Component {
  constructor(props) {
    super(props)
  }

  handlePayment(dayid, seanceid) {
    var seances = this.props.movie.seance[0];
    var completeDay = t(seances, `${dayid}`).safeObject;
    var seanceOfDay = t(completeDay.seance, `${seanceid}`).safeObject;
  }

  render() {
    return (
      <div>
        <button className="nextButton" onClick={() => this.handlePayment(this.props.dayid, this.props.seanceid)}>Confirmer</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  movie: state.alafficheMovies.movie
})

export default connect(mapStateToProps, { getMovie, updateMovieSeance })(PaymentModal);
