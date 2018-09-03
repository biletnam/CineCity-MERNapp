import React, { Component } from 'react';
import dateFormating from '../../dateFormating';
import * as moment from 'moment';

class CurrentDate extends Component {
  render() {

    var currentDate = moment().format();
    var formatedDate = dateFormating(currentDate);

    String.prototype.capitalize = function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
    }

    return (
      <div className="date">
        <p className="day">{formatedDate.dayOfWeek.capitalize()} {formatedDate.dayOfMonth}</p>
        <p className="year">{formatedDate.month.capitalize()}<br />{formatedDate.year}</p>
      </div>
    )
  }
}

export default CurrentDate;
