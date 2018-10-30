import React, {Component} from 'react';

//IMAGES IMPORT
import BucketAnimated from '../../../img/bucket.gif';
import Bucket from '../../../img/bucket.png';

//IMPORT ITEM
import Item from './item';

//REDUX CONNECT
import { connect } from 'react-redux';
import { getMovie, updateMovieSeance } from '../../../actions/movieAction';
import PropTypes from 'prop-types';

//IMPORT Typy
import t from 'typy';

//IMPORT MOMENT JS
import * as moment from 'moment';
import 'moment/locale/fr';
moment.locale('fr');


class BasketModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      basket: this.props.cookies.getAll({ path: '/basket' }),
      total: 0
    }
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }

  handleDeleteItem = (e, title, subb, dayId, seanceId, nbreTotalP) => {

    this.props.cookies.remove(title);
    e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);

    this.setState({
      total: this.state.total - subb
    })

    var data = {
      dayid: dayId,
      seanceid: seanceId,
      value: Math.abs(nbreTotalP)
    }

    this.props.updateMovieSeance(this.props.movie._id, data);
  }

  getSeance = (allMovies) => {

    var listItemTitle= [];

    for (let i = 0; i < Object.keys(allMovies).length; i++) {
       listItemTitle.push(Object.keys(allMovies)[i]);
    }

    var itemList = [];

    listItemTitle.map((title, index) => {

      var item = t(allMovies, title).safeObject;

      itemList.push(<Item item={item}
                          key={index}
                          title={title}
                          handleDeleteItem={this.handleDeleteItem}
                          getTotal={this.getTotal}/>)
    });

    return itemList;
  }

  render() {
    const handleDeleteItem = this.handleDeleteItem.bind(this);

    return (
      <div className="basketModal">
        <header className="basketHeader">
          {
            (Object.keys(this.state.basket).length === 0 || this.state.total === 0) ?
            <img src={Bucket} className="logo_bucket" alt="Logo panier vide" width="70px"/> :
            <img src={BucketAnimated} className="logo_bucket" alt="Logo panier animé" width="75px"/>
          }
          <h3>Votre panier</h3>
        </header>
        <div className="listItems">
          {
            Object.keys(this.state.basket).length === 0 ?
            <p className="emptyBasket">Votre panier est vide !</p> :
            this.getSeance(this.state.basket, handleDeleteItem)
          }
        </div>
        {
          (this.state.total > 0) ?
          <p className="basketTotal">{this.state.total} €</p> :
          null
        }
      <button className={"checkoutButton " + (this.state.total > 0 ? "click_to_action" : "ButtonDesactivated")}>Paiement</button>
    </div>
    )
  }

  componentDidMount() {

    var total = [];

    for (let i = 0; i < Object.keys(this.state.basket).length; i++) {
       var item = t(this.state.basket, Object.keys(this.state.basket)[i]).safeObject;
       total.push(item.value.total)
    }

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    this.setState({
      total: total.reduce(reducer, 0)
    })
  }
}

const mapStateToProps = state => ({
  movie: state.alafficheMovies.movie,
  updateMovieSeance: PropTypes.func.isRequired
})

export default connect(mapStateToProps, { getMovie, updateMovieSeance })(BasketModal);
