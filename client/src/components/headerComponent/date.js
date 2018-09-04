import React, { Component } from 'react';
import * as moment from 'moment';
import 'moment/locale/fr';

//SETTING MOMENT.JS
moment.locale('fr');

class Date extends Component {
  render() {

    var currentDate = this.props.date;

    const formatedDate = (currentDate) => {

      var mom = moment(currentDate);

      var DOW = moment(mom).format("ddd");
      var DOM = moment(mom).format("D");
      var M = moment(mom).format("MMMM");
      var Y = moment(mom).format("YYYY");

      var formated = {
        "dayOfWeek": DOW,
        "dayOfMonth": DOM,
        "month": M,
        "year": Y
      };
      return formated;
    }
    
    String.prototype.capitalize = function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
    }

    return (
      <div className="date">
        <p className="day">{formatedDate(currentDate).dayOfWeek.capitalize()} {formatedDate(currentDate).dayOfMonth}</p>
        <p className="year">{formatedDate(currentDate).month.capitalize()}<br />{formatedDate(currentDate).year}</p>
      </div>
    )
  }
}

export default Date;
