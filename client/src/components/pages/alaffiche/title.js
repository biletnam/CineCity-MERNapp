import React, { Component } from 'react';
import * as moment from 'moment';

class Title extends Component {
  render() {
    var periodStart = moment().format();

    function periodEnd(periodStart) {
      var duration = moment.duration(10, 'days');
      var foo = moment(periodStart).add(duration);
      return moment(foo).format('D/MM');
    };

    return (
      <div className="page_title">
        <h2>Actuellement à l'affiche de votre cinéma</h2>
        <p>Du {moment(periodStart).format('D/MM')} au {periodEnd(periodStart)}</p>
      </div>
    )
  }
}

export default Title;
