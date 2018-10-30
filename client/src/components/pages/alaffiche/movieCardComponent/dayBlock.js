import React, { Component } from 'react';

//Import moment
import * as moment from 'moment';

//Typy
import t from 'typy';

class DayBlock extends Component {

   handleClick = (e, seanceId, dayId) => {
      //STYLING BADGES ON click
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

      //CALL BADGE SELECTED FUNCTION
      this.props.handleBadgeSelected(seanceId, dayId);
    }

   render() {
     const day = this.props.Day;
     const date = moment(day.day).format("ddd D MMM");
     const seance = day.seance;
     const handleClick = this.handleClick.bind(this);

     function getSeances(seance, handleClick){

       var seanceIdArray = [];

       for(let i = 0; i < Object.keys(seance).length; i++){
         seanceIdArray.push(Object.keys(seance)[i]);
       }

       var seanceArray = []

       seanceIdArray.map((seanceid, index) => {

         var seanceInfo = t(seance, `${seanceid}`).safeObject;

         return seanceArray.push(
           <div key={index}
                className="badge_horaire"
                onClick={(e) => handleClick(e, seanceid, seanceInfo.dayid)}>
             <p className="hour_resa">{moment(seanceInfo.hour).format('LT')}</p>
             <span className="separation"></span>
             <div className= {`format_badge_resa ${seanceInfo.format}`} ></div>
             <p className="version_badge_resa">{seanceInfo.version}</p>
           </div>
         )
       });


       return seanceArray;
     }

     return (
         <div className="day_block_resa">
            <h5 className="date_block_resa">{date}</h5><br/>
            {getSeances(seance, handleClick)}
         </div>
    )
   }

 componentDidUpdate(){
   if (this.props.badgeselected === false) {
     //STYLING BADGES ON click
     var badgesHoraire = document.querySelectorAll('.badge_horaire');
     badgesHoraire.forEach(function(badge){
       badge.classList.remove('resa_selected');
     });
   }
 }

}
export default DayBlock;
