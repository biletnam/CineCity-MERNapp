import React, { Component } from 'react';
import dateFormating from '../../dateFormating';
import * as moment from 'moment';

class CurrentDate extends Component {
  render() {

    var currentDate = moment().format();
    var formatedDate = dateFormating(currentDate);

    return (
      <div className="date date_ms">
        <p className="day">{formatedDate.dayOfWeek} {formatedDate.dayOfMonth}</p>
        <p className="year">{formatedDate.month}<br />{formatedDate.year}</p>
      </div>
    )
  }
}

export default CurrentDate;
