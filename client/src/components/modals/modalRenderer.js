import React, { Component } from 'react';

//IMPORT MODALS
import SimpleResaModal from './resaSimple';
import BasketModal from './basket/basketModal';

class ModalRenderer extends Component {
  content = (modalCode = this.props.modalCode) => {
    if (modalCode == 1 ) {
      return <SimpleResaModal cookies={this.props.cookies} dayId={this.props.dayId} seanceId={this.props.seanceId} close={this.props.handleClose}/>
    }
    else if (modalCode == 2 ) {
      return <BasketModal cookies={this.props.cookies} />
    }
  }
  render() {
    return (
      <div className="modalRenderer">
        <div className="modalBlur" onClick={this.props.handleClose}></div>
        {this.content()}
      </div>
    )
  }
}

export default ModalRenderer;
