import React, {Component} from 'react';

class Poster extends Component {

  render(props) {
    return (<div key={props.key} data-key={props.key} className= "poster + {props.selected}" onClick={this.onClick} style={{
        backgroundImage: `url({props.poster})`
      }}></div>)
  }
}

export default Poster;
