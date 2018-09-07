import React, { Component } from 'react';
import * as moment from 'moment';

class DayBlock extends Component {
 constructor(props){
   super(props);
   this.state = {
     day: {
            "day": "2018-15-08T20:30:00+02:00",
            "seance": [
                {
                    "hour": "2018-15-08T19:30:00+02:00",
                    "place": 60,
                    "format": "2D",
                    "version": "VF"
                },
                {
                    "hour": "2018-15-08T20:30:00+02:00",
                    "place": 45,
                    "format": "3D",
                    "version": "V0"
                }
            ]
        }
  }
}


 render() {
   console.log(day);
   const day = this.state.day;
   var date = moment(day.day).format("ddd D MMM");
   var seance = day.seance;
   return (
     <div className="day_block_resa" >
      <h5 className="date_block_resa">{date}</h5><br/>
      {
        seance.map((seance, index) =>
        <div key={index} className="badge_horaire">
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
