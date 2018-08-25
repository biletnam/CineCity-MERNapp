import * as moment from 'moment';
import 'moment/locale/fr';

//SETTING MOMENT.JS
moment.locale('fr');

const dateFormating = (date) => {

  var mom = moment(date);

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

export default dateFormating;
