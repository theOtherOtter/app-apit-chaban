import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Homebutton extends Component {
  render() {
    return (
        <div>
            <Link to='/'>Return to homepage</Link>
        </div>
    )
  }
}

export default Homebutton;
