import React, { Component } from 'react';
import * as moment from 'moment';

class DayBlock extends Component {


onClick = (e, index) => {
  var badgesHoraire = document.querySelectorAll('.badge_horaire');
  badgesHoraire.forEach(function(badge){
    badge.classList.remove('resa_selected');
  });
  if (e.target.classList.contains('badge_horaire')) {
    e.target.classList.add('resa_selected');
  }
  if (e.target.parentNode.classList.contains('badge_horaire')) {
    var parent = e.target.parentNode;
    parent.classList.add('resa_selected');
  }
};


 render() {

   const day = this.props.Day;
   var date = moment(day.day).format("ddd D MMM");
   var seance = day.seance;
   return (
     <div className="day_block_resa" >
      <h5 className="date_block_resa">{date}</h5><br/>
      {
        seance.map((seance, index) =>
        <div key={index} className="badge_horaire" onClick={this.onClick}>
          <p className="hour_resa">{moment(seance.hour).format('LT')}</p>
          <span className="separation"></span>
          <div className= {`format_badge_resa ${seance.format}`} ></div>
          <p className="version_badge_resa">{seance.version}</p>
        </div>)
      }
     </div>
  )
 }
}

export default DayBlock;
