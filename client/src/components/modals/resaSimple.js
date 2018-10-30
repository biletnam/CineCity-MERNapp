import React, { Component } from 'react';

//REDUX CONNECT
import { connect } from 'react-redux';
import { getMovie, updateMovieSeance } from '../../actions/movieAction';
import PropTypes from 'prop-types';

//Typy
import t from 'typy';

//IMPORT MOMENT JS
import * as moment from 'moment';
import 'moment/locale/fr';

//SETTING MOMENT.JS
moment.locale('fr');



class SimpleResaModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      confirmation: false,
      day: '',
      seance: '',
      seanceInfo: '',
      npp: 0,
      npm: 0,
      ntp: 0,
      nppPrice: 5.5,
      npmPrice: 4,
      total: 0
    }
  }

  componentWillMount(){
    var seances = this.props.movie.seance[0];
    var completeDay = t(seances, `${this.props.dayId}`).safeObject;
    var seanceOfDay = t(completeDay.seance, `${this.props.seanceId}`).safeObject;
    this.setState({
      seance: seanceOfDay,
      day: completeDay
    })
  }

//Au clique des bouttons plus/moins
  handleCollect(e){
    var collect = e.target.getAttribute("data-collect");
    var action = e.target.getAttribute("data-action");
    if (collect === "moreTwenty") {
      if(action === "plus"){
        this.setState({npp: this.state.npp + 1, ntp: this.state.ntp + 1, total: this.state.total + this.state.nppPrice})
      } else if(action === "moins"){
        this.setState({npp: this.state.npp - 1, ntp: this.state.ntp - 1, total: this.state.total - this.state.nppPrice})
      }
    } else if (collect === "lessTwenty") {
      if(action === "plus"){
        this.setState({npm: this.state.npm + 1, ntp: this.state.ntp + 1, total: this.state.total + this.state.npmPrice})
      } else if(action === "moins"){
        this.setState({npm: this.state.npm - 1, ntp: this.state.ntp - 1, total: this.state.total - this.state.npmPrice})
      }
    }
  }

//Ajout au panier
  handleNext(){
     var cookieHeader = {
       name: this.props.movie.name,
       value: {
         title: this.props.movie.title,
         movieId: this.props.movie._id,
         poster: this.props.movie.poster,
         dayId:this.props.movie.dayId,
         seanceId: this.props.seanceId,
         seance: this.state.seance,
         nbrePmoins: this.state.npm,
         priceMoins: this.state.npmPrice,
         nbrePplus: this.state.npp,
         pricePlus: this.state.nppPrice,
         nbreTotalP: this.state.npm + this.state.npp,
         total: this.state.total
       },
       options: {path: '/basket'}
      };

     var cookieName = `${this.props.movie._id}_${this.props.seanceId}`;

     this.props.cookies.set(cookieName, cookieHeader);

     if(this.state.total > 0){
       this.setState({confirmation: true})
     }

     setTimeout(() => {this.props.close()}, 1000);

     var data = {
       dayid: this.props.dayId,
       seanceid: this.props.seanceId,
       value: -Math.abs(this.state.ntp)
     }

     this.props.updateMovieSeance(this.props.movie._id, data);
  }

  render() {
    return(
      <div className="resaModal">
          <div>
            <section>
              <h1 className="resaTitle">Réservation</h1>
              <h2 className="movieTitle">{this.props.movie.title}</h2>
              <div className="movieSubtitle">
                <span className="dateSeance">{moment(this.state.seance.hour).format('dddd Do MMMM')} à {moment(this.state.seance.hour).format('LT')}</span>
                <span className="formatVersionSeance">Séance {this.state.seance.format} {this.state.seance.version}</span>
              </div>
            </section>
            {
              this.state.seance.place == 0 ?
              <h3>Il n'y a plus de places disponible pour cette séance !</h3> :
                <form className="placeCollectContainer">
                  <div className="placeClickCollect">
                    <label>Places + 26 ans</label>
                    <p className="price">5.50€</p>
                    <div className="clickToCollect">
                      {
                        this.state.npp > 0 ?
                        <span className="collect moins" data-collect="moreTwenty" data-action="moins" onClick={e =>this.handleCollect(e)}>-</span> :
                          <span className="collect moins" data-collect="moreTwenty" data-action="moins">-</span>
                        }
                        <span className="sousTotal">{this.state.npp}</span>
                        {
                          (this.state.ntp < this.state.seance.place) ?
                          <span className="collect plus" data-collect="moreTwenty"  data-action="plus" onClick={e =>this.handleCollect(e)}>+</span>:
                            <span className="collect plus" data-collect="moreTwenty" data-action="moins">+</span>
                          }
                        </div>
                      </div>
                    <div className="placeClickCollect">
                        <label>Places - 26 ans</label>
                        <p className="price">4€</p>
                        <div className="clickToCollect">
                          {
                            this.state.npm > 0 ?
                            <span className="collect moins" data-collect="lessTwenty" data-action="moins" onClick={e =>this.handleCollect(e)}>-</span> :
                              <span className="collect moins" data-collect="lessTwenty" data-action="moins">-</span>
                            }

                            <span className="sousTotal">{this.state.npm}</span>
                            {
                              (this.state.ntp < this.state.seance.place) ?
                              <span className="collect plus" data-collect="lessTwenty"  data-action="plus" onClick={e =>this.handleCollect(e)}>+</span>:
                                <span className="collect plus" data-collect="lessTwenty" data-action="moins">+</span>
                              }
                            </div>
                          </div>
                    <div className="totalContainer">
                              <p>Total :</p>
                              <span className="total">{this.state.total}</span>
                              <p>€</p>
                            </div>
                    <p className="remainingPlaces">Disponible : {this.state.seance.place} places</p>
                </form>
            }
            {
              this.state.seance.place == 0 ?
              <button className="nextButton ButtonDesactivated" type="button" onClick={() => this.handleNext()}>Ajouter au panier</button> :
              <button className="nextButton" type="button" onClick={() => this.handleNext()}>Ajouter au panier</button>
            }

          </div>
          {
            this.state.confirmation ?
            <p>Vos place ont été ajouté à votre panier !</p> :
              null
            }
      </div>
    )
  }
}

SimpleResaModal.propTypes = {
  movie: PropTypes.object.isRequired,
  updateMovieSeance: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  movie: state.alafficheMovies.movie
})

export default connect(mapStateToProps, { getMovie, updateMovieSeance })(SimpleResaModal);
