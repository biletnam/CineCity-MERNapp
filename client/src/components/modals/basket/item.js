import React, {Component} from 'react';

//IMPORT Typy
import t from 'typy';

//IMPORT MOMENT JS
import * as moment from 'moment';
import 'moment/locale/fr';
moment.locale('fr');

class Item extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="item">
        <img src={this.props.item.value.poster} className="bucketItemPoster" alt="Logo panier animé" />
        <div className="placeList">
          <p className="itemTitle">{this.props.item.value.title}</p>
          <span className="itemDate">{moment(this.props.item.value.seance.hour).format('L')} à {moment(this.props.item.value.seance.hour).format('LT')}</span>
          {
            this.props.item.value.nbrePmoins > 0 ?
            <p className="itemInfo"><span className="itemNbrePlace">{this.props.item.value.nbrePmoins}</span> × Places - de 26 ans</p> :
            null
          }
          {
            this.props.item.value.nbrePplus > 0 ?
            <p className="itemInfo"><span className="itemNbrePlace">{this.props.item.value.nbrePplus}</span> × Places + de 26 ans</p> :
            null
          }
        </div>
        <div className="deleteTotal">
          <span className="deleteItem" onClick={(e) => this.props.handleDeleteItem(e, this.props.title, this.props.item.value.total, this.props.item.value.seance.dayid, this.props.item.value.seanceId, this.props.item.value.nbreTotalP)}>˟</span>
          <p className="itemTotal">{this.props.item.value.total}€</p>
        </div>
      </div>
    )
  }
}

export default Item;
